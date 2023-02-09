import { useContext } from "react";
import { SidebarContext } from "../../ui";
import { CandidateList } from "../components";

export const SemifinalistPage = () => {

  const { showSidebar } = useContext(SidebarContext);

  return (
    <>
      <div className={`pt-24 pr-5 animate__animated ${showSidebar ? 'pl-80 animate__fadeInLeft' : 'pl-5 animate__fadeInRight'}`}>
        <h1 className="text-gray-600 font-semibold text-4xl mb-2">Semifinalists</h1>
        <hr className="border"/>
        <CandidateList placement={'semi-finalist'}/>
      </div>
    </>
  )
}
