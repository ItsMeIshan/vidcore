import { Link } from "react-router-dom";

function SearchResultTile(props) {
  return (
    <>
      <Link to={`/search?q=${props.item.replaceAll(" ", "+")}`}>
        <div className="search-tile">{props.item}</div>
      </Link>
    </>
  );
}

export default SearchResultTile;
