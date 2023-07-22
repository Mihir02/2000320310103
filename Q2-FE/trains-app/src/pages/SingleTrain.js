// src/pages/SingleTrain.js

import React, { useEffect, useState } from 'react';
import TrainCard from '../components/TrainCard';
import axios from 'axios';
import {data} from '../components/data'

const SingleTrain = (props) => {
//   const { trainId } = useParams();
  const [train, setTrain] = useState();

  useEffect(() => {
    // console.log(data);

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

axios.get("http://20.244.56.144/train/trains/"+props.id, config)
    .then((res) => {
        setTrain(res.data)
    })

  return (
    <div>
      {train ? <TrainCard train={train} /> : <p>Loading...</p>}
    </div>
  );
};

export default SingleTrain;
