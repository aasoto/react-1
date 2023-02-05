import { Navigate, Route, Routes } from "react-router-dom"

import { DcPage } from "../DcPage"
import { MarvelPage } from "../MarvelPage"
import { Navbar } from "../../../ui"
import { HeroPage } from "../HeroPage"
import { SearchPage } from "../SearchPage"

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container"> 
        <Routes>
          <Route path="marvel" element={<MarvelPage/>}/>
          <Route path="dc" element={<DcPage/>}/>

          <Route path="search" element={<SearchPage/>}/>
          <Route path="hero/:id" element={<HeroPage/>}/>

          <Route path="/" element={<Navigate to={'/marvel'}/>}/>
        </Routes>
      </div>

    </>
  )
}
