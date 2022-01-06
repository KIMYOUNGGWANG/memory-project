import React from "react";
import { useQuery } from "react-query";

const TEst11: React.FC = () => {
  const { data, isLoading } = useQuery<{ name: string; type: string }>(
    ["user", "test"],
    () => {
      return {
        name: "ac",
        type: "eeee",
      };
    },
    {
      enabled: false,
    }
  );
  console.log(data, isLoading);
  return <>{data?.name || "default"}</>;
};

export default TEst11;
