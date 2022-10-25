import React, { useState } from "react";
import "../src/css/pages/app.css";
import Chart from "./components/Chart";
import InfoCuaca from "./components/InfoCuaca";
import Search from "./components/Search";
import moment from "moment";
import Card from "../src/components/Card";
import { getWeather, getForecast } from "../src/data/Weather";
function App() {
  const [lokasi, setLokasi] = useState("");
  const [lokDis, setLokDis] = useState("");
  const [info, setInfo] = useState({
    suhu: "",
    humi: "",
    angin: "",
    terbit: "",
    terbenam: "",
    cuaca: "-",
    daily: "",
    labels: "",
    dailySuhu: "",
  });
  const buatTanggal = (d) => {
    let months = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];
    let myDays = [
      "Minggu",
      "Senin",
      "Selasa",
      "Rabu",
      "Kamis",
      "Jumat",
      "Sabtu",
    ];
    let hari = myDays[d.getDay()];
    let tanggal = d.getDate();
    let bulan = months[d.getMonth()];
    let tahun = d.getFullYear();

    return `${hari} ${tanggal} ${bulan} ${tahun}`;
  };
  const getData = async () => {
    try {
      const data = await getWeather(lokasi);
      let lat = data.coord.lat;
      let lon = data.coord.lon;
      const data2 = await getForecast(lat, lon);
      setInfo({
        suhu: data.main.temp,
        humi: data.main.humidity,
        angin: data.wind.speed,
        terbit: moment.unix(data.sys.sunrise).format("h:mm A"),
        terbenam: moment.unix(data.sys.sunset).format("h:mm A"),
        cuaca: data.weather[0].main,
        daily: data2.data.daily.slice(1, 5),
        labels: data2.data.daily.map((d) => {
          return moment.unix(d.dt).locale("id").format("Do MMMM");
        }),
        dailySuhu: data2.data.daily.map((dSuhu) => {
          return dSuhu.temp.day;
        }),
      });
    } catch (err) {
      console.log(err);
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (lokasi !== "") {
      getData();
      setLokDis(lokasi);
    }
  };
  return (
    <div className="cuaca">
      <div className="cuaca__container">
        <div className="cuaca__container__pertama">
          <Search lokasi={lokasi} setLokasi={setLokasi} onSubmit={onSubmit} />
          <h1>{lokDis ? lokDis : "-"}</h1>
          <p>{buatTanggal(new Date())}</p>
          <InfoCuaca props={info} />
        </div>
        <div className="cuaca__container__kedua">
          <div className="cuaca__chart">
            <Chart labels={info.labels} suhu={info.dailySuhu} />
          </div>
          <div className="cuaca__hari">
            {info.daily
              ? info.daily.map((d, index) => {
                  return <Card key={index} props={d} />;
                })
              : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
