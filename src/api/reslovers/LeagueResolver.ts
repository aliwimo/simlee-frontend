import { zodResolver } from '@primevue/forms/resolvers/zod';
import { z } from 'zod';

export const LeagueResolver = zodResolver(
  z.object({
    name: z.string().min(5),
    team_number: z.number().int().min(4).max(20),
    season: z.number().int().min(2000).max(2100),
  }),
);
