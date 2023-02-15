import { Box, Divider, Drawer, Grid, Icon, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
// import {TurnedInNot} from '@mui/icons-material';

export const SideBar = ({ drawerWidth }) => {
  return (
    <Box
      component={'nav'}
      sx={{ width: {sm: drawerWidth}, flexShrink: {sm: 0} }}
    >
      <Drawer
        variant='permanent' //temporary
        open
        sx={{
          display: { xs: 'block'},
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
        }}
      >
        <Toolbar>
          <Typography variant='h6' noWrap component={'div'}>
            Fernando Herrera
          </Typography>
        </Toolbar>
        <Divider />

        <List>
          {
            ['Enero', 'Febrero', 'Marzo', 'Abril'].map( text => (
              <ListItem key={ text } disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {/* <TurnedInNot /> */}
                    <Icon>turned_in_not</Icon>
                  </ListItemIcon>
                  <Grid container>
                    <ListItemText primary={text}/>
                    <ListItemText secondary={'Lorem ipsum dolor sit amet consectetur adipisicing elit. In, quo?'} />
                  </Grid>
                </ListItemButton>
              </ListItem>
            ))
          }
        </List>
      </Drawer>
    </Box>
  )
}
