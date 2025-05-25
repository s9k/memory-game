import { UnitSeconds } from "@/constants";
import { apiPexelListResponseSchema } from "./model";
import { request } from "./utils/request";

type Params = {
  /** @default 1 */
  page?: number;
  /** @default 15 */
  per_page?: number;
};

export async function fetchCurated(params: Params = {}) {
  const json = await request("curated", params, {
    revalidate: UnitSeconds.DAY,
  });

  return apiPexelListResponseSchema.parse(json);
}
