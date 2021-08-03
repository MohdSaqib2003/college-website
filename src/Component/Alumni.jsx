import React from 'react'
import './Alumni/alumni.css'
import { NavLink, Switch, Router, Route } from 'react-router-dom'
import Robert from './Alumni/Robert'
import Jack from './Alumni/Jack'
import Karan from './Alumni/Karan'
// import Axios from "axios"
import Axios from "axios";   



class Alumni extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/Alumni/" component={Home_alumni} exact />
                    <Route path="/Alumni/Robert" component={Robert} />
                    <Route path="/Alumni/Jack" component={Jack} />
                    <Route path="/Alumni/Karan" component={Karan} />
                </Switch>
            </div>
        )
    }
}
export default Alumni;




class Home_alumni extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            batch: '',
            contact: '',
            about: ''
        }
    }

    getDate = (e) => {
        var na = e.target.name;
        var val = e.target.value;
        this.setState({
            [na]: val
        })
    } 

    validate = (event) => {
        var error = document.querySelector('#err')
        if (!(/(^[a-zA-Z])([\w\s]){2,}/.test(this.state.name))) {
            error.innerHTML = "Name must be more than 2 letter"
            event.preventDefault();
        } else if (!(/^(20|19)([0-9]){2}/.test(this.state.batch))) {
            error.innerHTML = "Invalid year"
            event.preventDefault();
        } else if (!(/^(9|8|7|6)([0-9]){9}/.test(this.state.contact))) {
            error.innerHTML = "Invalid Phone Number"
            event.preventDefault();
        } else if (this.state.about == '') {
            error.innerHTML = "Write someting about yourself"
            event.preventDefault();
        } else {
            error.innerHTML = "Thank you " + this.state.name;
            error.style.color = 'green';

            Axios.post('http://localhost:8080/alumni', { name: this.state.name, batch: this.state.batch, contact: this.state.contact, about : this.state.about }).then((response) => {
                console.log(response);
            })
        }
    }


    toggle_form = () => {
        var form = document.querySelector('.form');
        var btn = document.querySelector('.add_alum');
        if (form.style.display == 'block') {
            form.style.display = 'none';
            btn.innerHTML = '+';
        } else {
            form.style.display = 'block';
            btn.innerHTML = '-';
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
            <div>

                <div style={card}>
                    <div style={container}>
                        <h1 className="alumni_head">Alumni</h1>








                        <div className="add_btn">
                            <button className="add_alum" onClick={this.toggle_form}>+</button>
                        </div>

                        <div className="form" >
                            <form onSubmit={this.validate}>
                                <div className="inner_form">
                                    <div className="alum_head">Register</div>
                                    <span style={{ color: "rgb(255 51 51)", display: 'inline-block' }} id="err"></span>
                                    <input type="text" placeholder="Name" name="name" autocomplete="OFF" onChange={this.getDate} /><br /><br />
                                    <input type="text" placeholder="Batch" name="batch" autocomplete="OFF" onChange={this.getDate} /><br /><br />
                                    <input type="tel" placeholder="Contact Number" name="contact" autocomplete="OFF" onChange={this.getDate} /><br />
                                    {/* <span>Photo  </span><input type="file" className="photo" accept="image/png,image/jpeg" name="photo" /><br /> */}
                                    <textarea name="about" rows="6" placeholder="Write about yourself in detail " className="about" onChange={this.getDate} /> <br /> <br />
                                    <input type="submit" value="Submit" className="subm" />
                                    <input type="reset" value="Reset" className="ress" />
                                </div>
                            </form>
                        </div>










                        <div className="alumni">

                            <div className="alumnus">
                                <img src={process.env.PUBLIC_URL + "/polytechnic/male.jpg"} alt="Cinque Terre" width="600" height="400" />
                                <div >
                                    <h3>Robert Ben</h3>
                                    Batch : 2003 <br />
                                    Robert Ben currently working as a Senior Software Enginner at Japan Times in Tokyo city. Robert Ben received Master Of Technology degree from Stanford University in 2010 <br />
                                    <NavLink to="/Alumni/Robert" className="alum_link"> <span>Read More&raquo;</span> </NavLink>
                                </div>
                            </div>

                            <div className="alumnus">
                                <img src={process.env.PUBLIC_URL + "/polytechnic/male.jpg"} alt="Cinque Terre" width="600" height="400" />
                                <div>
                                    <h3>Jack Morris </h3>
                                    Batch : 2003 <br />
                                    Jack Morris currently working as a Senior Software Enginner at Japan Times in Tokyo city. Jack Morris received Master Of Technology degree from Stanford University in 2010 <br />
                                    <span> <NavLink to="/Alumni/Jack" className="alum_link">Read More&raquo;</NavLink></span>
                                </div>
                            </div>

                            <div className="alumnus" >
                                <img src={process.env.PUBLIC_URL + "/polytechnic/male.jpg"} alt="Cinque Terre" width="600" height="400" />
                                <div >
                                    <h3>Karan Singhania </h3>
                                    Batch : 2003 <br />
                                    Karan Singhania currently working as a Senior Software Enginner at Japan Times in Tokyo city. Karan Singhania received Master Of Technology degree from Stanford University in 2010. <br />
                                    <span> <NavLink to="/Alumni/Karan" className="alum_link">Read More&raquo;</NavLink></span>
                                </div>
                            </div>

                            <div className="alumnus" >
                                <img src={process.env.PUBLIC_URL + "/polytechnic/male.jpg"} alt="Cinque Terre" width="600" height="400" />
                                <div >
                                    <h3>Anchal Panday</h3>
                                    Batch : 2003 <br />
                                    Anchal currently working as a Senior Software Enginner at Japan Times in Tokyo city. Anchal received Master Of Technology degree from Stanford University in 2010. <br />
                                    <span>Read More&raquo;</span>
                                </div>
                            </div>

                            <div className="alumnus" >
                                <img src={process.env.PUBLIC_URL + "/polytechnic/male.jpg"} alt="Cinque Terre" width="600" height="400" />
                                <div >
                                    <h3>Rohit Suri </h3>
                                    Batch : 2003 <br />
                                    Rohit Suri currently working as a Senior Software Enginner at Japan Times in Tokyo city. Rohit Suri received Master Of Technology degree from Stanford University in 2010. <br />
                                    <span>Read More&raquo;</span>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div >
        )
    }
}