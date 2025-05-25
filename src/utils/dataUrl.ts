export function getDataUrlFromColor(hex: string): string | undefined {
  const canvas = document.createElement("canvas");
  canvas.width = 1;
  canvas.height = 1;

  const ctx = canvas.getContext("2d");
  if (!ctx) {
    return undefined;
  }

  ctx.fillStyle = hex;
  ctx.fillRect(0, 0, 1, 1);

  return canvas.toDataURL();
}
