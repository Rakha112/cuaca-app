import React, {useState} from 'react';
import moment from "moment";
import awan from './3d weather icons/sun/26.png'
import {IconButton} from '@material-ui/core'
import LocationSearchingRoundedIcon from '@material-ui/icons/LocationSearchingRounded';
import axios from 'axios';

function App() {
const API_KEY = 'ea6a3ea8ea54930d997f4fdf132e82ff';
const URL = 'https://api.openweathermap.org/data/2.5/weather?';

const getWeather = async (kota) => {
    try {
        const {data} = await axios.get(URL + `q=${kota},ID&appid=${API_KEY}&units=metric`)
        console.log(data)
        return data
     } catch(err){
         throw err
     }
}

  const buatTanggal = (d) => {
    let months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    let myDays = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    let hari = myDays[d.getDay()]
    let tanggal = d.getDate()
    let bulan = months[d.getMonth()]
    let tahun = d.getFullYear()

    return `${hari} ${tanggal} ${bulan} ${tahun}`
  }

  const [lokasi, setLokasi] = useState('')
  const [lokDis, setLokDis] = useState('')
  const [suhu , setSuhu] = useState('')
  const [humi , setHumi] = useState('')
  const [angin , setAngin] = useState('')
  const [terbit, setTerbit] = useState('')
  const [terbenam, setTerbenam] = useState('')

  const onSubmit = e => {
      e.preventDefault()
      if(!lokasi || lokasi === '') return
      getData()
      setLokDis(lokasi)
  }

  const getData = async () => {
    try{
      const data = await getWeather(lokasi)
      setSuhu(data.main.temp)
      setHumi(data.main.humidity)
      setAngin(data.wind.speed)
      let terbit= moment.unix(data.sys.sunrise).format("h:mm A")
      let terbenam= moment.unix(data.sys.sunset).format("h:mm A")
      setTerbit(terbit)
      setTerbenam(terbenam)
      console.log(data)
      console.log(data.status)
    } catch(err){
      // console.log(err)
    }
  }

  
  return (
    <div className="container">
      
      <div className="wrap">
        <div className="wrap_kiri">
          <div className="cari">
          <form action="" onSubmit={onSubmit}>
            <IconButton type="submit" onClick={onSubmit}>
              <LocationSearchingRoundedIcon  />
            </IconButton>
              <input type="text" placeholder="Cari Kota..." value={lokasi} onChange={e => setLokasi(e.target.value)}/>
            </form>
          </div>
          <h1>{lokDis ? lokDis : '-'}</h1>
          <p>{buatTanggal(new Date())}</p>
          <div className="cuaca">
            <div className="gambar__cuaca">
              <img src={awan} alt="" />
            </div>
            <div className="info__cuaca">
              <h2>SUHU</h2>
              <p>{suhu ? suhu : '-'}&deg;C</p>
              <div className="info__lain">
                <div className="info__lainlain">
                  <h2>Humidity</h2>
                  <p>{humi ? humi : '-'}%</p>
                </div>
                <div className="info__lainlain">
                  <h2>Kecepatan Angin</h2>
                  <p>{angin ? angin : '-'}m/s</p>
                </div>
                <div className="info__lainlain">
                  <h2>Terbit</h2>
                  <p>{terbit ? terbit : '-'}</p>
                </div>
                <div className="info__lainlain">
                  <h2>Terbenam</h2>
                  <p>{terbenam ? terbenam : '-'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wrap_kanan">
        </div>
      </div>
    </div>
  );
}

export default App;
