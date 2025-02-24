import type { LeagueStatusEnum } from '@/enums/LeagueStatus.ts';

export type League = {
  id: number;
  name: string;
  season: number;
  teams_number: number;
  current_week: number;
  status: LeagueStatusEnum;
}
