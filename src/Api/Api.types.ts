export type GetAirportRequestType = {
  lat: number;
  lon: number;
  limit: number;
  radius: number;
};

export type AirportsResponseType = {
  icao: string;
  iata: string;
  name: string;
  shortName: string;
  municipalityName: string;
  location: {
    lat: number;
    lon: number;
  };
  countryCode: string;
};
