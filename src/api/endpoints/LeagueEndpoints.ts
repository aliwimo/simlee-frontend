const LeagueEndpoints = {
  list: {
    method: 'GET',
    url: () => 'v1/leagues',
  },
  show: {
    method: 'GET',
    url: (id: number) => `v1/leagues/${id}`,
  },
  store: {
    method: 'POST',
    url: () => 'v1/leagues',
  },
  standings: {
    method: 'GET',
    url: (id: number) => `v1/leagues/${id}/standings`,
  }
} as const;

type LeagueEndpoints = typeof LeagueEndpoints

export type { LeagueEndpoints };
export default LeagueEndpoints;
