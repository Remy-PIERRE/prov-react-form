import FormControled from "./components/FormControled";
import FormUncontroled from "./components/FormUncontroled";
import "./style/main.css";

function App() {
	return (
		<>
			<div className="main--wrapper">
				<FormControled />
				<FormUncontroled />
			</div>
		</>
	);
}

export default App;
