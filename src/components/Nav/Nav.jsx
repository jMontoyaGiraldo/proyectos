import SearchBar from './SearchBar/SearchBar';
import estilos from  './Nav.module.css'

const Nave =function(props){
    return(
        <div className={estilos.lalo}>
            <SearchBar onSearch={props.onSearch} />
        </div>
    )
}

export default Nave
