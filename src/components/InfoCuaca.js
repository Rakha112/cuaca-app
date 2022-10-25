import React from "react";
import "../css/components/infocuaca.css";
import { getImgSrc } from "../data/dataGambar";
const InfoCuaca = ({ props }) => {
  return (
    <div className="cuaca__info">
      <div className="cuaca__icon">
        <img src={getImgSrc(props.cuaca)} alt="cuaca" loading="lazy" />
      </div>
      <div className="cuaca__info__container">
        <h2>SUHU</h2>
        <p>{props.suhu ? props.suhu : "-"}&deg;C</p>
        <p className="cuaca__info__nama">{props.cuaca ? props.cuaca : "-"}</p>
        <div className="cuaca__info__keterangan">
          <div className="keterangan">
            <h2>Humidity</h2>
            <p>{props.humi ? props.humi : "-"}%</p>
          </div>
          <div className="keterangan">
            <h2>Kecepatan Angin</h2>
            <p>{props.angin ? props.angin : "-"}m/s</p>
          </div>
          <div className="keterangan">
            <h2>Terbit</h2>
            <p>{props.terbit ? props.terbit : "-"}</p>
          </div>
          <div className="keterangan">
            <h2>Terbenam</h2>
            <p>{props.terbenam ? props.terbenam : "-"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCuaca;
