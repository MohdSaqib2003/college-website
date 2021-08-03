import React from 'react';
import './Student/student.css';
import Axios from 'axios';

class Student extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            enroll: '',
            id_no: '',

            Name: '',
            Course: '',
            Attendence: '',
            Attendence_upto: ''
        }
    }

    getData = (e) => {
        var name = e.target.name;
        var value = e.target.value;
        this.setState({
            [name]: value
        })
    }


    validate = () => {
        var err = document.getElementById('err');
        if (!(/^([\d\-]){5,10}$/).test(this.state.enroll)) {
            err.innerHTML = "Invalid enrollment No.";
            err.style.color = '#ff1818';
        }
        else if (!(/^([\d]){8,10}$/).test(this.state.id_no)) {
            err.innerHTML = "Invalid ID Number";
            err.style.color = 'red';
        } else {

            Axios.post('http://localhost:8080/student', { Enrollment_No: this.state.enroll, ID_No: this.state.id_no }).then((response) => {
                if (response.data.message == 'false') {
                    err.innerHTML = 'This enrollment no. is not registered <br/> plz contact to admin';
                    err.style.color = 'red';
                }
                else {
                    this.setState({
                        Name: response.data[0].Name,
                        Course: response.data[0].course,
                        Attendence: response.data[0].attendence,
                        Attendence_upto: response.data[0].attendence_month,
                        message: ''
                    })
                    err.innerHTML = 'Successfully login';
                    err.style.color = 'green';
                    console.log(response.data[0].attendence);
                    document.querySelector('.student_details').style.visibility  = 'visible';
                    var att =  document.getElementById('attend');
                    if(Number(response.data[0].attendence)<75){
                        att.style.backgroundColor = '#ff8d8d';
                    }else{
                        att.style.backgroundColor = '#92f092';
                    }
                }
            })


        }
    }


    render() {
        let card = {
            borderRadius: "4px",
            border: "1px solid  #e6e3e3",
            transition: "0.3s",
            marginLeft: "5%",
            marginRight: "5%",
            marginBottom: "2%",
            backgroundColor: "white",
            fontSize: "18px"
        }
        let container = {
            padding: "2px 22px",
            textAlign: "justify"
        }

        return (
            <div >
                <div style={card} >
                    <div style={container} >
                        <h1 className="student_head">Student</h1>
                        <div className="student_home">

                            <div className="login">
                                <div className="login_head"> Student </div>
                                <span style={{ color: "rgb(255 51 51)", fontSize: '13px', display: 'inline-block' }} id="err"></span> <br />
                                <input type="text" placeholder="Enrollment No" name="enroll" className="enroll" onChange={this.getData} autoComplete="OFF" /><br /><br />
                                <input type="text" placeholder="ID Number" name="id_no" className="ID" onChange={this.getData} /><br autoComplete="OFF" /><br />

                                <input type="button" value="Login" className="login_btn" onClick={this.validate} />
                            </div>


                            <div className="student_details">
                                <table className="student_table" >
                                       <tr>
                                           <td>Enrollment No.</td>
                                           <td>{this.state.enroll}</td>
                                       </tr> 
                                       <tr>
                                           <td>ID Number</td> 
                                           <td>{this.state.id_no}</td> 
                                       </tr>  
                                       <tr>
                                           <td>Student Name</td>
                                           <td>{this.state.Name}</td>
                                       </tr> 
                                       <tr>
                                           <td>Course</td>
                                           <td>{this.state.Course}</td>
                                       </tr> 
                                       <tr  id='attend'>
                                           <td>Attendence</td>
                                           <td>{this.state.Attendence}</td>
                                       </tr> 
                                       <tr>
                                           <td>Attendence Upto</td>
                                           <td>{this.state.Attendence_upto}</td>
                                       </tr> 
                                   </table>


                           
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Student;