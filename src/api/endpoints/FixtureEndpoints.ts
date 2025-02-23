const FixtureEndpoints = {
  simulate: {
    method: 'POST',
    url: (id: number) => `v1/fixtures/${id}/simulate`,
  },
} as const;

type FixtureEndpoints = typeof FixtureEndpoints

export type { FixtureEndpoints };
export default FixtureEndpoints;
