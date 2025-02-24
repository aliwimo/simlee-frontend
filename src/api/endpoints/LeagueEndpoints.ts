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
  },
  fixtures: {
    method: 'GET',
    url: (id: number, week: number) => `v1/leagues/${id}/fixtures/${week}`,
  },
  simulateWeek: {
    method: 'POST',
    url: (id: number, week: number) => `v1/leagues/${id}/simulate-week/${week}`,
  },
  simulateLeague: {
    method: 'POST',
    url: (id: number) => `v1/leagues/${id}/simulate`,
  },
} as const;

type LeagueEndpoints = typeof LeagueEndpoints

export type { LeagueEndpoints };
export default LeagueEndpoints;
