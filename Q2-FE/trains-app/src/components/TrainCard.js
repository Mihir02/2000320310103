import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const TrainCard = ({ train }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{train.trainName}</Typography>
        <Typography variant="body1">Departure: {train.departureTime.Hours} hours</Typography>
        <Typography variant="body1">Train no.: {train.trainNumber}</Typography>
        <Typography variant="body1">Delay: {train.delayedBy} minutes</Typography>
        <Typography variant="body1">Price AC: {train.price.AC} USD</Typography>
        <Typography variant="body1">Price sleeper: {train.price.sleeper} USD</Typography>
        <Typography variant="body1">Seat Availability AC: {train.seatsAvailable.AC}</Typography>
        <Typography variant="body1">Seat Availability sleeper: {train.seatsAvailable.sleeper}</Typography>
        {/* <Typography variant="body1">Coach Class: {train.coachClass}</Typography> */}
      </CardContent>
    </Card>
  );
};

export default TrainCard;
