import React from 'react';
import './Category.css';

export default class Category extends React.Component {
    render() {
        const category = this.props.categoria;
        const indice = this.props.indice;
        let renderCat;

        if(indice !== 0){
            renderCat = (
                <div className="cat">
                    <span className="catSeparator"> > </span>
                    <label className="catName">{category.name}</label>
                </div>
            )
        }
        else{
            renderCat = (
                <div className="cat">
                    <label className="catName">{category.name}</label>
                </div>
            )
        }

        return ( renderCat )
    }
}