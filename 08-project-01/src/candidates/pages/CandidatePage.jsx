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
          <img src={`../images/candidates/${id}.PNG`} alt="" className="w-full object-cover object-top rounded-lg"/>
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
        </div>
      </div>
      </div>
    </>
  )
}
