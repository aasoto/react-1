import { useState } from "react";
import { useContext } from "react";
import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { SidebarContext } from "../../ui";
import { getCandidateById } from "../helpers";

export const CandidatePage = () => {
  
  const {showSidebar, pathUp} = useContext(SidebarContext);
  
  pathUp();

  const {id} = useParams();

  const navigate = useNavigate();

  const candidate = useMemo(() => getCandidateById(id), [id]);

  const { name, age, country, instagram, meet, placement } = candidate;
  
  const onNavigateBack = () => {
    navigate(-1);
  }

  if ( !candidate ) {
    return <Navigate to="/" />
  }

  return (
    <>
      <div className={`pt-24 pr-5 animate__animated ${ showSidebar ? 'pl-80 animate__fadeInLeft' : 'pl-5 animate__fadeInRight' }`}>
        <h1 className="text-gray-600 font-semibold text-3xl md:text-4xl mb-2">{name}</h1>
        <hr className="border"/>
        <div className={`mt-5 grid grid-cols-1 ${ showSidebar ? 'md:grid-cols-3' : 'md:grid-cols-4'} gap-5`}>
          <div className="col-span-1">
            <img src={`./../images/candidates/${id}.PNG`} alt="" className="w-full object-cover object-top rounded-lg"/>
          </div>
          <div className={`${ showSidebar ? 'col-span-2' : 'col-span-3' }`}>
            <div className="grid grid-cols-3 gap-5">
              <div className="col-span-1">
                <span className={`fi fi-${id} scale-[6] md:scale-[10] translate-x-[53px] md:translate-x-[100px] translate-y-[40px] md:translate-y-[68px] rounded-sm`}></span>
              </div>
              <div className="col-span-2">
                <table className="w-full">
                  <tbody>
                    <tr>
                      <td className="text-gray-500 font-medium text-lg">
                        Country:
                      </td>
                      <td colSpan={2} className="text-gray-600 font-bold text-2xl">
                        {country.toUpperCase()}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-gray-500 font-medium text-lg">
                        Age:
                      </td>
                      <td colSpan={2} className="text-gray-600 font-bold text-2xl">
                        {age}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-gray-500 font-medium text-lg">
                        Instagram:
                      </td>
                      <td colSpan={2} className="text-gray-600 text-xl">
                        <a href={`https://instagram.com/${instagram.slice(1)}`}>
                          {instagram}
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>  
              </div>
            </div>
            <h3 className="mt-20 text-gray-600 font-bold text-2xl">MEET</h3>
            <p className="text-gray-600 text-lg">{meet}</p>
            <button aria-label="btn-back" className="m-5 px-5 py-2 bg-rose-700 hover:bg-rose-800 text-white font-medium hover:font-semibold scale-100 hover:scale-105 shadow-none hover:shadow transition duration-200" onClick={onNavigateBack}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
              </svg>
              Back
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
