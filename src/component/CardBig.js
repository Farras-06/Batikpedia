import "./CardBig.css";

export default function CardBig(props) {
  return (
    <div className="containerBig">
      <img src={props.img} alt="" className="posterBig" />
      <div className="descriptionBig">
        <div>
          <p id="nama">{props.nama}</p>
          <p id="asal">{props.asal}</p>
          <p id="makna">{props.makna}</p>
        </div>
        
      </div>
    </div>
  );
}