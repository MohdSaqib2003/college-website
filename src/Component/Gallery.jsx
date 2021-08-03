import React from 'react'
import $ from 'jquery'
import { NavLink, Route, Switch } from 'react-router-dom';
import Photo1 from './Gallery/Photo1';
import Photo2 from './Gallery/Photo2';
import Photo3 from './Gallery/Photo3';
import './Gallery/Gallery.css'

class Gallery extends React.Component {
    componentDidMount = () => {
        $('.pagination').css({
            'display': 'inline-block',
            'background-color':'white'
          });
        $('.pagination .link').css({
            'color': 'black',
            'float': 'left',
            'padding': '8px 16px',
            'text-decoration': 'none',
            'border': '1px solid #ddd'

        })
    

    }
    render() {
        return (
            <div>
                <h1 className="heading_gallery">Photo Gallery</h1>
                <div className="gallery_main_div">
                <main>
                    <Switch>
                        <Route path="/gallery/" component={Photo1} exact />
                        <Route path="/gallery/photo2" component={Photo2} />
                        <Route path="/gallery/photo3" component={Photo3} />
                    </Switch>
                </main>

               
             

            </div>
                <center>
                    <div className="pagination">
                        <NavLink to="/gallery/" className="link">&laquo;</NavLink>
                        <NavLink to="/gallery/" className="link">1</NavLink>
                        <NavLink activeClassName="active_class" to="/gallery/photo2" className="link">2</NavLink>
                        <NavLink activeClassName="active_class" to="/gallery/photo3" className="link">3</NavLink>
                        <NavLink to="/gallery/photo3" className="link">&raquo;</NavLink>
                    </div></center>

            </div>
        )
    }
}
export default Gallery;