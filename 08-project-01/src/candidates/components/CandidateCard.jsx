import { Link } from "react-router-dom"

export const CandidateCard = ({
  id,
  name,
  age,
  country,
  instagram,
  meet,
  placement
}) => {
  return (
    <div className="relative col-span-1 h-[450px] rounded-lg shadow-lg bg-white">
      <img className="absolute w-full h-2/3 object-cover object-top rounded-t-lg" src={`images/candidates/${id}.PNG`} alt={`${id}-image`} />
      <h2 className="absolute bottom-28 left-4 text-gray-700 text-xl text-left capitalize">{name.toLowerCase()}</h2>
      <span className={`absolute -bottom-60 left-64 fi fi-${id} fis scale-[4] rounded-full`}></span>
      <h4 className="absolute bottom-28 right-4 text-gray-700 text-2xl font-bold text-right">{age}</h4>
      <h3 className="absolute bottom-20 left-4 text-gray-800 text-xl font-light italic">{country}</h3>

      <Link to={`/candidate/${ id }`} className="absolute bottom-4 left-4">
        Meet
      </Link>
    </div>
  )
}
