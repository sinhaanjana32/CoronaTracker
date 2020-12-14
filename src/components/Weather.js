import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Typography,Grid ,AppBar} from '@material-ui/core'

const Weather = () => {
const [temp, setTemp] = useState('')

useEffect(() => {
      axios.get('https://api.openweathermap.org/data/2.5/weather?q=helsinki&appid=41f4cfe77c565c69a0fa892f6a6fad22&lang=en&units=metric')
        .then((res)=>{
            console.log(res.data)
            setTemp (res.data.main.temp)
        })
        .catch((err)=>console.log(err))

   
}, [temp])


    return (
      <AppBar style={{ alignItems:'center'}}>
          Temperature in Helsinki: <span style={{fontSize:"25px"}}>{temp}°C</span>
      </AppBar>
    )
}

export default Weather


