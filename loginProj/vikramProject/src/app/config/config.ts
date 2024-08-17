import { environment } from "../../environment/environment.prod";

export let config = {
  serverAddress: environment.API_URL,
  version: 'v1',
}
