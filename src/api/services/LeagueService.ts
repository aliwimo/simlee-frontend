import axios from '@/api/axios.ts';
import endpoints from '@/api/endpoints';
import type { AxiosResponse } from 'axios';
import type { League } from '@/types/models/league';

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

  async getStandings(leagueId: number): Promise<League> {
    const response = await axios.request<any, AxiosResponse<League>>({
      method: endpoints.league.standings.method,
      url: endpoints.league.standings.url(leagueId),
    });
    return response.data;
  }
};
