import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Batik.css";
import CardSmall from "../component/CardSmall"

export default function Detailbatik() {
  const STAR_COLOR = "rgb(220, 117, 21)";
  const STAR_SIZE = 20;
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api-ta-mdp21.herokuapp.com/Batik")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  let navigate = useNavigate();
  return (
    <>
      <p id="batik">Motif Batik Terpopuler</p>
      {data.slice(0,8).map((item, index) => (
        <Fragment key={item.id}>
          <CardSmall
            nama={item.nama}
            img={item.gambar}
            asal={item.asal}
            size={STAR_SIZE}
            color={STAR_COLOR}
            onClick={() => navigate(`detail/`, { state: item })}
          />
          
          {data.length === index + 1 && <div style={{ marginBottom: 80 }} />}
        </Fragment>
      ))}
    </>
  );
}