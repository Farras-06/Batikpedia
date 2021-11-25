import { useLocation } from "react-router-dom";
import { Fragment } from "react";
import CardBig from "../component/CardBig";

export default function Detailinformation() {
  const { state } = useLocation();
  return (
    <>
    <p id="batik"></p>
      <div className="containerTop">
        
          <Fragment key={state.id}>
            <CardBig
              nama={state.nama}
              img={state.gambar}
              asal={state.asal}
              makna={state.makna}
            />
            
              <div style={{ marginRight: 40 }} />
            
          </Fragment>
        
      </div>
      </>
  );
}