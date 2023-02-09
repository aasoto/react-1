
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
      <img className="absolute w-full h-2/3 object-cover object-top rounded-t-lg" src={`public/images/candidates/${id}.PNG`} alt={`${id}-image`} />
    </div>
  )
}
