const TeamEndpoints = {
  list: {
    method: 'GET',
    url: () => 'v1/teams',
  },
} as const;

type TeamEndpoints = typeof TeamEndpoints

export type { TeamEndpoints };
export default TeamEndpoints;
