import { Amplify, API, withSSRContext } from "aws-amplify";
import { createTicket } from "../../src/graphql/mutations";
import config from "../../src/aws-exports";
import { AWSAppSyncClient } from "aws-appsync";
import { createAuthLink, AUTH_TYPE, AuthOptions } from "aws-appsync-auth-link";
import { gql } from "graphql-tag";
Amplify.configure({ ...config, ssr: true });

import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const env = process.env;
    const graphql_auth: AuthOptions = {
      type: "AWS_IAM",
      credentials: {
        accessKeyId: env.AWS_ACCESS_KEY_ID!,
        secretAccessKey: env.AWS_SECRET_ACCESS_KEY!,
        sessionToken: env.AWS_SESSION_TOKEN!,
      },
    };
    const graphql_endoint = config.aws_appsync_graphqlEndpoint;
    console.log(graphql_auth);

    const graphqlClient = new AWSAppSyncClient({
      url: graphql_endoint,
      region: "ap-northeast-1",
      auth: graphql_auth!,
      disableOffline: true,
    });

    console.log("START 0");
    console.log(Amplify.Auth);
    console.log(Amplify.Credentials);
    console.log("END 0");
    // const { Auth, API } = withSSRContext({ req });

    // console.log("START 1");
    // await API.graphql({
    //   query: createTicket,
    //   variables: { input: req.body },
    //   authMode: "AWS_IAM",
    // });
    // console.log("END 1");

    console.log("START 2");
    const postInput = {
      mutation: gql(createTicket),
      variables: {
        input: req.body,
      },
    };
    const res = await graphqlClient.mutate(postInput);
    console.log(res);
    console.log("END 2");
  } catch (e) {
    console.log("Error API Routes");
    console.error(e);
  }

  res.status(200).json({ name: "OK" });
}
