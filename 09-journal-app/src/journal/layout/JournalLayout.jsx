import { Box, Toolbar } from '@mui/material';
import { NavBar, SideBar } from '../components';

const drawerWidth = 240;

export const JournalLayout = ({children}) => {
  return (
    <Box sx={{ display: 'flex' }}>

      <NavBar drawerWidth={drawerWidth}/>

      <SideBar drawerWidth={drawerWidth}/>

      <Box
        className='animate__animated animate__fadeIn animate__faster'
        component={'main'}
        sx={{ flexGrow: 1, p: 3 }}
      >
        <Toolbar />

        { children }

      </Box>
    </Box>
  )
}
