import axios from '@/api/axios.ts';
import endpoints from '@/api/endpoints';

export const fixtureService = {

  async simulateFixture(fixtureId: number): Promise<void> {
    await axios.request({
      method: endpoints.fixtures.simulate.method,
      url: endpoints.fixtures.simulate.url(fixtureId),
    });
  },

};
