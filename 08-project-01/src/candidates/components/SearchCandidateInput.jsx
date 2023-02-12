import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks";
import { getCandidateByName } from "../helpers";

export const SearchCandidateInput = () => {

  const [contestants, setContestants] = useState([]);

  const {searchingBox, onInputChange} = useForm({
    searchingBox: ''
  });

  useEffect(() => {

    setContestants(() => getCandidateByName(searchingBox));

  }, [searchingBox]);
  

  return (
    <>
    <div className="flex flex-col gap-5">
      <input 
        type="text" 
        placeholder="Type the name of the contestant"
        className="w-full h-12 px-5 border rounded-md border-gray-400 placeholder:text-gray-400"
        name='searchingBox'
        value={searchingBox}
        onChange={onInputChange}
      />
      {contestants.map( contestant => {
        return (
          <Link aria-label="link-redirect" key={contestant.id} to={`/candidate/${ contestant.id }`}>
            <div className="p-4 border border-gray-400 rounded-lg flex justify-start items-center gap-5">
              <span className={`fi fi-${contestant.id} scale-[2] rounded-sm`}></span>
              <h3 className="text-gray-600">{contestant.name}</h3>
            </div>
          </Link>
        );
      })}
    </div>
    </>
  )
}
