import type { Team } from '@/types/models/team';

export type Fixture = {
  id: number;
  week: number;
  home_score: number;
  away_score: number;
  played: boolean;
  home_team: Team;
  away_team: Team;
}
