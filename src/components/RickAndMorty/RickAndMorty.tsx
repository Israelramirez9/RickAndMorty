import { Alert, AppBar, Box, Button, Card, CardActions, CardContent, CardMedia, CircularProgress, GlobalStyles, IconButton, Pagination, Stack, ThemeProvider, Toolbar, Typography } from '@mui/material';
import useRickAndMorty from './useRickAndMorty';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';

function RickAndMorty() {
  const { characters, isLoading, isError, error, count, page, handlePagination, theme, colorMode } = useRickAndMorty();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles styles={{ body: { margin: 0, background: theme.palette.background.default } }} />
      <Box component='main'>
        <Box component='header'>
          <AppBar position="static">
            <Toolbar variant="dense" sx={{ display: 'flex', justifyContent: 'center' }}>
              <Typography variant="h6" color="inherit" component="div" sx={{ width: '60%', textAlign: 'right' }}>
                Rick And Morty Challenge (Sistemas Administrativos S.A)
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'end', width: '40%', alignItems: 'center' }}>
                {theme.palette.mode}
                <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                  {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
        <Box component='section' sx={{ padding: '1rem', height: '40rem' }}>
          {
            isLoading ?
              (
                <Box sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  height: '100%'

                }}>
                  <CircularProgress />
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
                      Oops! An error has ocurred
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
              <Stack spacing={2} sx={{ padding: '2rem' }}>
                <Pagination count={count} page={page} onChange={handlePagination} color='primary' />
              </Stack>

            </Box>
          </>
        </Box>
      </Box >

    </ThemeProvider>
  )
}

export default RickAndMorty
