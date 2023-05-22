import "@css/Cards.css";
import { imgLink } from "@/GetApi";
function Card(props) {
  // console.log(props.movie)
  const { title, poster_path } = props.movie;
  return (
    <div className="mycard">
      <div className="mycard-container">
        {poster_path === null ? (
          <img
            className="mycard-img"
            src={`https://placehold.co/600x600?text=${title}`}
            alt=""
          />
        ) : (
          <img className="mycard-img" src={imgLink + poster_path} alt="" />
        )}
      </div>
      <div className="mycard-title">
        <h4>{title}</h4>
      </div>
    </div>
  );
}

export { Card };
