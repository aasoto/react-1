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

  // import profilePicture from `/images/candidates/${id}.PNG`;

  const profilePicture = `/images/candidates/${id}.PNG`;

  return (
    <div aria-label="candidate-card" className="relative col-span-1 h-[450px] rounded-lg shadow-lg bg-white">
      <img className="absolute w-full h-2/3 object-cover object-top rounded-t-lg" src={profilePicture} alt={`${id}-image`} />
      <h2 className="absolute bottom-28 left-4 text-gray-700 text-xl text-left capitalize">{name.toLowerCase()}</h2>
      <div className="absolute bottom-48 right-10">
        <span className={`fi fi-${id} fis scale-[4] rounded-full`}></span>
      </div>
      <h4 className="absolute bottom-28 right-4 text-gray-700 text-2xl font-bold text-right">{age}</h4>
      <h3 className="absolute bottom-20 left-4 text-gray-800 text-xl font-light italic">{country}</h3>

      <Link aria-label="link-meet" to={`/candidate/${ id }`} className="absolute bottom-4 left-4 text-rose-600 hover:text-rose-700 font-semibold hover:font-bold hover:underline transition duration-200">
        Meet
      </Link>
    </div>
  )
}
