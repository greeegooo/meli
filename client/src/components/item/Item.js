import React from 'react';
import './Item.css';

import { Link } from "react-router-dom";

export default class Item extends React.Component {

	render() {
		const producto = this.props.producto;

		const urlDetalle = `/detalle:${this.props.producto.id}`;

		return (
			<div className="row">
				<div className="col-2">
					<div className="itemImage">
						<Link to={urlDetalle}>
							<img className="itemImage"
								 width="180px"
								 height="180px"
								 alt={producto.title}
								 src={producto.thumbnail} />
						</Link>
					</div>

				</div>
				<div className="col">
					<div className="itemInfo">
						<h4>
							<Link to={urlDetalle} className="tituloItem">
								<label>{producto.currency_id === "ARS" ? "$" : "U$S"} {producto.price}</label>
								<span className={producto.free_shipping ? "iconShipping" : ""} />
							</Link>
						</h4>
						<p>
							<Link to={urlDetalle} className="tituloItem shadow-none">
								<span>{producto.title}</span>
							</Link>
						</p>
					</div>
				</div>
				<div className="col-2">
					<p>{producto.state_name}</p>
				</div>
			</div>
		);
	}
}