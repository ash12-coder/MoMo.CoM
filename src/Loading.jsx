import React from 'react';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Loading = () =>{
return (
  <div align='center' style={{marginTop : '200px'}}>
      <Loader
        type="BallTriangle"
        color="white"
        height={200}
        width={200} 
      />
      </div>
    );
}
export default Loading;