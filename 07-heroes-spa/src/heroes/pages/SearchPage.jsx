import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';
import { useForm } from "../../hooks/useForm"
import { HeroCard } from "../components"
import { getHeroesByName } from "../helpers";

export const SearchPage = () => {

  /** Sirve para colocar el criterio de busqueda en la URL através de query parameters */
  const navigate = useNavigate();

  /** Sirve para obtener los query parameters de la URL */
  const location = useLocation();

  /** Se obtienen los query parameters en un objecto de javascript */
  const { q = '' } = queryString.parse(location.search);

  /** Este es un helper que consulta los heroes según criterio de busqueda recibido en los query parameters */
  const heroes = getHeroesByName(q);

  /** Evalua si el tamaño del criterio de busqueda es igual a cero */
  const showSearch = (q.length === 0);

  /** Evalúa si el tamaño del criterio de busqueda es mayor a cero
   * Y si el tamaño del arreglo es mayor a cero, es decir si encontró registros con el criterio dado.
   */
  const showError = (q.length > 0) && heroes.length === 0;
  
  /** Custom Hook que contiene funciones basicas de como manejar un formulario
   * - Se le tiene que mandar en un objecto el nombre del atribute name de la etiqueta HTML
   */
  const {searchText, onInputChange} = useForm({
    searchText: q
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    console.log(searchText);
    if (searchText.trim().length <= 1) return;

    navigate(`?q=${ searchText }`);
  }

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit} aria-label="form">
            <input 
              type="text" 
              placeholder="Search a hero" 
              className="form-control" 
              name="searchText" 
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-2">
              Search
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />
          
          {/** En la condición del style se evalua si hay algo en el criterio de busqueda.
           * En caso de que no haya nada se muestra la alerta, pero si hay algo esta se oculta.
           */}
          <div className="alert alert-primary animate__animated animate__fadeIn"
            style={{ display: showSearch ? '' : 'none' }} aria-label="div-search">
            Search a hero
          </div>

          {/** La condición del style evalúa si hay algo en el criterio de busqueda y si con este se encontró algo en la lista de heroes */}
          <div className="alert alert-danger animate__animated animate__fadeIn"
            style={{ display: showError ? '' : 'none' }} aria-label="div-no-hero">
            No hero with <b>{q}</b>
          </div>

          {
            heroes.map( hero => (
              <HeroCard key={hero.id} {...hero} />
            ))
          }
        </div>
      </div>
    </>
  )
}
