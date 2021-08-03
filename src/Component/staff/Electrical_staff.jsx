import React, { Component } from 'react';
import './staff.css'

class Electrical_staff extends Component {

    // func = ()=>{
    //     var size = document.querySelector('#size');
    //     size.innerHTML = window.innerWidth
    // }
    // setInterval(this.func,100);
    // componentDidMount() {
    // setInterval(() => {
    // document.querySelector('#size').innerHTML = window.innerWidth;
    //   $('#size').text(window.innerWidth);
    // }, 100);

    render() {
        return (
            <div>

                <h3> Electrical Engineering Section </h3>
                <div className="staff">
                    {/* <h2 id="size"> Civil Engineering  </h2> */}


                    <div className="faculty">
                        <img className="faculty_pic" src="https://www.jmi.ac.in/upload/employee/makhan220190521161256_l.jpg" alt="" width="150" />
                        <strong> <a href="#"> Dr. Mumtaz Ahmad Khan </a> </strong> <br />
                        <span>Head, Electrical Engg Section</span> <br /><hr />
                        <b>Qualification </b> <br />
                        <span>Ph.D</span> <br /> <hr />
                        <img src={process.env.PUBLIC_URL + "/polytechnic/message.png"} alt="" width="20" /> <span> makhan2@jmi.ac.in</span> <br />
                        <img src={process.env.PUBLIC_URL + "/polytechnic/call.png"} alt="" width="20" /> <span> +91 88009 60966</span>
                    </div>
                    
                    <div className="faculty">
                        <img className="faculty_pic" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8UOy7uyvDyOzZUvQZVgPWyTddtuhlJIteJm4zl3N41FktCPALBrDtjaLfw9D8d6TDMIU&usqp=CAU" alt="" width="150" />
                        <strong> <a href="#">Dr. Shahzad Ahmad </a> </strong> <br />
                        <span>Associate Professor</span> <br /><hr />
                        <b>Qualification </b> <br />
                        <span>Ph.D</span> <br /> <hr />
                        <img src={process.env.PUBLIC_URL + "/polytechnic/message.png"} alt="" width="20" /> <span> sahmad5@jmi.ac.in</span> <br />
                        <img src={process.env.PUBLIC_URL + "/polytechnic/call.png"} alt="" width="20" /> <span> ----- </span>
                    </div>
                    
                    <div className="faculty">
                        <img className="faculty_pic" src="https://www.jmi.ac.in/upload/employee/asalamat20210304131536_l.jpg" alt="" width="150" />
                        <strong> <a href="#"> Ms. Arshi Salamat </a> </strong> <br />
                        <span>Assistant Professor</span> <br /><hr />
                        <b>Qualification </b> <br />
                        <span>M.tech</span> <br /> <hr />
                        <img src={process.env.PUBLIC_URL + "/polytechnic/message.png"} alt="" width="20" /> <span> asalamat@jmi.ac.in</span> <br />
                        <img src={process.env.PUBLIC_URL + "/polytechnic/call.png"} alt="" width="20" /> <span> ----- </span>
                    </div>
                    
                    <div className="faculty">
                        <img className="faculty_pic" src="https://www.jmi.ac.in/upload/employee/nkumar220160513122630_l.jpg" alt="" width="150" />
                        <strong> <a href="#"> Mr. Naresh Kumar </a> </strong> <br />
                        <span>Associate Professor</span> <br /><hr />
                        <b>Qualification </b> <br />
                        <span>Ph.D</span> <br /> <hr />
                        <img src={process.env.PUBLIC_URL + "/polytechnic/message.png"} alt="" width="20" /> <span> nkumar2@jmi.ac.in</span> <br />
                        <img src={process.env.PUBLIC_URL + "/polytechnic/call.png"} alt="" width="20" /> <span> +91 98990 93206</span>
                    </div>
                    
                  

                </div>
            </div>
        );
    }
}

export default Electrical_staff;
