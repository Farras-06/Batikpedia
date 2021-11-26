import "./Card.css";

export default function Card({ nama, img, asal, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <img src={img} alt="" className="photo" />
      <div className="description">
        <div>
          <p id="nama">{nama}</p>
          <p id="asal">{asal}</p>
          
        </div>
        
      </div>
    </div>
  );
}