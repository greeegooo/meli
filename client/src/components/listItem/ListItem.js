import React from 'react';
import './ListItem.css';
import Item from '../item/Item';
import ListCategory from '../listCategory/ListCategory'
import { withRouter } from "react-router";

let urlBusquedaActual = "";
class ListItem extends React.Component {
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

	search = (queryString) => {
		urlBusquedaActual = queryString;
		const url = `/search?q=${queryString}`;

		fetch(url)
		.then((res) => res.json())
		.then((res) => this.setState({ data : res }));
	}

	componentWillMount() {
		this.search(this.getPalabra(this.props.location.pathname));
	}

	componentDidUpdate() {
		const palabraBuscar = this.getPalabra(this.props.location.pathname);
		if (urlBusquedaActual !== palabraBuscar) {
			this.search(palabraBuscar);
		}
	}

	render() {
		return (
			this.state.data &&
				<div className="container">
					<ListCategory categoria={this.state.data.category}/>
					<div className="container">
						<div className="row">
							<div className="col">
								<ul className="list-group list-group-flush">
									{
										this.state.data.results.map((item, i) => {
											return (
												<li key={i} className="list-group-item container">
													<Item producto={item} />
												</li>
											)
										})
									}
								</ul>
							</div>
						</div>
					</div>
				</div>
		);
	}
}

export default withRouter(ListItem)