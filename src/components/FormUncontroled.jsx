import React, { useRef, useState, useEffect } from "react";

function FormUncontroled() {
	// log at each render //
	console.log("render from non controlled form !");

	// declare inputs refs //
	const firstNameRef = useRef();
	const lastNameRef = useRef();
	const ageRef = useRef();

	// declare error message - true = error - false = success - init = null //
	const [error, setError] = useState(null);

	// timeout on message error //
	useEffect(() => {
		if (error === null) return;

		setTimeout(() => {
			setError(null);
		}, 3000);
	}, [error]);

	// form submit //
	const handleFormSubmit = (event) => {
		event.preventDefault();

		if (!isValidFirstName() || !isValidLastName() || !isValidAge())
			setError(true);
		else setError(false);
	};

	// check input values //
	const isValidFirstName = () => {
		return firstNameRef.current.value.length >= 4 ? true : false;
	};
	const isValidLastName = () => {
		return lastNameRef.current.value.length >= 8 ? true : false;
	};
	const isValidAge = () => {
		return +ageRef.current.value > 0 && +ageRef.current.value < 120
			? true
			: false;
	};

	return (
		<form className="form--wrapper" onSubmit={handleFormSubmit}>
			<h1 className="form--title">FORMULAIRE NON CONTROLL&Eacute;</h1>

			<div className="form--section">
				<label htmlFor="firstName">Prénom</label>
				<input type="text" name="firstName" id="firstName" ref={firstNameRef} />
			</div>

			<div className="form--section">
				<label htmlFor="lastName">Nom</label>
				<input type="text" name="lastName" id="lastName" ref={lastNameRef} />
			</div>

			<div className="form--section">
				<label htmlFor="age">Age</label>
				<input type="text" name="age" id="age" ref={ageRef} />
			</div>

			<div className="form--submit">
				<button>VALIDER</button>
			</div>

			{error === true && (
				<div className="form--error">
					<p>Le formulaire n'est pas valide</p>
				</div>
			)}

			{error === false && (
				<div className="form--success">
					<p>Le formulaire est valide</p>
				</div>
			)}
		</form>
	);
}

export default FormUncontroled;
