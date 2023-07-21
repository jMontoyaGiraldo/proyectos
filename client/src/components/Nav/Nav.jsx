import SearchBar from "../SearchBar/SearchBar";
import estilos from "./Nav.module.css";
import { Link, useLocation } from "react-router-dom";
import imagen from "../rick-and-morty/cabezaMorty.png";

const Nave = function (props) {
  const location = useLocation();
  const shouldRenderNav = location.pathname !== "/";

  return shouldRenderNav ? (
    <div className={estilos.lalo}>
      <div className={estilos.lila}>
        <Link to="/home" className={estilos.links}>
        <img src={imagen} alt="detective morty" />
        </Link>
        <Link to="/about" className={estilos.links}>
          <button>About</button>
        </Link>
        <Link to="/favorites" className={estilos.links}>
        <button>Favorites</button>
      </Link>
      </div>
      <div className={estilos.SearchBar}>
        <SearchBar onSearch={props.onSearch} random={props.random} />
      </div>
    </div>
  ) : null;
};

export default Nave;
