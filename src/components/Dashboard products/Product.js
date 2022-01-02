
import React,{useEffect,useState} from 'react';

import { Grid,Box,AppBar,Toolbar,Typography,Button,IconButton ,Card,CardContent,CardActions} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import RoomIcon from '@material-ui/icons/Room';

import axios from "axios";
import jwt from "jsonwebtoken"
import { Link } from 'react-router-dom';
import { KYC } from '../Kyc/KYC';
 const Product = (props) => {

    const[productList,setProductList]=useState([])
    const[cart,setCart]=useState()
    const token=localStorage.getItem("token")

    
    useEffect(async() => {
      var decode=jwt.decode(token)
      console.log(decode)
      if(decode.exp*1000<=Date.now()){
        props.history.push("/")
      }
      else{ 
        var response=await axios.get("https://authandautho.herokuapp.com/product/getproduct",{
          headers:{
token:token
          }
        })
        setProductList(response.data)
        updateCart(productList)
      }
        
        
      }, [])

      async function updateproduct(id,value){
        var response=await axios.patch(`https://authandautho.herokuapp.com/product/updateproduct/${id}`,{
            userquantity:value
        },{
          headers:{
token:token
          }
        })
        console.log(response)
        var productlistcopy=[...productList]
        var index=productlistcopy.findIndex(row=>row._id===id)
        productlistcopy[index]=response.data
        setProductList(productlistcopy)
        updateCart(productList)
      }

      function updateCart(productlist){
var fin=productlist.reduce((acc,currval)=>{
    return (currval.userquantity?acc+1:acc)
},0)
setCart(fin)
      }

    return (
        <div>
              <Grid >
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
            Nixonbit Products Dashborad
           
          </Typography>
        
          {cart}<ShoppingCartIcon style={{"margin-right":"10px"}} />

     
            
         
          <KYC />
           <Button style={{"backgroundColor":"white"}} color="inherit"><a href="/">Logout </a></Button>

       
         
        </Toolbar>
      </AppBar>
      <br/>
      <Grid container style={{"padding":"20px"}}  spacing={2}> 
      {productList.map((row,id)=>(
          <Grid item key={row._id}>
          <Card sx={{ width: 275 }}>
      <CardContent>
        <Typography variant="h3" gutterBottom>
         {row.productName}
        </Typography>
        <Typography variant="h5" component="div">
        price:{row.price}

        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Total quantity:{row.quantity}
        </Typography>
        <Typography variant="body2">
       {row.description}
        </Typography>
      </CardContent>
     
      <CardActions>
        <Button size="small" onClick={()=>updateproduct(row._id,++row.userquantity)} disabled={row.userquantity>=row.quantity}>+</Button>{row.userquantity}
        <Button size="small" onClick={()=>updateproduct(row._id,--row.userquantity)} disabled={row.userquantity<=0}>-</Button>
      </CardActions>
    </Card>
    
          </Grid>

      ))}

      </Grid>
      
    </Box>
     </Grid>
        </div>
    )
}


export default Product