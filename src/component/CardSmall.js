import { AiFillStar } from "react-icons/ai";
import "./CardSmall.css";

export default function CardSmall({ nama, img, asal, size, color, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <img src={img} alt="" className="photo" />
      <div className="description">
        <div>
          <p id="nama">{nama}</p>
          <p id="asal">{asal}</p>
          
        </div>
        <div>
          <AiFillStar color={color} size={size} />
          <AiFillStar color={color} size={size} />
          <AiFillStar color={color} size={size} />
          <AiFillStar color={color} size={size} />
          <AiFillStar color={color} size={size} />
        </div>
      </div>
    </div>
  );
}