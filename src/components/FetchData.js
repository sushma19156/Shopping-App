import axios from 'axios'
import React, { useEffect, useState } from 'react'


const details = ()=>{
    const getData = localStorage.getItem('abc')
    if(getData){
        return JSON.parse(getData)
    }else{
        return[]
    }
}

function FetchData() {

    const [data,setData] = useState(details())

    const fetchedData = async()=>{
        const url=('https://jsonplaceholder.typicode.com/users')
    try{
        const response = await axios.get(url)
        console.log(response.data)
        setData(response.data)

    }catch(error){
        console.log(error)
    }

    }

    useEffect(() => {
        fetchedData()
    }, [])
   localStorage.setItem('abc',JSON.stringify(data))
    
  return (
    <div>

    </div>
  )
}

export default FetchData