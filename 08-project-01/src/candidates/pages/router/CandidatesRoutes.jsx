import { Route, Routes } from "react-router-dom"
import { Navbar, Sidebar, SidebarProvider } from "../../../ui"
import { HomePage } from "../HomePage"

export const CandidatesRoutes = () => {
  return (
    <>
      <SidebarProvider>
        <Navbar />
        <Sidebar />
      </SidebarProvider>
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage/>}/>
        </Routes>
      </div>
    </>
  )
}
