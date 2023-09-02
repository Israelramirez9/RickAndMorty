import { Alert, AppBar, Box, Button, Card, CardActions, CardContent, CardMedia, CircularProgress, Stack, Toolbar, Typography } from '@mui/material';
import useRickAndMorty from './useRickAndMorty';

function RickAndMorty() {
  const { characters, isLoading, isError, error } = useRickAndMorty();

  return (
    <Box component='main'>
      <Box component='header'>
        <AppBar position="static">
          <Toolbar variant="dense" sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography variant="h6" color="inherit" component="div">
              Rick And Morty Challenge (Sistemas Administrativos S.A)
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Box component='section' sx={{ padding: '1rem' }}>
        {
          isLoading ?
            (
              <Box sx={{ display: 'flex' }}>
                <CircularProgress />
              </Box>
            )
            : isError ?
              (
                <Stack sx={{ width: '100%' }} spacing={2}>
                  <Alert severity="error">
                    Oops! An error has ocurred
                    {error?.message}
                  </Alert>
                </Stack>

              ) :
              (
                <Box sx={{
                  display: 'grid',
                  gap: '1rem',
                  gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))'
                }}>
                  {
                    characters.map((character, index) => (
                      <Card sx={{ maxWidth: 345 }} key={index}>
                        <CardMedia
                          sx={{ height: 140 }}
                          image={character.image}
                          title={character.name}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {character.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            species: "{character.species}"
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            status: "{character.status}"
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Button size="small">Share</Button>
                          <Button size="small">Learn More</Button>
                        </CardActions>
                      </Card>
                    ))
                  }
                </Box>
              )
        }
      </Box>
    </Box>
  )
}

export default RickAndMorty
