import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers";

export const HeroPage = () => {

  /** obtiene el id de la url, esto fue definido en <HeroeRoutes/> */
  const {id} = useParams();

  /** para utlizar la navegación en reversa */
  const navigate = useNavigate();

  /** memoriza la funcion con el hook useMemo para que esta se ejecute solo cuando la propiedad id cambie */
  const hero = useMemo(() => getHeroById(id), [id]);

  /** función de regresar a la página anterior */
  const onNavigateBack = () => {
    navigate(-1);
  }

  /** si no encuentra a un heroe regresa a la página principal */
  if ( !hero ) {
    return <Navigate to="/marvel" />
  }

  return (
    <div className="row mt-5 animate__animated animate__fadeInLeft">
      <div className="col-4">
        <img 
          src={`/assets/heroes/${id}.jpg`} 
          alt={ hero.superhero } 
          className="img-thumbnail"
        />
      </div>
      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"> <b>Alter ego:</b> {hero.alter_ego} </li>
          <li className="list-group-item"> <b>Publisher:</b> {hero.publisher} </li>
          <li className="list-group-item"> <b>First appearance:</b> {hero.first_appearance} </li>
        </ul>

        <h5 className="mt-3"> Characters </h5>
        <p>{ hero.characters }</p>

        <button className="btn btn-outline-primary" onClick={onNavigateBack}>
          Back
        </button>
      </div>
    </div>
  )
}
