import * as cdk from "@aws-cdk/core";
import * as AmplifyHelpers from "@aws-amplify/cli-extensibility-helper";
import * as appsync from "@aws-cdk/aws-appsync";
import { AmplifyDependentResourcesAttributes } from "../../types/amplify-dependent-resources-ref";
//import * as iam from '@aws-cdk/aws-iam';
//import * as sns from '@aws-cdk/aws-sns';
//import * as subs from '@aws-cdk/aws-sns-subscriptions';
//import * as sqs from '@aws-cdk/aws-sqs';

const requestVTL = `
{
    "version": "2018-05-29",
    "operation": "UpdateItem",
    "key" : {
      "id" : $util.dynamodb.toDynamoDBJson($context.arguments.id)
    },
    "update": {
      "expression" : "set #count = #count + :updateValue",
      "expressionNames" : {
           "#count" : "count"
       },
       "expressionValues" : {
           ":updateValue" : { "N" : 1 }
       }
    }
}
`;
const responseVTL = `
$util.qr($ctx.result.put("__operation", "Mutation"))
#if( $ctx.error )
  $util.error($ctx.error.message, $ctx.error.type)
#else
  $util.toJson($ctx.result)
#end
`;

export class cdkStack extends cdk.Stack {
  constructor(
    scope: cdk.Construct,
    id: string,
    props?: cdk.StackProps,
    amplifyResourceProps?: AmplifyHelpers.AmplifyResourceProps
  ) {
    super(scope, id, props);
    /* Do not remove - Amplify CLI automatically injects the current deployment environment in this input parameter */
    new cdk.CfnParameter(this, "env", {
      type: "String",
      description: "Current Amplify CLI env name",
    });

    // Access other Amplify Resources
    const retVal: AmplifyDependentResourcesAttributes =
      AmplifyHelpers.addResourceDependency(
        this,
        amplifyResourceProps.category,
        amplifyResourceProps.resourceName,
        [
          {
            category: "api",
            resourceName: "issuemanage",
          },
        ]
      );

    const resolver = new appsync.CfnResolver(this, "custom-resolver", {
      // apiId: retVal.api.new.GraphQLAPIIdOutput,
      // https://github.com/aws-amplify/amplify-cli/issues/9391#event-5843293887
      // If you use Amplify you can access the parameter via Ref since it's a CDK parameter passed from the root stack.
      // Previously the ApiId is the variable Name which is wrong , it should be variable value as below
      apiId: cdk.Fn.ref(retVal.api.issuemanage.GraphQLAPIIdOutput),
      fieldName: "incrementCount",
      typeName: "Mutation", // Query | Mutation | Subscription
      requestMappingTemplate: requestVTL,
      responseMappingTemplate: responseVTL,
      dataSourceName: "CounterTable", // DataSource name
    });
    /* AWS CDK code goes here - learn more: https://docs.aws.amazon.com/cdk/latest/guide/home.html */

    // Example 1: Set up an SQS queue with an SNS topic

    /*
    const amplifyProjectInfo = AmplifyHelpers.getProjectInfo();
    const sqsQueueResourceNamePrefix = `sqs-queue-${amplifyProjectInfo.projectName}`;
    const queue = new sqs.Queue(this, 'sqs-queue', {
      queueName: `${sqsQueueResourceNamePrefix}-${cdk.Fn.ref('env')}`
    });
    // ????create sns topic
    
    const snsTopicResourceNamePrefix = `sns-topic-${amplifyProjectInfo.projectName}`;
    const topic = new sns.Topic(this, 'sns-topic', {
      topicName: `${snsTopicResourceNamePrefix}-${cdk.Fn.ref('env')}`
    });
    // ???? subscribe queue to topic
    topic.addSubscription(new subs.SqsSubscription(queue));
    new cdk.CfnOutput(this, 'snsTopicArn', {
      value: topic.topicArn,
      description: 'The arn of the SNS topic',
    });
    */

    // Example 2: Adding IAM role to the custom stack
    /*
    const roleResourceNamePrefix = `CustomRole-${amplifyProjectInfo.projectName}`;
    
    const role = new iam.Role(this, 'CustomRole', {
      assumedBy: new iam.AccountRootPrincipal(),
      roleName: `${roleResourceNamePrefix}-${cdk.Fn.ref('env')}`
    }); 
    */

    // Example 3: Adding policy to the IAM role
    /*
    role.addToPolicy(
      new iam.PolicyStatement({
        actions: ['*'],
        resources: [topic.topicArn],
      }),
    );
    */

    // Access other Amplify Resources
    /*
    const retVal:AmplifyDependentResourcesAttributes = AmplifyHelpers.addResourceDependency(this, 
      amplifyResourceProps.category, 
      amplifyResourceProps.resourceName, 
      [
        {category: <insert-amplify-category>, resourceName: <insert-amplify-resourcename>},
      ]
    );
    */
  }
}
