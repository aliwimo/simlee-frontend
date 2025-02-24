import axios from '@/api/axios.ts';
import endpoints from '@/api/endpoints';
import type { AxiosResponse } from 'axios';
import type { League } from '@/types/models/league';
import type { Standing } from '@/types/models/standing';
import type { Fixture } from '@/types/models/fixture';

export const leagueService = {
  async getAll(): Promise<League[]> {
    const response = await axios.request<any, AxiosResponse<League[]>>({
      method: endpoints.league.list.method,
      url: endpoints.league.list.url(),
    });
    return response.data;
  },

  async getOne(leagueId: number): Promise<League> {
    const response = await axios.request<any, AxiosResponse<League>>({
      method: endpoints.league.show.method,
      url: endpoints.league.show.url(leagueId),
    });
    return response.data;
  },

  async getStandings(leagueId: number): Promise<Standing[]> {
    const response = await axios.request<any, AxiosResponse<Standing[]>>({
      method: endpoints.league.standings.method,
      url: endpoints.league.standings.url(leagueId),
    });
    return response.data;
  },

  async getFixtures(leagueId: number, week: number): Promise<Fixture[]> {
    const response = await axios.request<any, AxiosResponse<Fixture[]>>({
      method: endpoints.league.fixtures.method,
      url: endpoints.league.fixtures.url(leagueId, week),
    });
    return response.data;
  },

  async simulate(leagueId: number): Promise<void> {
    await axios.request({
      method: endpoints.league.simulateLeague.method,
      url: endpoints.league.simulateLeague.url(leagueId),
    });
  },

  async simulateWeek(leagueId: number, week: number): Promise<void> {
    await axios.request({
      method: endpoints.league.simulateWeek.method,
      url: endpoints.league.simulateWeek.url(leagueId, week),
    });
  },

  async create(body: any): Promise<League> {
    const response = await axios.request<any, AxiosResponse<League>>({
      method: endpoints.league.store.method,
      url: endpoints.league.store.url(),
      data: body,
    });
    return response.data;
  }
};
