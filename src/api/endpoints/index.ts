import TeamEndpoints from '@/api/endpoints/TeamEndpoints.ts';
import AuthEndpoints from '@/api/endpoints/AuthEndpoints.ts'

const EndpointManager = {
  auth: AuthEndpoints,
  team: TeamEndpoints,
};

export default EndpointManager;
