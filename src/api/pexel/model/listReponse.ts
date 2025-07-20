import { z } from "zod";

const srcSchema = z.object({
  original: z.url(),
  large2x: z.url(),
  large: z.url(),
  medium: z.url(),
  small: z.url(),
  portrait: z.url(),
  landscape: z.url(),
  tiny: z.url(),
});

const photoSchema = z.object({
  id: z.number(),
  width: z.number(),
  height: z.number(),
  url: z.url(),
  photographer: z.string(),
  photographer_url: z.url(),
  photographer_id: z.number(),
  avg_color: z.string(),
  liked: z.boolean(),
  alt: z.string().nullable(),
  src: srcSchema,
});

export const apiPexelListResponseSchema = z.object({
  page: z.number(),
  per_page: z.number(),
  photos: z.array(photoSchema),
  total_results: z.number(),
  next_page: z.url().optional(),
});

export type ApiPexelListResponse = z.infer<typeof apiPexelListResponseSchema>;
