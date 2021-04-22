import React, {useState, useEffect} from 'react';
import './Home.css';
import Images from './SliderImage';
import {NavLink} from 'react-router-dom';
import Footer from './Footer';
import Loading from './Loading';
const Home  = () =>{
  
let [index,setindex] = useState(0);
const [isloading, setloading] = useState(true);

useEffect(() =>{
  setInterval(setbackground, 4000);
  setTimeout(() =>{
    setloading(false);
  },2500)
},[]);
const setbackground = () =>{
  const a = Images.length;
  let r_no = Math.floor(Math.random() * a);
  setindex(r_no);
}

  return (
    <>
    <div>
{ isloading == true ? <Loading /> : 
<div>
    <div className="home_1" style={{backgroundImage : 'url('+Images[index]+')'}}>
      
        <p className="heading_1">Greatest<br/>MoMo Ever</p>
        <p className="heading_2">DIFFERENT type FoR different TASTE</p>
        <NavLink  to="/special"><button className="linkbtn">Just Try</button></NavLink>

    </div>
      


<br/> 
    <div className="home_2">
      <p className="heading_3">Choose According To Taste</p>

    <div className="home_21">
      <div>
        <img src="https://thumbs.dreamstime.com/b/afghani-momos-served-plate-afghani-momos-served-plate-168650573.jpg" alt="chilli momo" />
        <NavLink  to="/veg"><button className="btns">Try Veg</button></NavLink>
      </div>
      <div>
        <img src="https://thumbs.dreamstime.com/b/momo-chicken-chilli-172015800.jpg" alt="red chilli momo" />
        <NavLink  to="/nonveg"><button className="btns">Try NonVeg</button></NavLink>
      </div>
      <div>
        <img src="https://thumbs.dreamstime.com/b/chocolate-momos-served-plate-chocolate-momos-served-plate-chocolate-momos-168595471.jpg" alt="chocolate momo" />
        <NavLink  to="/sweet"><button className="btns">Try Sweet</button></NavLink>
      </div>
    </div>
    </div>
  
<br/>
    <div className="home_3">
    <p className="heading_4">Special MoMo for Special One</p>
    <p className="heading_5">Taste Our Special MoMo to Enhance the Taste</p>
    <NavLink  to="/special"><button className="btns">Order Special</button></NavLink>
    </div>

<Footer />
</div>
}  
</div> 
    </>
  )
}

export default Home;