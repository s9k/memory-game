import { UnitSeconds } from "@/constants";
import { apiPexelListResponseSchema } from "./model";
import { request } from "./utils/request";

type Params = {
  /** @default 1 */
  page?: number;
  /** @default 15 */
  per_page?: number;
  orientation?: "landscape" | "portrait" | "square";
  size?: "small" | "medium" | "large";
  query?: string;
  // Not all parameters are enumerated
};

export async function fetchSearch(params: Params) {
  const json = await request("search", params, {
    revalidate: UnitSeconds.DAY,
  });

  return apiPexelListResponseSchema.parse(json);
}
