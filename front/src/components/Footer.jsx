import React from 'react'
import p1 from  '../assets/Group_2082.avif';
import p2 from '../assets/Group_2081.avif';
import p3 from '../assets/Group_2080.avif';
import './Footer.css'


const Footer = () => {
  return (
    <div>
      
<div className='footer'>
<div className='container'>
  <p className='Know'>Know Us Better</p>
   <p className='Ab'>About Us</p>
    <p className='Aff'>Affiliate Program</p>
    <p className='fa'>FAQ</p>
    <p className='bll'>Blog</p>
    <p className='hel'>Help</p>
    <p className='he'>Contact Us</p>
<p className='gr'>Grievance Officer</p>
<p className='our'>Our Policies</p>
<p className='ter'>Terms & Conditions</p>
<p className='te'>Terms Of Service</p>
<p className='Also'>Also Available On</p>
<p className='nyk'>Nykaa</p>
<p className='Am'>Amazon</p>
<p className='flip'>Flipkart</p>
<p className='myn'>Myntra</p>
<p className='pur'>Purplle</p>

<p className='sign'>Sign Up For Updates</p>

<form id='subform'>
  <div className='input-group'>
    <input type='email' id='email' placeholder='Enter Your Email'/>
     
    <button className='ko' type='submit'>SUBSCRIBE</button>
    <span className='error-msg' id='errormsg'></span>
      </div>

</form>
<p className='follo'>Follow Us</p>
<div className='disp'>
<img src={p1} className='p1' />
<img src={p2} className='p2'/>
<img src={p3} className='p3'/>

</div>




</div>
</div>
    </div>
  )
}

export default Footer
