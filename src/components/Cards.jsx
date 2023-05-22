import { Card } from "@components/Card";
import "@css/Cards.css";
function Cards(props) {
  return (
    <div className="cards">
      {props.api.map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export { Cards };
