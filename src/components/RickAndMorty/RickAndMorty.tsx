import { Alert, AppBar, Box, Button, Card, CardActions, CardContent, CardMedia, CircularProgress, GlobalStyles, IconButton, Pagination, Stack, ThemeProvider, Toolbar, Typography } from '@mui/material';
import useRickAndMorty from './useRickAndMorty';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { Directions } from '@mui/icons-material';

function RickAndMorty() {
  const { characters, isLoading, isError, error, count, page, handlePagination, theme, toggleColorMode } = useRickAndMorty();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles styles={{ body: { margin: 0, background: theme.palette.background.default } }} />
      <Box component='main'>
        <Box component='header'>
          <AppBar position="fixed" component='nav'>
            <Toolbar variant="dense" sx={{ display: 'flex', justifyContent: 'center' }}>
              <Typography variant="h6" color="inherit" component="div" sx={{ width: '100%', textAlign: 'right' }}>
                Rick And Morty Challenge (Sistemas Administrativos S.A)
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'end', width: '50%', alignItems: 'center' }}>

                <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit" data-testid='theme-button'>
                  {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                  {theme.palette.mode}
                </IconButton>
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
        <Box component='section' sx={{ padding: '1rem', marginTop: '3rem' }}>
          {
            isLoading ?
              (
                <Box sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  height: '100%',
                  flexDirection: 'column'
                }}>
                  <CircularProgress />
                  <Box>Bringying data from api</Box>
                </Box>
              )
              : isError ?
                (
                  <Stack sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    height: '100%'
                  }}
                    spacing={2}
                  >
                    <Alert severity="error">
                      Oops! An error has ocurred {" "}
                      {error?.message}
                    </Alert>
                  </Stack>

                ) : null
          }
          <>
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              gap: '1rem'
            }}
            >
              <Box sx={{
                display: 'grid',
                gap: '1rem',
                gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))',
                width: '100%'
              }}>
                {
                  characters.map((character, index) => (
                    <Card sx={{ maxWidth: 345 }} key={index} data-testid='card'>
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
              <Stack spacing={2} sx={{ padding: '2rem' }}>
                <Pagination count={count} page={page} onChange={handlePagination} color='primary' />
              </Stack>
            </Box>
          </>
        </Box>
        <Box component='footer'>
          <Typography variant="h6" component="div" sx={{ width: '100%', textAlign: 'center', color: theme.palette.primary.main }}>
            Developed by 👉 <Box component='a' href='https://github.com/Israelramirez9/Israelramirez9' target='_blank'> Israel Ramirez</Box>
          </Typography>
        </Box>
      </Box >

    </ThemeProvider>
  )
}

export default RickAndMorty
