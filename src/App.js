import React, {useState} from 'react'
import moment from 'moment/min/moment-with-locales';
import { IconButton } from '@material-ui/core'
import LocationSearchingRoundedIcon from '@material-ui/icons/LocationSearchingRounded'
import { getWeather, getForecast } from './data/Weather'
import InfoCuaca from './components/InfoCuaca'
import { getImgSrc } from './data/dataGambar'
import Card from './components/Card'
import Chart from './components/Chart'

function App() {
  const buatTanggal = (d) => {
    let months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
    let myDays = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']
    let hari = myDays[d.getDay()]
    let tanggal = d.getDate()
    let bulan = months[d.getMonth()]
    let tahun = d.getFullYear()

    return `${hari} ${tanggal} ${bulan} ${tahun}`
  }

  const [lokasi, setLokasi] = useState('')
  const [lokDis, setLokDis] = useState('')
  const [info , setInfo] = useState({
    suhu: "",
    humi:"",
    angin:"",
    terbit:"",
    terbenam: "",
    cuaca: "-",
    daily:"",
    labels: "",
    dailySuhu: ""
  })

  const onSubmit = e => {
      e.preventDefault()
      if(!lokasi || lokasi === '') return
      getData()
      setLokDis(lokasi)
  }

  const getData = async () => {
    try{
      const data = await getWeather(lokasi)
      let lat = data.coord.lat
      let lon = data.coord.lon
      const data2 = await getForecast(lat,lon)
      setInfo({
        suhu: data.main.temp,
        humi: data.main.humidity,
        angin: data.wind.speed,
        terbit: moment.unix(data.sys.sunrise).format("h:mm A"),
        terbenam: moment.unix(data.sys.sunset).format("h:mm A"),
        cuaca: data.weather[0].main,
        daily: data2.data.daily.slice(1, 5),
        labels: data2.data.daily.map ((d) =>{
          return moment.unix(d.dt).locale('id').format('Do MMMM')
        }),
        dailySuhu: data2.data.daily.map ((dSuhu) => {
          return dSuhu.temp.day
        })
      })

    } catch(err){
      console.log(err)
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
              <img src={getImgSrc(info.cuaca)} alt="" />
            </div>
          <InfoCuaca props={info}/>
          </div>
        </div>
        <div className="wrap_kanan">
          <div className="chart">
            <Chart labels={info.labels} suhu={info.dailySuhu}/>
          </div>
          <div className="cuaca__lainHari">
            { info.daily ? info.daily.map((d,index) =>{
              return (
                <Card key={index} props={d}/>
                )
              }) : null
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
