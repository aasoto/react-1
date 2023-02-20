import { Grid, Icon, Typography } from "@mui/material"

export const NothingSelectedView = () => {
  return (
    <Grid
      container
      className='animate__animated animate__fadeIn animate__faster'
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{minHeight: 'calc(100vh - 110px)', backgroundColor: 'primary.main', borderRadius: 3}}
    >
      <Grid item xs={12}>
        <Icon sx={{fontSize: 100, color: 'white'}}>star_outline</Icon>
      </Grid>
      <Grid>
        <Typography color="white" variant="h5">Selecciona o crea una entrada</Typography>
      </Grid>
    </Grid>
  )
}