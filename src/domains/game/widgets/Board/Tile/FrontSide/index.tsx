import { Photo } from "@/domains/photo/model";
import Image from "next/image";

type Props = {
  pairId: number;
  photo?: Photo;
};

export function FrontSide({ pairId, photo }: Props) {
  if (!photo) {
    return null;
  }

  return (
    <Image
      width={256}
      height={256}
      style={{ objectFit: "cover" }}
      src={photo.url}
      alt={photo.alt ?? `Image in tile with pair ${pairId}`}
    />
  );
}
