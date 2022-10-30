/* Amplify Params - DO NOT EDIT
	API_ISSUEMANAGE_GRAPHQLAPIENDPOINTOUTPUT
	API_ISSUEMANAGE_GRAPHQLAPIIDOUTPUT
	API_ISSUEMANAGE_GRAPHQLAPIKEYOUTPUT
	AUTH_ISSUEMANAGE3FF722E2_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT */
const AWS = require("aws-sdk");
const SQS = new AWS.SQS({ apiVersion: "2012-11-05" });

const AWSAppSyncClient = require("aws-appsync").default;
const gql = require("graphql-tag");
global.fetch = require("node-fetch");

let mGql = {};
// const { data } = require("autoprefixer");

const { env } = process;

const graphql_auth = {
  type: "AWS_IAM",
  credentials: {
    accessKeyId: env.AWS_ACCESS_KEY_ID,
    secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
    sessionToken: env.AWS_SESSION_TOKEN,
  },
};

const graphqlClient = new AWSAppSyncClient({
  url: env.API_ISSUEMANAGE_GRAPHQLAPIENDPOINTOUTPUT,
  region: env.REGION,
  auth: graphql_auth,
  disableOffline: true,
});

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);

  mGql = await import("./graphql/mutations.mjs");

  for (let record of event.Records) {
    var visibilityParams = {
      QueueUrl:
        "https://sqs.ap-northeast-1.amazonaws.com/123141636675/sqs-queue-amplifynextjsissuema-develop.fifo",
      ReceiptHandle: record.receiptHandle,
      VisibilityTimeout: 10, // 20 second timeout
    };
    const ret1 = await SQS.changeMessageVisibility(visibilityParams).promise();
    console.log(ret2);

    console.log("SQS Message: %j", record);
    const eventData = JSON.parse(record.body);
    const ret = await eventProcess(eventData);
    console.log(ret);
  }

  return Promise.resolve("Successfully processed DynamoDB record");
};

const eventProcess = async (eventData) => {
  console.log(eventData.event.M.type.S);
  if (eventData.event.M.type.S === "CreateTicket") {
    return await createTicket(eventData);
  }
};

const createTicket = async (eventData) => {
  const args = JSON.parse(eventData.event.M.args.S);
  const input = { ...args, owner: eventData.owner.S };

  const ret = await graphqlClient.mutate({
    mutation: gql(mGql.createTicket),
    variables: {
      input: input,
    },
  });

  return ret;
};
