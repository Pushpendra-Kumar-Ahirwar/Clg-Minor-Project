import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Newz() {
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=79e678e8cc5e4baeb5ce1c4fbcd7bdca')
        .then((res)=>
        {
            // console.log(res.data.articles)
            setData(res.data.articles);
        })
    })
    const newz=data.map((value,index)=>{
        return(
      
                <div className="card" style={{width:'18rem'}}>
            <img src={value.urlToImage} className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{value.title}</h5>
        <p className="card-text">{value.discription}</p>
            <a href={value.url} className="btn btn-primary">Full Article</a>
        </div>
        </div>
   



        
        )
    })
  return (
   <div className='box'>
{newz}
   </div>
  )
}
