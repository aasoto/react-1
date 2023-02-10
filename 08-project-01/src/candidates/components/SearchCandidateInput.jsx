import { useEffect } from "react";
import { useContext } from "react"
import { useForm } from "../../hooks";
import { getCandidateByName } from "../helpers";

export const SearchCandidateInput = () => {

  const {searchingBox, onInputChange} = useForm({
    searchingBox: ''
  });

  useEffect(() => {
    console.log(getCandidateByName(searchingBox));

  }, [searchingBox]);
  

  return (
    <>
      <input 
        type="text" 
        placeholder="Type the name of the contestant"
        className="w-full h-12 px-5 border rounded-md border-gray-400 placeholder:text-gray-400"
        name='searchingBox'
        value={searchingBox}
        onChange={onInputChange}
      />
    </>
  )
}
