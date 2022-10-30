/* Amplify Params - DO NOT EDIT
	ENV
	FUNCTION_SENDSQSMESSAGE_NAME
	REGION
Amplify Params - DO NOT EDIT */

const AWS = require("aws-sdk");
const lambda = new AWS.Lambda({
  apiVersion: "2015-03-31",
  region: "ap-northeast-1",
});

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);

  const ret = await lambda
    .updateEventSourceMapping({
      UUID: process.env.EventUUID,
      Enabled: false,
    })
    .promise();

  console.log(ret);

  return {
    statusCode: 200,
    body: JSON.stringify("Hello from Lambda!"),
  };
};
