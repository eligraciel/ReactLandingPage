//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Navegador, Jumbotrom, Tarjetas, Pie } from "./component/home.jsx";

const Construir = () => {
	return (
		<>
			<Navegador />
			<div className="container w-65">
				<Jumbotrom />
				<div className="d-flex justify-content-between mx-5">
					<Tarjetas
						imagen="https://picsum.photos/id/879/500/325"
						titulo="Prueba1"
						texto="Lorem ipsum dolor sit amet, consectetur adipiscing e"
					/>
					<Tarjetas
						imagen="https://picsum.photos/id/356/500/325"
						titulo="Prueba2"
						texto="Sed ut perspiciatis unde omnis iste natus erro"
					/>
					<Tarjetas
						imagen="https://picsum.photos/id/100/500/325"
						titulo="Prueba3"
						texto="Atae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia volupta"
					/>
					<Tarjetas
						imagen="https://picsum.photos/id/234/500/325"
						titulo="Prueba4"
						texto="Cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quo"
					/>
				</div>
			</div>
			<Pie />
		</>
	);
};

//render your react application
ReactDOM.render(<Construir />, document.querySelector("#app"));
