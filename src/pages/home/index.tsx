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
    },
  );
  return <>123{data?.name || "default"}</>;
};

export default TEst11;
