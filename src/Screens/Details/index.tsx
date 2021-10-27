import React, {FC} from 'react';
import {DetailsProps} from 'nav/types';
import {DetailsView} from './DetailsView';
import {useSelector} from 'react-redux';
import {selectAirName, selectAirports} from 'redux/Airports/Airports.selectors';

export const DetailsScreen: FC<DetailsProps> = () => {
  const airports = useSelector(selectAirports);
  const selectedAirport = useSelector(selectAirName);
  const airport = airports?.find(a => a.name === selectedAirport);

  return <DetailsView airport={airport} />;
};
