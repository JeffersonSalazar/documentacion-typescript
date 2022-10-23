/* 
	router: almacena el requerimiento de express().Router
*/
let router = require("express").Router();

/* 
	haciendo uso del metodo get(), definimos el endpoint 
	de acceso seguido de una funcion de flecha que captura
	el requermiento del usuario y retorna una respuesta
*/
router.get("/", (req, res) => {
	/* 
		con el metodo render() definimos que vista va a
		renderizarse una vez el usuarrio haga un requerimiento
		a este enpoint, finalmente por medio de un objeto 
		pasamos el nombre de la vista
	*/
	res.render("pages/index", {
		title: "home",
	});
});

/* 
	______________________ servidor tsc ______________________
*/
router.get("/servidor-tsc", (req, res) => {
	res.render("pages/servidor-tsc", {
		title: "servidor tsc",
	});
});

/* 
	______________________ tipos de datos ______________________
*/
router.get("/tipos-datos-tsc", (req, res) => {
	res.render("pages/tipos-datos-tsc", {
		title: "tipado primitivo",
	});
});

/* 
	______________________ objetos ______________________
*/
router.get("/objetos-tsc", (req, res) => {
	res.render("pages/objetos-tsc", {
		title: "objetos en typescript",
	});
});

/* 
	______________________ arreglos ______________________
*/
router.get("/arreglos-tsc", (req, res) => {
	res.render("pages/arreglos-tsc", {
		title: "arreglos en typescript",
	});
});

/* 
	finalmente realizamos una exportacion del modulo
*/
module.exports = router;
