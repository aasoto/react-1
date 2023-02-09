import { useContext, useMemo } from "react"
import { SidebarContext } from "../../ui";
import { getCandidateByPlacement } from "../helpers";
import { CandidateCard } from "./CandidateCard";

export const CandidateList = ({placement}) => {

  const { showSidebar } = useContext(SidebarContext);

  const candidates = useMemo(() => getCandidateByPlacement(placement), [placement]);

  console.log(candidates);
  return (
    <div className={`my-5 grid gap-4 w-full ${ showSidebar ? 'grid-cols-3' : 'grid-cols-4'}`}>
      {
        candidates.map(candidate => {
          return <CandidateCard key={candidate.id} {...candidate} />
        })
      }
    </div>
  )
}
