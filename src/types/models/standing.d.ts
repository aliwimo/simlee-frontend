import type { Team } from '@/types/models/team';

export type Standing = {
  id: number;
  team_id: number;
  played: number;
  win: number
  lose: number;
  draw: number;
  goals_for: number;
  goals_against: number;
  points: number;
  team: Team;
}
