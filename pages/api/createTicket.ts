import { Amplify, API, withSSRContext } from "aws-amplify";
import { createTicket } from "../../src/graphql/mutations";
// import config from "../../src/aws-exports";
// Amplify.configure({ ...config, ssr: true });

import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    // const { Auth, API } = withSSRContext({ req });
    await API.graphql({
      query: createTicket,
      variables: { input: req.body },
      authMode: "AWS_IAM",
    });
  } catch (e) {
    console.log("Error API Routes");
    console.error(e);
  }

  res.status(200).json({ name: "OK" });
}
