import { z } from "zod";

const srcSchema = z.object({
  original: z.string().url(),
  large2x: z.string().url(),
  large: z.string().url(),
  medium: z.string().url(),
  small: z.string().url(),
  portrait: z.string().url(),
  landscape: z.string().url(),
  tiny: z.string().url(),
});

const photoSchema = z.object({
  id: z.number(),
  width: z.number(),
  height: z.number(),
  url: z.string().url(),
  photographer: z.string(),
  photographer_url: z.string().url(),
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
  next_page: z.string().url().optional(),
});

export type ApiPexelListResponse = z.infer<typeof apiPexelListResponseSchema>;
