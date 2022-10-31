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

const sleep = (msec) => new Promise((resolve) => setTimeout(resolve, msec));

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

  await sleep(3000);

  while (true) {
    const ret2 = await lambda.getEventSourceMapping({
      UUID: process.env.EventUUID,
    });

    console.log(ret2);

    if (ret2.State === "Disabled") {
      break;
    }
  }

  console.log(ret);

  return {
    statusCode: 200,
    body: JSON.stringify("Hello from Lambda!"),
  };
};
