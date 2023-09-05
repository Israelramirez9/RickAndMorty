import { Alert, AppBar, Box, Button, Card, CardActions, CardContent, CardMedia, CircularProgress, GlobalStyles, IconButton, Pagination, Stack, ThemeProvider, Toolbar, Typography } from '@mui/material';
import useRickAndMorty from './useRickAndMorty';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';


function RickAndMorty() {
  const { characters, isLoading, isError, error, count, page, handlePagination, theme, toggleColorMode } = useRickAndMorty();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles styles={{ body: { margin: 0, background: theme.palette.background.default }, '*': { boxSizing: 'border-box' } }} />
      <Box component='main'>
        <Box component='header'>
          <AppBar position="fixed" component='nav'>
            <Toolbar variant="dense" sx={{ display: 'flex', justifyContent: 'center', position: 'relative', alignItems: 'center' }}>
              <Typography variant="h6" color="inherit" component="div" sx={{ width: '100%', textAlign: 'center' }}>
                Rick And Morty Challenge
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center', position: 'absolute', right: '2rem' }}>
                <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit" data-testid='theme-button'>
                  {theme.palette.mode === 'dark' ? <Brightness7Icon data-testid='light' /> : <Brightness4Icon data-testid='dark' />}
                </IconButton>
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
        <Box component='section' sx={{
          padding: '1rem',
          marginTop: '3rem',
          minHeight: '40rem',
          position: 'relative'
        }}>
          {
            isLoading ?
              (
                <Box sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  height: '100%',
                  flexDirection: 'column',
                  position: 'absolute',
                  inset: 0,
                  zIndex: 100,
                  gap:'2rem'
                }}>
                  <CircularProgress size={80}/>
                  <Typography variant='h5' sx={{ color: theme.palette.primary.main, fontWeight: 'bold' }}>Bringing data from api</Typography>
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
              width: '100%',
              filter: isLoading ? 'blur(8px)' : 'none'
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
          </Box>

        </Box>
        <Stack spacing={2} sx={{ padding: '2rem', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Pagination count={count} page={page} onChange={handlePagination} color='primary' />
        </Stack>
        <Box component='footer'>
          <Typography variant="h6" component="div" sx={{ width: '100%', display: 'flex', alignItems: 'center', color: theme.palette.primary.main, justifyContent: 'center' }}>
            Developed by 👉 <Box component='a' href='https://github.com/Israelramirez9/Israelramirez9' target='_blank'> Israel Ramirez</Box>
          </Typography>
        </Box>
      </Box >

    </ThemeProvider>
  )
}

export default RickAndMorty
