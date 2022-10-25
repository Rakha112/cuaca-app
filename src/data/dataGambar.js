import cloud from "../icons/3d weather icons/sun/27.png";
import clear from "../icons/3d weather icons/sun/26.png";
import rain from "../icons/3d weather icons/cloud/7.png";
import thunder from "../icons/3d weather icons/cloud/17.png";
import snow from "../icons/3d weather icons/cloud/23.png";
import mist from "../icons/3d weather icons/sun/4.png";
import haze from "../icons/3d weather icons/sun/4.png";

const gambar = [
  {
    cuaca: "-",
    img: clear,
  },
  {
    cuaca: "Haze",
    img: haze,
  },
  {
    cuaca: "Clear",
    img: clear,
  },
  {
    cuaca: "Clouds",
    img: cloud,
  },
  {
    cuaca: "Snow",
    img: snow,
  },
  {
    cuaca: "Rain",
    img: rain,
  },
  {
    cuaca: "Thunderstorm",
    img: thunder,
  },
  {
    cuaca: "Drizzle",
    img: rain,
  },
  {
    cuaca: "Mist",
    img: mist,
  },
];

export const getImgSrc = (infoCuaca) => {
  return gambar.find((w) => w.cuaca === infoCuaca).img;
};
