
import './App.css';
import HomeComponent from './HomeComponent';

import Product  from './Product';

function App() {

// useEffect(async() => {
//   var response=await axios.get("http://localhost:3001/product/getproduct")
//   console.log(response);

// }, [])


  return (
   <>
   <HomeComponent/>


     {/* <Grid >
     <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Guvi-Products
          </Typography>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
      <br/>
      <Grid style={{"padding":"20px"}}> 
      <Card sx={{ width: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
  
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
      </Grid>
      
    </Box>
     </Grid> */}
   </>
  );
}

export default App;
