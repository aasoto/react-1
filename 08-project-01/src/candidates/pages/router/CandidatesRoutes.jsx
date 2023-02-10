import { Route, Routes } from "react-router-dom"
import { Navbar, Sidebar, SidebarProvider } from "../../../ui"
import { SearchProvider } from "../../context"
import { CandidatePage } from "../CandidatePage"
import { FinalistsPage } from "../FinalistsPage"
import { HomePage } from "../HomePage"
import { RunnersUpPage } from "../RunnersUpPage"
import { SemifinalistPage } from "../SemifinalistPage"
import { WinnerPage } from "../WinnerPage"

export const CandidatesRoutes = () => {
  return (
    <>
      <SidebarProvider>
        <Navbar />
        <Sidebar />
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="winner" element={<WinnerPage/>}/>
            <Route path="runnersup" element={<RunnersUpPage/>}/>
            <Route path="finalists" element={<FinalistsPage/>}/>
            <Route path="semifinalists" element={<SemifinalistPage/>}/>
            <Route path="candidate/:id" element={<CandidatePage/>}/>
          </Routes>
      </SidebarProvider>
    </>
  )
}
