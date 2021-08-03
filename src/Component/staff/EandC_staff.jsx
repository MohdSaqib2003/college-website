import React, { Component } from 'react';
import './staff.css'

class EandC_staff extends Component {

    render() {
        return (
            <div>

                <h3> Electronics Engineering Section </h3>
                <div className="staff">
                    <div className="faculty">
                        <img className="faculty_pic" src="https://www.jmi.ac.in/upload/employee/mfaruque20140904152505_l.jpg" alt="" width="150" />
                        <strong> <a href="#"> Dr. Naseem Faruque </a> </strong> <br />
                        <span>Associate Professor</span> <br /><hr />
                        <b>Qualification </b> <br />
                        <span>Ph.D</span> <br /> <hr />
                        <img src={process.env.PUBLIC_URL + "/polytechnic/message.png"} alt="" width="20" /> <span> mnfaruque@jmi.ac.in </span> <br />
                        <img src={process.env.PUBLIC_URL + "/polytechnic/call.png"} alt="" width="20" /> <span> +91 98106 00687</span>
                    </div>
                    <div className="faculty">
                        <img className="faculty_pic" src="https://www.jmi.ac.in/upload/employee/anasir20210706160256_l.jpg" alt="" width="150" />
                        <strong> <a href="#"> Dr. Anisur Rehman Nasir </a> </strong> <br />
                        <span>Associate Professor</span> <br /><hr />
                        <b>Qualification </b> <br />
                        <span>Ph.D</span> <br /> <hr />
                        <img src={process.env.PUBLIC_URL + "/polytechnic/message.png"} alt="" width="20" /> <span> anasir@jmi.ac.in </span> <br />
                        <img src={process.env.PUBLIC_URL + "/polytechnic/call.png"} alt="" width="20" /> <span> +91 98106 00687</span>
                    </div>
                    <div className="faculty">
                        <img className="faculty_pic" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8UOy7uyvDyOzZUvQZVgPWyTddtuhlJIteJm4zl3N41FktCPALBrDtjaLfw9D8d6TDMIU&usqp=CAU" alt="" width="150" />
                        <strong> <a href="#"> Saleha Siddiqui </a> </strong> <br />
                        <span>Assistant Professor</span> <br /><hr />
                        <b>Qualification </b> <br />
                        <span>M.tech</span> <br /> <hr />
                        <img src={process.env.PUBLIC_URL + "/polytechnic/message.png"} alt="" width="20" /> <span> ssiddiqui@jmi.ac.in</span> <br />
                        <img src={process.env.PUBLIC_URL + "/polytechnic/call.png"} alt="" width="20" /> <span> ----- </span>
                    </div>

                    <div className="faculty">
                        <img className="faculty_pic" src="https://www.jmi.ac.in/upload/employee/sahmad220160425100909_l.jpg" alt="" width="150" />
                        <strong> <a href="#"> Shabbir Ahmad </a> </strong> <br />
                        <span>Assistant Professor</span> <br /><hr />
                        <b>Qualification </b> <br />
                        <span>M.tech</span> <br /> <hr />
                        <img src={process.env.PUBLIC_URL + "/polytechnic/message.png"} alt="" width="20" /> <span> sahmad2@jmi.ac.in </span> <br />
                        <img src={process.env.PUBLIC_URL + "/polytechnic/call.png"} alt="" width="20" /> <span> +91 98996 60720</span>
                    </div>

                    <div className="faculty">
                        <img className="faculty_pic" src="https://www.jmi.ac.in/upload/employee/zaabbasi20160509154522_l.jpg" alt="" width="150" />
                        <strong> <a href="#"> Zeeshan Ahmad Abbasi </a> </strong> <br />
                        <span>Assistant Professor</span> <br /><hr />
                        <b>Qualification </b> <br />
                        <span>M.tech</span> <br /> <hr />
                        <img src={process.env.PUBLIC_URL + "/polytechnic/message.png"} alt="" width="20" /> <span> zaabbasi@jmi.ac.in  </span> <br />
                        <img src={process.env.PUBLIC_URL + "/polytechnic/call.png"} alt="" width="20" /> <span> +91 92501 23980</span>
                    </div>

                </div>
            </div>
        );
    }
}

export default EandC_staff;
