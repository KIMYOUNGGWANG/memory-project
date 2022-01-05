import { Config } from "@/shared/config";
import axios from "axios";

const Instance = axios.create({
  baseURL: Config.TmpHost.base,
});

export default Instance;
