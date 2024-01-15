import React, { useEffect, useState } from "react";

function FormControled() {
	// log at each render //
	console.log("render from controlled form !");

	// declare state foreach input value //
	const [inputFirstName, setInputFirstName] = useState("");
	const [inputLastName, setInputLastName] = useState("");
	const [inputAge, setInputAge] = useState("");

	// handle user inputs - can be set inside jsx for lisibility //
	const handleFirstNameChange = (event) => {
		setInputFirstName(event.target.value);
		handleFirstNameValidation(event.target.value);
	};
	const handleLastNameChange = (event) => {
		setInputLastName(event.target.value);
		handleLastNameValidation(event.target.value);
	};
	const handleAgeChange = (event) => {
		setInputAge(event.target.value);
		handleAgeValidation(event.target.value);
	};

	// declare input validation state //
	const [validationFirstName, setValidationFirstName] = useState(null);
	const [validationLastName, setValidationLastName] = useState(null);
	const [validationAge, setValidationAge] = useState(null);

	// handle input validation //
	const handleFirstNameValidation = (value) => {
		// 4 characters min //
		if (value.length === 0) setValidationFirstName(null);
		else if (value.length < 4) setValidationFirstName(false);
		else setValidationFirstName(true);
	};
	const handleLastNameValidation = (value) => {
		// 8 characters min //
		if (value.length === 0) setValidationLastName(null);
		else if (value.length < 8) setValidationLastName(false);
		else setValidationLastName(true);
	};
	const handleAgeValidation = (value) => {
		console.log(value.length);
		// min 0 max 120 //
		if (value.length === 0) setValidationAge(null);
		else if (+value > 0 && +value < 120) setValidationAge(true);
		else setValidationAge(false);
	};

	// declare error message - true = error - false = success - init = null //
	const [error, setError] = useState(null);

	// timeout on message error //
	useEffect(() => {
		if (error === null) return;

		setTimeout(() => {
			setError(null);
		}, 3000);
	}, [error]);

	// handle form submit //
	const handleFormSubmit = (event) => {
		event.preventDefault();

		if (!validationFirstName || !validationLastName || !validationAge)
			setError(true);
		else setError(false);
	};

	return (
		<form className="form--wrapper">
			<h1 className="form--title">FORMULAIRE CONTROLL&Eacute;</h1>

			<div className="form--section">
				<label htmlFor="firstName">Prénom</label>
				<input
					type="text"
					name="firstName"
					id="firstName"
					value={inputFirstName}
					onChange={handleFirstNameChange}
					className={
						validationFirstName === null
							? null
							: validationFirstName
							? "correct"
							: "danger"
					}
				/>
			</div>

			<div className="form--section">
				<label htmlFor="lastName">Nom</label>
				<input
					type="text"
					name="lastName"
					id="lastName"
					value={inputLastName}
					onChange={handleLastNameChange}
					className={
						validationLastName === null
							? null
							: validationLastName
							? "correct"
							: "danger"
					}
				/>
			</div>

			<div className="form--section">
				<label htmlFor="age">Age</label>
				<input
					type="text"
					name="age"
					id="age"
					value={inputAge}
					onChange={handleAgeChange}
					className={
						validationAge === null ? null : validationAge ? "correct" : "danger"
					}
				/>
			</div>

			<div className="form--submit">
				<button onClick={handleFormSubmit}>VALIDER</button>
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

export default FormControled;
