import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from '../components/Card'

const Product = () => {
    const [data , setdata] = useState([]);
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then((res)=>{
            console.log(res.data);
            setdata(res.data)

        }).catch((err)=>{
            console.log(err);

        })

    },[])
 
  return (
    <>
    <div className='mt-20 gap-8 flex justify-evenly flex-wrap '>
        {data.length > 0  ? data.map((item)=>{

           return <Card key={item.id} title={item.title} description={item.description} price={item.price} src={item.image} /> 
        }): <h1>Loading...</h1>}
    </div>
    </>
  )
}

export default Product