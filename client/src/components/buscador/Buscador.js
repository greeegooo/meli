import React from 'react';
import './Buscador.css';
import { NavLink, Redirect } from "react-router-dom";

export default class Buscador extends React.Component {
	state = {
		redirect: false
	}

	setRedirect = (e) => {
		e && e.preventDefault();
		this.setState({
		  redirect: !this.state.redirect
		});
	}  
	
	renderRedirect = () => {
		const queryString = document.getElementById('inputBuscador').value;
		const url = `/resultados:${queryString}`;
		return <Redirect to={url}/>
	}

	canRenderRedirect = () => {
		if (this.state.redirect) {
			this.setRedirect();
			return true;
		}
		return false;
	}

	render() {
		return (
			<div className="container">
				<nav className="row navbar navbar-expand-lg navbar-light">

					<div className="col">
						<NavLink to="/">
							<div className="navbar-brand mb-0">
								<span className="iconML" />
							</div>
						</NavLink>
					</div>

					<div className="col-11">
						<form className="input-group mb-1">
							<input
								className="form-control border-0 shadow-none"
								type="search"
								placeholder="Nunca dejes de buscar"
								aria-label="Search"
								id="inputBuscador"
							/>
							<div className="input-group-btn input-group-append">
								<button
									type="submit"
									className="btn botonBuscar border-0 shadow-none"
									onClick={this.setRedirect}
								>
									<span className="iconLupa" />
								</button>
							</div>
							{this.canRenderRedirect() && this.renderRedirect()}
						</form>
					</div>
				</nav>
			</div>
		);
	}
}