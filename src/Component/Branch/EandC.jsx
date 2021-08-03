import React, { Component } from 'react';
import './civil.css';

class EandC extends Component {
    componentDidMount() {
        var lab_head = document.getElementsByClassName('lab_head');
        // var lab_logo = document.getElementsByClassName('lab_logo');
        var lab = document.getElementsByClassName('lab');

        (function toggle_lab() {
            for (let i = 0; i < lab.length; i++) {
                lab_head[i].addEventListener('click', () => {
                    for (let j = 0; j < lab.length; j++) {
                        if (j != i) {
                            lab[j].style.display = "none";
                        } else {
                            if (lab[j].style.display == "block") {
                                lab[j].style.display = "none";

                            } else {
                                lab[j].style.display = "block";
                            }
                        }
                    }

                })
            }

        })();
    }
    render() {
        var plus = {
            float: 'right',
            backgroundColor: "white",
            position: 'relative',
            top: '2px',
            right: '2px',
            borderRadius: '5px'
        }
        return (
            <div>

                <div className="comp_container">

                    <h1>Electronics Engieering section</h1>
                    <div className="about_section">
                        <div className="data_section">
                            <span>17</span> <br />
                            <h2>Faculty</h2>
                        </div>
                        <div className="data_section">
                            <span>23</span> <br />
                            <h2>Staff</h2>
                        </div>
                        <div className="data_section">
                            <span>15</span> <br />
                            <h2>Lab</h2>
                        </div>
                        <div className="data_section">
                            <span>400+</span> <br />
                            <h2>Student</h2>
                        </div>
                    </div>
                </div>
                <div className="comp_container">
                    <h1>About the Electronics section</h1>
                    <div style={{ color: 'white', textAlign: 'justify', fontSize: '18px' }}>
                        This department was established in 1983. It is one of the best teaching and research centres with widespread reputation, both within and outside the country. Several students who have passed out successfully of this department are holding important positions in great organizations. <br /><br /><br />
                    </div>
                </div>
                <div className="comp_container">
                    <h1>Laboratories</h1>

                    <h3 className="lab_head" id="sft_lab"> VLSI Design Lab </h3>
                    <div className="lab" style={{ color: 'black', textAlign: 'justify', fontSize: '18px', display: 'none' }}>
                        <span><b>Location  :</b> Room No : 312 ,3rd Floor </span>
                        <div> <br />
                            <b>  VLSI Design lab</b> <br />
                            VLSI Design Laboratory has been setup in order to facilitate PG students and research scholars (TRFs) to conduct cutting edge research in the field of analog and mixed-signal integrated circuit design, SoC design and emerging technologies in the VLSI domain. It is also intended to validate the simulation results of the proposed circuits and optimization techniques by establishing appropriate collaborations with the foundries very soon. <br />
                        </div>
                        <img src="https://www.ecs.soton.ac.uk/sites/www.ecs.soton.ac.uk/files/_1JB0738_960x533.jpg" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2af3cY0vCIF4wPd0PTI4DJN4Z7p6c_pUPhuGj_b4hR4ZThPzbDrLOwUzLSKF0hsb5F_4&usqp=CAU" />
                        <img src="https://isel.handong.edu/img/20181112.jpg" alt="software engg. lab" />
                        <img src="https://www.juit.ac.in/images/se-lab.jpg" alt="software engg. lab" />
                    </div>

                    <h3 className="lab_head">Microwave Lab </h3>
                    <div className="lab" style={{ color: 'black', textAlign: 'justify', fontSize: '18px', display: 'none' }}>
                        <span><b>Location  :</b> Room No : 312 ,3rd Floor </span>
                        <div> <br />
                            <b> About the Microwave lab</b> <br />
                            The focus of the Microwave Engineering Laboratory at Division of Electronics and Communication Engineering, University Polytechnic has been the development and use for scientific studies of microwave frequencies. Our major areas of research involve the designing of microwave filters and antennas for different signal processing applications. <br />
                        </div>
                        <img src="https://5.imimg.com/data5/ND/IC/DV/SELLER-30219110/english-language-lab-software-500x500.jpg" />
                        <img src="https://i.ytimg.com/vi/KHulYS7nxVE/maxresdefault.jpg" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLsqJEpHKQVfOJ4oqdqoR4-KEzp49RfLLTYtlqvcjPAKmqqScmrsAfi-Def6hhNnoYl6A&usqp=CAU" alt="software engg. lab" />
                        <img src="http://zcoer.in/wp-content/uploads/2015/12/Software-Lab-1.png" alt="software engg. lab" />
                    </div>

                    <h3 className="lab_head">Circuit Simulation(CS) Lab</h3>
                    <div className="lab" style={{ color: 'black', textAlign: 'justify', fontSize: '18px', display: 'none' }}>
                        <span><b>Location  :</b> Room No : 312 ,3rd Floor </span>
                        <div> <br />
                            <b> About the Circuit Simulation(CS) lab</b> <br />
                            Circuit Simulation Lab deals with activities related to SPICE simulation of Electronic Circuits. It has the infrastructure for carrying out UG and PG experiments in the areas of Analog Integrated Circuits and Signal Processing. <br />
                        </div>
                        <img src="https://www.ecs.soton.ac.uk/sites/www.ecs.soton.ac.uk/files/_1JB0738_960x533.jpg" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2af3cY0vCIF4wPd0PTI4DJN4Z7p6c_pUPhuGj_b4hR4ZThPzbDrLOwUzLSKF0hsb5F_4&usqp=CAU" />
                        <img src="https://isel.handong.edu/img/20181112.jpg" alt="software engg. lab" />
                        <img src="https://www.juit.ac.in/images/se-lab.jpg" alt="software engg. lab" />
                    </div>

                    <h3 className="lab_head">Analog Integrated Circuit Lab</h3>
                    <div className="lab" style={{ color: 'black', textAlign: 'justify', fontSize: '18px', display: 'none' }}>
                        <span><b>Location  :</b> Room No : 312 ,3rd Floor </span>
                        <div> <br />
                            <b> About Analog Integrated Circuit lab </b> <br />
                            AIC Lab contains facilities to conduct experimental work related to Bipolar and MOS Analog Integrated Circuits. It has the infrastructure for carrying out UG and PG experiments in the areas of Linear Integrated Circuits and BiMOS AICs. <br />
                        </div>
                        <img src="https://www.ecs.soton.ac.uk/sites/www.ecs.soton.ac.uk/files/_1JB0738_960x533.jpg" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2af3cY0vCIF4wPd0PTI4DJN4Z7p6c_pUPhuGj_b4hR4ZThPzbDrLOwUzLSKF0hsb5F_4&usqp=CAU" />
                        <img src="https://isel.handong.edu/img/20181112.jpg" alt="software engg. lab" />
                        <img src="https://www.juit.ac.in/images/se-lab.jpg" alt="software engg. lab" />
                    </div>

                    <h3 className="lab_head">Digital and Optical Communication Lab</h3>
                    <div className="lab" style={{ color: 'black', textAlign: 'justify', fontSize: '18px', display: 'none' }}>
                        <span><b>Location  :</b> Room No : 312 ,3rd Floor </span>
                        <div> <br />
                            <b> About Digital and Optical Communication lab </b> <br />
                            The lab was set up to cater to the experiments needed in the subject entitled "Optical Fibers" (EC-413) an elective taught in VIIth semester ECE students and Optical data processing (SP-515) an elective taught to M.Tech students. At present the lab is equipped with three Fiber optic trainer kits, three numbers of function generator, Digital storage oscilloscope and ten user academic license network version OptSim simulator. <br />
                        </div>
                        <img src="https://www.ecs.soton.ac.uk/sites/www.ecs.soton.ac.uk/files/_1JB0738_960x533.jpg" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2af3cY0vCIF4wPd0PTI4DJN4Z7p6c_pUPhuGj_b4hR4ZThPzbDrLOwUzLSKF0hsb5F_4&usqp=CAU" />
                        <img src="https://isel.handong.edu/img/20181112.jpg" alt="software engg. lab" />
                        <img src="https://www.juit.ac.in/images/se-lab.jpg" alt="software engg. lab" />
                    </div>


                    <h3 className="lab_head">Digital Signal Processing Lab</h3>
                    <div className="lab" style={{ color: 'black', textAlign: 'justify', fontSize: '18px', display: 'none' }}>
                        <span><b>Location  :</b> Room No : 312 ,3rd Floor </span>
                        <div> <br />
                            <b> About the Digital Signal Processing lab </b> <br />
                            Digital Signal Processing Lab has the infrastructure for carrying out UG and PG experiments in the areas of Signal Processing and Image Processing. Lab also has been a center of active research activities in the areas of Digital Signal Processing, Image Processing and Optimization techniques. So far, more than 50 research papers have been published in reputed international journals.
                            <br />
                        </div>
                        <img src="https://bakerboucher.com/wp-content/uploads/2016/10/SWE.jpg" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH2YcoPxcbhJ9bXGmFFhvvjYh8-t5uXgPKoez0QE2Li421ekJLDYdbDSMERXaHtoReRpY&usqp=CAU" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTLvYS8Logf9seBgYDhkpAp4nOil0LLT3QgtarTGt2QI0O-Mzt2EC2S4iuerty-ACrJgY&usqp=CAU" alt="software engg. lab" />
                        <img src="https://image1.masterfile.com/getImage/NzAwLTAwMTY3NjkwZW4uMDAwMDAwMDA=AL-QB6/700-00167690en_Masterfile.jpg" alt="software engg. lab" />
                    </div>

                </div>
            </div>
        );
    }
}



export default EandC;
