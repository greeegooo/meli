import React from 'react';
import Category from '../category/Category';
import './ListCategory.css';

export default class ListCategory extends React.Component {
    render() {
        const category = this.props.categoria;
        return (
            category &&
            <div className="container">
                <div className="row listCategory" style={{marginRight: 0, marginLeft: 0}}>
                    {
                        category.categories.map((cat, i) => {
                            return (
                                <Category key={i} indice={i} categoria={cat} />
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}