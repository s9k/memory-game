import { apiPexel } from "@/api/pexel";
import { PAIRS_COUNT } from "@/constants";
import { Photo } from "@/domains/photo/model";

export async function fetchList(): Promise<Photo[]> {
  const response = await apiPexel.fetchCurated({
    per_page: PAIRS_COUNT,
  });

  return response.photos.map((photo) => ({
    url: photo.src.original,
    alt: photo.alt ?? undefined,
    aspectRatio: photo.width / photo.height,
    averageColor: photo.avg_color,
  }));
}
