import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from "axios"

class RegisterComponent extends React.Component{ 
    constructor(props){
         super() 
         this.state={ 
             email: '',
             username:"",
             role:"",
             name:"",
          password:""
} 
    }
    
render()
{

    function Copyright(props) {
        return (
          <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
              Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        );
      }
    

const theme = createTheme();


const handleSubmit=async(e)=>{
e.preventDefault()
try{
var response= await axios.post("https://authandautho.herokuapp.com/auth/register",{
    email:this.state.email,
    password:this.state.password,
    name:this.state.name,
    username:this.state.username,
    phone:this.state.phone,
    role:this.state.role,
    address:this.state.address
})
console.log(response)
if(response.data){
    await localStorage.setItem("token",response.data)
    this.props.history.push("/products")
}

}
catch(error){
    alert(error.response.data.msg);
}

}
return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                  value={this.state.name} 
                    onChange={(e) => this.setState({name:e.target.value})}
                />
              </Grid>
           
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  value={this.state.username} 
                    onChange={(e) => this.setState({username:e.target.value})}
                />
                 </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={this.state.email} 
                onChange={(e) => this.setState({email:e.target.value})}
                />
                
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={this.state.password}
                  onChange={(e) => this.setState({password: e.target.value})}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="phone"
                  label="Phone"
                  type="phone"
                  id="phone"
                  autoComplete="phone"
                  value={this.state.phone}
                  onChange={(e) => this.setState({phone: e.target.value})}
                />
                 </Grid>
             <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="address"
                  label="Address"
                  type="address"
                  id="address"
                  autoComplete="address"
                  value={this.state.address}
                  onChange={(e) => this.setState({address: e.target.value})}
                />
                
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="role"
                  label="Role"
                  type="role"
                  id="role"
                  autoComplete="role"
                  value={this.state.role}
                  onChange={(e) => this.setState({role: e.target.value})}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
} 
}

export default RegisterComponent;








