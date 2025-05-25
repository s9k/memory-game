import { Photo } from "@/domains/photo/model";
import { getDataUrlFromColor } from "@/utils/dataUrl";
import Image from "next/image";

type Props = {
  pairId: number;
  photo?: Photo;
};

const MIN_SIDE = 162;

export function FrontSide({ pairId, photo }: Props) {
  if (!photo) {
    return null;
  }

  const {
    url,
    alt = `Image in tile with pair ${pairId}`,
    aspectRatio,
    averageColor,
  } = photo;

  const blurDataURL = getDataUrlFromColor(averageColor);

  return (
    <Image
      width={Math.max(MIN_SIDE, MIN_SIDE * aspectRatio)}
      height={Math.max(MIN_SIDE, MIN_SIDE / aspectRatio)}
      style={{ objectFit: "cover" }}
      src={url}
      alt={alt}
      placeholder={blurDataURL ? "blur" : "empty"}
      blurDataURL={blurDataURL}
    />
  );
}
