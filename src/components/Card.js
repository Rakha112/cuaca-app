import React from "react";
import moment from "moment";
import "moment/locale/id";
import { getImgSrc } from "../data/dataGambar";

const Card = ({ props }) => {
  return (
    <div className="card">
      <p>{moment.unix(props.dt).locale("id").format("LL")}</p>
      <img src={getImgSrc(props.weather[0].main)} alt="" loading="lazy" />
      <h2>SUHU</h2>
      <p>{props.temp.day}&deg;C</p>
    </div>
  );
};

export default Card;
