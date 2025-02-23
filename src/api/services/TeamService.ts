import axios from '@/api/axios.ts';
import endpoints from '@/api/endpoints';
import type { AxiosResponse } from 'axios';

export const teamService = {
  async getAllTeams(): Promise<[]> {
    const response = await axios.request<any, AxiosResponse<[]>>({
      method: endpoints.team.list.method,
      url: endpoints.team.list.url(),
    });
    return response.data;
  },
};
