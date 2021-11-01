import React from 'react';
 import { BrowserRouter, Route, Switch } from 'react-router-dom' 
 import ProductComponent from './Product'; 
 import LoginComponent from "./LoginComponent"
 import RegisterComponent from "./RegisterComponent"
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


    