import LeagueEndpoints from '@/api/endpoints/LeagueEndpoints.ts';
import FixtureEndpoints from '@/api/endpoints/FixtureEndpoints.ts';

const EndpointManager = {
  fixtures: FixtureEndpoints,
  league: LeagueEndpoints,
};

export default EndpointManager;
