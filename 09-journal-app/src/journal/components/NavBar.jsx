import { AppBar, Grid, Icon, IconButton, Toolbar, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { startLogout } from '../../store/auth';
// import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';

export const NavBar = ({ drawerWidth = 240 }) => {

  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch( startLogout() );
  }

  return (
    <AppBar
      position='fixed'
      sx={{
        width: { sm: `calc(100% - ${ drawerWidth }px)` },
        ml: { sm: `${ drawerWidth }px` }
      }}
    >
      <Toolbar>
        <IconButton
          color='inherit'
          edge='start'
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          {/* <MenuOutlined/> */}
          <Icon>menu_outlined</Icon>
        </IconButton>

        <Grid container direction={'row'} justifyContent={'space-between'} alignItems='center'>
          <Typography variant='h6' noWrap component={'div'}>JournalApp</Typography>
        
          <IconButton onClick={onLogout} color='error'>
            {/* <LogoutOutlined /> */}
            <Icon>logout_outlined</Icon>
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}
