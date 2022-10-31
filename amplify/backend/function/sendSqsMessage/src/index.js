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
const lambda = new AWS.Lambda({
  apiVersion: "2015-03-31",
  region: "ap-northeast-1",
});

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

const forceStopSQSLambdaTriiger = async () => {
  let params = {
    FunctionName:
      "arn:aws:lambda:ap-northeast-1:123141636675:function:disableSqsLambda-develop", //呼び出し先関数名
    InvocationType: "RequestResponse", //同期
    Payload: JSON.stringify({ test: 1 }), //パラメータ
  };
  const ret = await lambda.invoke(params).promise();

  console.log(ret);
};

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);

  await forceStopSQSLambdaTriiger();

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
