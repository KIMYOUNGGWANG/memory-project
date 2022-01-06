import { Config } from "@/shared/config";
import axios from "axios";
import ApiContainer from "..";

const Instance = axios.create({
  baseURL: Config.TmpHost.base,
});

const TmpApi = ApiContainer(Instance);

export default TmpApi;
