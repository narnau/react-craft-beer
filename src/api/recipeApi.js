import { http } from "./apiUtils";

const baseUrl = "https://api.punkapi.com/v2/beers";

export async function loadBeers() {
  let beers = await (await http(baseUrl)).parsedBody;
  return beers;
}
