import React from 'react';
import './Header.css';
import Buscador from '../buscador/Buscador';

export default class Header extends React.Component {
    render() {
        return (
            <div className="colorML">
                <Buscador/>
            </div>
        );
    }
}