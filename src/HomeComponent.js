import React from 'react';
 import { BrowserRouter, Route, Switch } from 'react-router-dom' 
 import ProductComponent from './components/Dashboard products/Product'; 
 import LoginComponent from "./components/Auth/LoginComponent"
 import RegisterComponent from "./components/Auth/RegisterComponent"

  export default function HomeComponent()
  { 
      return( 
    < > 

    <div>
     <BrowserRouter>
     <Switch>
     <Route exact path="/register" component={RegisterComponent}></Route>
      <Route exact path="/" component={LoginComponent}></Route>
       <Route exact path="/products" component={ProductComponent}></Route>
       
     </Switch> 
    </BrowserRouter>  
    </div> 
    </> 
    ) 
    } 


     