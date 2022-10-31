/* Amplify Params - DO NOT EDIT
	API_ISSUEMANAGE_GRAPHQLAPIENDPOINTOUTPUT
	API_ISSUEMANAGE_GRAPHQLAPIIDOUTPUT
	API_ISSUEMANAGE_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

// const AWSAppSyncClient = require("aws-appsync").default;
// const gql = require("graphql-tag");
// global.fetch = require("node-fetch");

let mGql = {};
// const { data } = require("autoprefixer");

const { env } = process;

// const graphql_auth = {
//   type: "AWS_IAM",
//   credentials: {
//     accessKeyId: env.AWS_ACCESS_KEY_ID,
//     secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
//     sessionToken: env.AWS_SESSION_TOKEN,
//   },
// };

// const graphqlClient = new AWSAppSyncClient({
//   url: env.API_ISSUEMANAGE_GRAPHQLAPIENDPOINTOUTPUT,
//   region: env.REGION,
//   auth: graphql_auth,
//   disableOffline: true,
// });

const AWS = require("aws-sdk");
const SQS = new AWS.SQS({ apiVersion: "2012-11-05" });

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  // console.log(`EVENT: ${JSON.stringify(event)}`);
  //   mGql = await import("./graphql/mutations.mjs");

  for (let record of event.Records) {
    console.log("DynamoDB Record: %j", record.dynamodb);
    const eventData = record.dynamodb.NewImage;

    var params = {
      MessageDeduplicationId: eventData.id.S,
      MessageGroupId: "SPC4",
      MessageBody: JSON.stringify(eventData),
      QueueUrl: env.CUSTOMEVENTQUEUEURL,
      DelaySeconds: 0,
    };

    const ret = await SQS.sendMessage(params).promise();
    console.log(ret);
  }

  return Promise.resolve("Successfully processed DynamoDB record");
};
