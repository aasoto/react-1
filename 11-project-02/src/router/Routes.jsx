import {Routes as RoutesList, Route, Navigate} from 'react-router-dom'
import { LoginPage } from '../auth'
import { Navbar } from '../ui'


export const Routes = () => {
  return (
    <>
      <Navbar/>
      <RoutesList>
        <Route path='/auth/login' element={<LoginPage/>}/>
      </RoutesList>
    </>
  )
}
