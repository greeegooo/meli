import React from "react";
import { withRouter } from "react-router";
import './Detalle.css';
import ListCategory from "../listCategory/ListCategory";

class Detalle extends React.Component {

    constructor() {
        super();

        this.state = {
            data : null
        };
    }

    getPalabra = (url) => {
        const index = url.indexOf(":");
        return url.substring(index + 1);
    }

    componentWillMount() {
        this.getDetail(this.getPalabra(this.props.location.pathname));
    }

    getDetail(itemID) {
        const url = `/items?q=${itemID}`;
        fetch(url)
        .then((res) => res.json())
        .then((res) => this.setState({ data : res }));
    }

    render() {

        return (
            this.state.data &&
            <div className="container">
                <ListCategory categoria={this.state.data.item.category}/>
                <div className="container">
                    <div className="row itemDetail">
                        <div className="col-9">
                            <div className="itemDetalImage">
                                <img className="img-responsive"
                                     alt={this.state.data.item.title}
                                     src={this.state.data.item.picture} />
                            </div>
                            <div className="itemDetailDescription">
                                <h3 className="itemDescriptionTitle">Descripción del producto</h3>
                                <p className="itemDescription">{this.state.data.item.description}</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="itemTitle">
                                <p className="itemSales">{this.state.data.item.condition === "new" ? "Nuevo" : "Usado"} - {this.state.data.item.sold_quantity} vendidos</p>
                                <p>{this.state.data.item.title}</p>
                            </div>
                            <div className="itemPrice">
                                <p>{this.state.data.item.price.currency === "ARS" ? "$" : "U$S"} {this.state.data.item.price.amount}</p>
                            </div>
                            <button className="btn btn-primary btn-lg btn-block">Comprar</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Detalle);