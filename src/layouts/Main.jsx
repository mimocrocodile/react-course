import { Cards } from "@components/Cards";
import "@css/Main.css";
import { SearchForm } from "@components/SearchForm";
import { FilterForm } from "@components/FilterForm";
function Main(props) {
  console.log(props.api)
  return (
    <div className="main">
      <SearchForm getMovies={props.getMovies} />
      <FilterForm getMovies={props.getMovies} />
      {props.api.length != 0 ? (
        <>
          <h1>Cards</h1>
          <Cards api={props.api} />
        </>
      ) : (
        <h1>Nothing found</h1>
      )}
    </div>
  );
}

export { Main };
