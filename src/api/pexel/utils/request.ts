import { toUrlQuery } from "@/api/utils";

const PEXELS_KEY = process.env.PEXELS_KEY;
const BASE_URL = "https://api.pexels.com/v1";

export async function request(
  url: string,
  params: Record<string, unknown> = {},
  next?: NextFetchRequestConfig
) {
  if (!PEXELS_KEY) {
    throw new Error("Environment variable 'PEXELS_KEY' is not defined");
  }

  const fullUrl = `${BASE_URL}/${url}?${toUrlQuery(params)}`;

  const response = await fetch(fullUrl, {
    headers: {
      Authorization: PEXELS_KEY,
    },
    next,
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `Failed to fetch data:\n${fullUrl}\n${response.status} ${response.statusText}\n${errorText}`
    );
  }

  const json = await response.json();

  return json;
}
