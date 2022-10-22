import { API, Auth, graphqlOperation } from "aws-amplify";
import { CognitoUser } from "@aws-amplify/auth";
import { onCreateEventStore } from "../graphql/subscriptions";

export const eventSubscriber = (fetchData: () => void, user: CognitoUser) => {
  const subscription = API.graphql(
    graphqlOperation(onCreateEventStore, { owner: user.getUsername() })
  );

  if ("subscribe" in subscription) {
    const sb = subscription.subscribe({
      next: (event: any) => {
        console.log("subscribe!");
        fetchData();
      },
      error: (error: any) => {
        console.log(error);
      },
    });

    return () => {
      console.log("Unsubscribe!!");
      if ("unsubscribe" in sb) {
        sb.unsubscribe();
      }
    };
  }
};
