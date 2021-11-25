import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Information.css";
import Card from "../component/Card"

export default function Detailinformation() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api-ta-mdp21.herokuapp.com/Batik")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  let navigate = useNavigate();
  return (
    <>
      <p id="batik">Motif Batik Modern</p>
      {data.slice(9,14).map((item, index) => (
        <Fragment key={item.id}>
          <Card
            nama={item.nama}
            img={item.gambar}
            onClick={() => navigate(`detail/`, { state: item })}
          />
          
          {data.length === index + 1 && <div style={{ marginBottom: 80 }} />}
        </Fragment>
      ))}
    </>
  );
}