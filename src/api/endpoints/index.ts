import TeamEndpoints from '@/api/endpoints/TeamEndpoints.ts';
import AuthEndpoints from '@/api/endpoints/AuthEndpoints.ts';
import LeagueEndpoints from '@/api/endpoints/LeagueEndpoints.ts';

const EndpointManager = {
  auth: AuthEndpoints,
  league: LeagueEndpoints,
  team: TeamEndpoints,
};

export default EndpointManager;
