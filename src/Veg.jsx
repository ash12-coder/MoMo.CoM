import React, {useState, useEffect} from 'react';
import './Veg.css';
import Vegmomo from './Vegmomo';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer, toast} from 'react-toastify';
import Loading from './Loading';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import DeleteIcon from '@material-ui/icons/Delete';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';

const Veg  = () =>{
const [cart,setcart] = useState([]);
const [isloading,setloading] = useState(true);

useEffect(() =>{
  setTimeout(() =>{
      setloading(false);
  },2500);
})
const addtocart = (momo) =>{
  setcart([...cart,{...momo}]);
  toast.success("MoMo Added Sucessfully", {autoClose: 2000,pauseOnHover: false,});
}
const clearcart = () =>{
  setcart([]);
}
const quantity = 1;
const gettotal = () =>{
  return cart.reduce(
    (sum,{price}) => sum + price , 0
  );
}
const pay = () =>{
  let a = confirm("Do You Want To Pay");
  if(a == true){
  toast.success(" Payment Sucessfull",{autoClose: 2000,pauseOnHover: false,} );
  setcart([]);
  }
  else{
    toast.error("Payment Unsucessfull",{autoClose: 2000,pauseOnHover: false,} );
  }
}
  return (
    <>
    {
      isloading == true ? <Loading /> :
      <div>
    <p className="heading">VeG MoMo</p>
    <span>
    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" style={{height : '50px', width : '50px', color : 'green', border : 0 , float : 'right'}}>
  <ShoppingCartIcon />
</button>
</span>
<div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Veg <ShoppingCartIcon /><span style={{fontSize : '15px', color : 'red'}}>{cart.length}</span></h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        {
          cart.map((momo,i) =>(
            <div key={i}>
            <ul style={{listStyle : 'none'}}>
              <li><img src={momo.source} height="50px" width="50px" /><strong>{momo.title}</strong> 
              <span style={{float : 'right'}}>Rs. {momo.price}</span>
              </li>
              </ul>
            </div>
          ))
        }
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" onClick={clearcart} style={{height : '50px' ,width : '100px', background : 'black', border : 0, outline : 'none'}}><DeleteIcon style={{color : 'orange'}} /></button>
        <button type="button" className="btn btn-primary" style={{height : '50px' ,width : '100px', background : 'black', border : 0, outline : 'none'}} onClick={pay}><AccountBalanceWalletIcon style={{color : 'orange'}} /> Rs.{gettotal()}</button>
      </div>
    </div>
  </div>
</div>
    
      {
        Vegmomo.map((momo,i) =>{
        return(
          <div className="card"  key={i}> 
            <p className="card-title">{momo.title}</p>
            <div className="image">
            <img className="card-img-top" src={momo.source} alt={momo.title}/>
            </div>
            
            <p className="card-text">Rs. {momo.price}</p>
          
            <button className="btns" onClick={() => addtocart(momo)}>Add To Cart</button>
            <ToastContainer autoClose={2000} position="top-center" />
          
    </div>
    
        )
      })
      }
        


 <Footer />
 </div>
}
    </>
  )
}

export default Veg;