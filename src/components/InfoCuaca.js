import React from "react";

const InfoCuaca = ({ props }) => {
  return (
    <div className="info__cuaca">
      <h2>SUHU</h2>
      <p>{props.suhu ? props.suhu : "-"}&deg;C</p>
      <p className="nama__cuaca">{props.cuaca ? props.cuaca : "-"}</p>
      <div className="info__lain">
        <div className="info__lainlain">
          <h2>Humidity</h2>
          <p>{props.humi ? props.humi : "-"}%</p>
        </div>
        <div className="info__lainlain">
          <h2>Kecepatan Angin</h2>
          <p>{props.angin ? props.angin : "-"}m/s</p>
        </div>
        <div className="info__lainlain">
          <h2>Terbit</h2>
          <p>{props.terbit ? props.terbit : "-"}</p>
        </div>
        <div className="info__lainlain">
          <h2>Terbenam</h2>
          <p>{props.terbenam ? props.terbenam : "-"}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCuaca;
