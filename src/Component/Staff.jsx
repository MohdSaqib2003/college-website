import React from 'react';
import './staff/staff.css';
import Civil_staff from './staff/Civil_staff';
import Computer_staff from './staff/Computer_staff';
import Mechanical_staff from './staff/Mechanical_staff';
import Electrical_staff from './staff/Electrical_staff';
import EandC_staff from './staff/EandC_staff';

import { NavLink, Route, Switch } from 'react-router-dom';

class Staff extends React.Component {
    render() {
        return (
            <div>
                <div className="staff_main">
                    <h1> Faculty  </h1>
                    <div className="main_body">
                        <div className="side_nav">
                            <NavLink activeClassName="active_class" className="nav" to="/staff" exact> <nav>Computer engg. Section</nav></NavLink> <hr />
                            <NavLink activeClassName="active_class" className="nav" to="/staff/civil_staff"><nav> Civil engg. Section</nav></NavLink> <hr />
                            <NavLink activeClassName="active_class" className="nav" to="/staff/mechanical_staff"><nav> MEchanical engg. Section</nav></NavLink> <hr />
                            <NavLink activeClassName="active_class" className="nav" to="/staff/electrical_staff"><nav> Electrical engg. Section</nav></NavLink> <hr />
                            <NavLink activeClassName="active_class" className="nav" to="/staff/eandc_staff"><nav> E & C engg. Section</nav></NavLink> <hr />
                        </div>
                        <div className="route">
                            <Switch>
                                <Route path="/staff" component={Computer_staff} exact />
                                <Route path="/staff/civil_staff" component={Civil_staff} />
                                <Route path="/staff/mechanical_staff" component={Mechanical_staff} />
                                <Route path="/staff/mechanical_staff" component={Mechanical_staff} />
                                <Route path="/staff/eandc_staff" component={EandC_staff} />
                                <Route path="/staff/electrical_staff" component={Electrical_staff} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Staff;