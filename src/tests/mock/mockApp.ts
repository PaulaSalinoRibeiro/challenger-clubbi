import axios from 'axios';
import MockAdpater from 'axios-mock-adapter';

export const mockApp = new MockAdpater(axios);

export const mockGhibliAPI = (dataMock: any[]) => {
  return mockApp.onGet().reply(200, dataMock);
};
