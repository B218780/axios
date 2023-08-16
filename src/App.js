import React, { useEffect, useState } from 'react';
import axios from "axios";
import { BallTriangle } from  'react-loader-spinner'

const App = () => {
  const[data, setData] = useState([]);
  const[loader, setLoader] = useState(true);

    const getRequest = async()=>{
      const {data} = await axios.get("https://fakestoreapi.com/products");
      if(data)
      {
        setLoader(false)
        setData(data);
      }else{
        setLoader(true)
      }
    }

    useEffect(()=>{
      const fetchData = ()=>{
        getRequest()
      }
      fetchData()
    },[])

  return (
    <>
      <div style={{position:"absolute", left:"45%", top:"240px"}}>
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="red"
          ariaLabel="ball-triangle-loading"
          wrapperClass={{}}
          wrapperStyle=""
          visible={loader} />
      </div>
      <div style={{paddingLeft:"10%", paddingRight:"10%"}}>
        {
          data.map((item)=>{
            return <h1 style={{backgroundColor: "black", color:"white", marginTop: "20px"}}>{item.title}</h1>
          })
        }
      </div>
    </>
  )
}

export default App