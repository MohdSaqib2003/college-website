import React from 'react';
import './news.css';

class News extends React.Component {
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
                        <h1 className="news_head">Notice</h1>
                         
                    </div>
                    <div style={card}>
                        <h5 className="date">22/4/1021</h5>
                        <div className="notice">  <marquee behavior="alternate" scrolldelay="40"
                         scrollamount="13"> <a href="https://pbs.twimg.com/media/Ef5pKkNX0AA6_2P.jpg" target="_blank">  Notice regarding semester exam, 2021 </a> </marquee></div> 
                         
                    </div>
                    <div style={card}>
                        <h5 className="date">22/4/1021</h5>
                        <div className="notice">  <marquee behavior="alternate" scrolldelay="40"
                         scrollamount="8"> <a href="https://pbs.twimg.com/media/Ef5pKkNX0AA6_2P.jpg" target="_blank"> Notice regarding semester exam, 2021 </a> </marquee></div> 
                         
                    </div>
                    <div style={card}>
                        <h5 className="date">22/4/1021</h5>
                        <div className="notice">  <marquee behavior="alternate" direction="right" scrolldelay="40"
                         scrollamount="12"> <a href="https://pbs.twimg.com/media/Ef5pKkNX0AA6_2P.jpg" target="_blank"> Notice regarding semester exam, 2021 </a> </marquee></div> 
                         
                    </div>
                    <div style={card}>
                        <h5 className="date">22/4/1021</h5>
                        <div className="notice">  <marquee behavior="alternate" direction="right" scrolldelay="40"
                         scrollamount="10"> <a href="https://pbs.twimg.com/media/Ef5pKkNX0AA6_2P.jpg" target="_blank"> Notice regarding semester exam, 2021 </a></marquee></div> 
                         
                    </div>
                    <div style={card}>
                        <h5 className="date">22/4/1021</h5>
                        <div className="notice">  <marquee behavior="alternate" scrolldelay="40"
                         scrollamount="9"> <a href="https://pbs.twimg.com/media/Ef5pKkNX0AA6_2P.jpg" target="_blank"> Notice regarding semester exam, 2021 </a></marquee></div> 
                         
                    </div>
                    
                </div>
            </div >
        )
    }
}
export default News;