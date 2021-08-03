import React from 'react';

class Robert extends React.Component {
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
        let im = {
            width: '300px',
            height: '250px'
        }

        return (
            <div>
                <div style={card}>
                    <div style={container}>
                        <div>
                            <img style={im} src={process.env.PUBLIC_URL + "/polytechnic/male.jpg"} alt="Cinque Terre" width="600" height="400" />
                            <div >
                                <h3>Robert Ben </h3>

                                Batch : 2003 <br />
                                Robert Ben currently working as a Senior Software Enginner at Japan Times in Tokyo city. Robert Ben received Master Of Technology degree from Stanford University in 2010.
                                Robert Ben currently working as a Senior Software Enginner at Japan Times in Tokyo city. Robert Ben received Master Of Technology degree from Stanford University in 2010.
                                Robert Ben currently working as a Senior Software Enginner at Japan Times in Tokyo city. Robert Ben received Master Of Technology degree from Stanford University in 2010.
                                Robert Ben currently working as a Senior Software Enginner at Japan Times in Tokyo city. Robert Ben received Master Of Technology degree from Stanford University in 2010. <br />
                                Robert Ben currently working as a Senior Software Enginner at Japan Times in Tokyo city. Robert Ben received Master Of Technology degree from Stanford University in 2010.
                                Robert Ben currently working as a Senior Software Enginner at Japan Times in Tokyo city. Robert Ben received Master Of Technology degree from Stanford University in 2010.
                                Robert Ben currently working as a Senior Software Enginner at Japan Times in Tokyo city. Robert Ben received Master Of Technology degree from Stanford University in 2010.
                                Robert Ben currently working as a Senior Software Enginner at Japan Times in Tokyo city. Robert Ben received Master Of Technology degree from Stanford University in 2010.
                                Robert Ben currently working as a Senior Software Enginner at Japan Times in Tokyo city. Robert Ben received Master Of Technology degree from Stanford University in 2010.
                                Robert Ben currently working as a Senior Software Enginner at Japan Times in Tokyo city. Robert Ben received Master Of Technology degree from Stanford University in 2010.
                                Robert Ben currently working as a Senior Software Enginner at Japan Times in Tokyo city. Robert Ben received Master Of Technology degree from Stanford University in 2010. <br /> <br />
                            </div>
                        </div>



                    </div>
                </div>

            </div>
        )
    }
}

export default Robert;