// import getCheck from "Apis/tmp/getCheck";
import { QueryClient } from "react-query";
const getInitialData = async (queryClient: QueryClient) => {
  //await queryClient.fetchQuery(queryKey, queryFn)
  // await queryClient.fetchQuery(["user", "test"], async ({ queryKey }) =>
  //   getCheck({ token: queryKey[1] })
  // );
};

export default getInitialData;
