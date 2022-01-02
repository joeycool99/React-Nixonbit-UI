import React from 'react';
 import { BrowserRouter, Route, Switch } from 'react-router-dom' 
 import VerifyButton from "@passbase/button/react";
export const KYC = () => {
    return (
      
       <>
             <VerifyButton
        apiKey={"Itu8ejsS46fJ5IvRNrSAaEihdmE8B36x7vVR4lCz1mTStPVAB37fBwO7l2XVUNcG"}
        onSubmitted={(identityAccessKey) => {}}
        onFinish={(identityAccessKey) => {}}
        onError={(errorCode) => {}}
        onStart={() => {}}
      />
     
     </>
    
    )
}
