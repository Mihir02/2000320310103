// src/pages/AllTrains.js

import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { getAllTrains } from '../services/api';
import TrainCard from '../components/TrainCard';
import {data} from '../components/data'
import axios from 'axios';

const AllTrains = () => {
  const [trains, setTrains] = useState([]);
  const [train, setTrain] = useState();

//   useEffect(() => {
    
//     const fetchTrains = async () => {
//       const allTrains = await getAllTrains();
//       setTrains(allTrains);
//     };
//     fetchTrains();
//   }, []);
useEffect(() => {

    const ifToken = () => {
        axios.post("http://20.244.56.144/train/auth", data)
            .then((res) => {
                localStorage.removeItem("token")
                // console.log(res.data.access_token)

                const token = res.data.access_token
                localStorage.setItem("token", token)
            })
    }

    ifToken()
}, [])
let t = localStorage.getItem("token")
const config = {
    headers: {
        Authorization: `Bearer ${t}`
    }
}
// console.log(config)

axios.get("http://20.244.56.144/train/trains", config)
    .then((res) => {
        // console.log(res.data);
        setTrains(res.data)
        
    })

axios.get("http://20.244.56.144/train/trains/2344", config)
    .then((res) => {
        // console.log(res.data)
        setTrain(res.data)
    })

  return (
    <Grid container spacing={2}>
      {trains.map((temp_train,ind) => (
        <Grid item key={temp_train.id} xs={12} sm={6} md={4}>
          <TrainCard train={temp_train} key={temp_train.trainNumber}/>
        </Grid>
      ))}
    </Grid>
  );
};

export default AllTrains;
