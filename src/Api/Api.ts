import axios from 'axios';
import {GetAirportRequestType} from './Api.types';

const instance = axios.create({
  baseURL: 'https://aerodatabox.p.rapidapi.com',
  headers: {
    'x-rapidapi-host': 'aerodatabox.p.rapidapi.com',
    'x-rapidapi-key': 'baaa8ababdmsh96179ae748c877cp152db7jsn89756b112b18',
  },
});

export const airportApi = {
  getAirports(data: GetAirportRequestType) {
    const {lat, lon, limit, radius} = data;
    return instance
      .get(`/airports/search/location/${lat}/${lon}/km/${radius}/${limit}`)
      .then(res => res.data);
  },
};
