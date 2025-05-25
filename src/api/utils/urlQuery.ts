export function toUrlQuery<Params extends Record<string, unknown>>(
  params: Params
): string {
  return new URLSearchParams(
    Object.entries(params)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .filter(([key, value]) => value !== undefined)
      .map(([key, value]) => [key, String(value)])
  ).toString();
}
