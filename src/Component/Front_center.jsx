import React from 'react';
import '../App.css'

function Front_center(){
    return(
      <div>
        <div className="image_home">
  
     
  <div className="pic1">   </div> 
  <div className="pic2">   </div> 
  <div className="pic3">   </div> 
  <div className="pic4">   </div> 
  <div className="pic5">   </div> 
  
  
  </div>
  
  
  <div className="messages">
  
  <div className="content_of_message">
   <span className="message_heading">VICE-CHANCELLOR'S MESSAGE <br/></span>
   <img src={process.env.PUBLIC_URL+"/polytechnic/vc.jpg"} className="principal_photo" alt="vc" />
  Jamia Millia Islamia came into existence in'1920 through the tireless efforts of its founders, such as Shaikhul Hind Maulana Mahmud Hasan, Maulana Muhammad Ali Jauhar, Hakim Ajmal Khan, Dr. Mukhtar Ahmad Ansari and Dr. Zakir Husain. It symbolizes the unflinching and resolute commitment of these great visionaries in bringing about socio-economic transformation of common masses, in general, in particular through the vehicle of education.
  </div>
  
  
  
  <div className="content_of_message" >
   <span className="message_heading"> PRINCIPAL'S MESSAGE<br/></span>
   <img src={process.env.PUBLIC_URL+"/polytechnic/mum.jpg"} className="principal_photo" alt="princpal"/>
   Dear Parents and Students,
  It is with great pleasure that I welcome you to our college website.
  As Principal I am hugely impressed by the commitment of the college and the staff to the provision of an excellent all-round education for our students in our University Polytechnic.Under my leadership, and as a team working together, we strongly promote academic achievement among our students. The cultural,sporting and other successes of all of our students and staff are also proudly celebrated together.
  </div>
  
  </div>
  
      </div>
    )
  }
  
  export default Front_center;