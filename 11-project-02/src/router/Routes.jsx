import {Routes as RoutesList, Route, Navigate} from 'react-router-dom'
import App from '../App'
import { CreateAccountPage, LoginPage } from '../auth'
import { Navbar } from '../ui'


export const Routes = () => {
  return (
    <>
      <Navbar/>
      <RoutesList>
        <Route path='/auth/login' element={<LoginPage/>}/>
        <Route path='/auth/create-account' element={<CreateAccountPage/>}/>
        <Route path='/*' element={<Navigate to='/auth/login'/>}/>
      </RoutesList>
    </>
  )
}
