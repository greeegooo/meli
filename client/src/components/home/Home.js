import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './Home.css';
import Header from '../header/Header';
import ListItem from '../listItem/ListItem';
import Detalle from '../detalle/Detalle';

class Home extends React.Component {  
    render() {
        return (
            <BrowserRouter>
                <div className="Home">
                    <Header/>
                    <Route path="/resultados:query" component={ListItem}/>
                    <Route path="/detalle:id" component={Detalle}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default Home;