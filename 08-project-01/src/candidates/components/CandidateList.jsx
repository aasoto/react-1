import { useContext, useMemo } from "react"
import { SidebarContext } from "../../ui";
import { getCandidateByPlacement } from "../helpers";
import { CandidateCard } from "./CandidateCard";

export const CandidateList = ({page, placement}) => {

  const { showSidebar } = useContext(SidebarContext);

  const candidates = useMemo(() => getCandidateByPlacement(placement), [placement]);

  return (
    <div className={`pt-24 pr-5 animate__animated ${showSidebar ? 'pl-80 animate__fadeInLeft' : 'pl-5 animate__fadeInRight'}`}>
      <h1 className="text-gray-600 font-semibold text-4xl mb-2">{page}</h1>
      <hr className="border"/>
      <div className={`my-5 grid gap-4 w-full ${ showSidebar ? 'grid-cols-3' : 'grid-cols-4'}`}>
        {
          candidates.map(candidate => {
            return <CandidateCard key={candidate.id} {...candidate} />
          })
        }
      </div>
    </div>
  )
}
