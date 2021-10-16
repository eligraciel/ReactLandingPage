import React from "react";
import "bootstrap";
import PropTypes from "prop-types";

//componente navegador

//create your first component
export const Navegador = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
			<div className="mx-5">
				<a className="navbar-brand" href="#">
					Start Bootstrat
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
			</div>

			<div
				className="collapse navbar-collapse d-flex flex-row-reverse"
				id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto mx-5">
					<li className="nav-item active">
						<a className="nav-link" href="#">
							Home <span className="sr-only">(current)</span>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							About
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Service
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Contact
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export const Jumbotrom = () => {
	return (
		<div className="jumbotron mx-5 bg-light py-3">
			<h1 className="display-4">A Warm Welcome!</h1>
			<p className="lead text-wrap">
				This is a simple hero unit, a simple jumbotron-style component
				for calling extra attention to featured content or information.
			</p>

			<p className="lead">
				<a className="btn btn-primary btn-lg" href="#" role="button">
					Learn more
				</a>
			</p>
		</div>
	);
};

export const Tarjetas = ({ imagen, titulo, texto }) => {
	return (
		<div className="card">
			<img className="card-img-top" src={imagen} alt="Card image cap" />
			<div className="card-body d-flex flex-column">
				<h5 className="card-title">{titulo}</h5>
				<p className="card-text text-wrap">{texto}</p>
				<a href="#" className="btn btn-primary mt-auto">
					Go somewhere
				</a>
			</div>
		</div>
	);
};

export const Pie = () => {
	return (
		<div className="bg-dark py-2 text-light">
			<p className="text-light text-center">CopyRight ° Página</p>
		</div>
	);
};

Tarjetas.propTypes = {
	imagen: PropTypes.string,
	titulo: PropTypes.string,
	texto: PropTypes.string
};
