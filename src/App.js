import "./App.css";
import { useEffect } from "react";

const App = () => {
	useEffect(() => {
		const getMock = async () => {
			try {
				const mockResponse = await fetch(
					"https://api.example.com/users"
				);
				const mockData = await mockResponse.json();

				const donotMockResponse = await fetch(
					"https://api.github.com/users/nitishn7"
				);
				const donotMockData = await donotMockResponse.json();

				console.log("Mocked data:", mockData);
				console.log("Non-mocked data:", donotMockData);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		getMock();
	}, []);
	return (
		<div>
			<form className="flex flex-col">
				{/* <div className=""> */}
				<label htmlFor="id">Employee ID:</label>
				<input
					type="number"
					id="id"
					name="id"
					// value={id}
					// onChange={(e) => setId(e.target.value)} // Update state on input change
					required
				/>
				{/* </div> */}

				<label htmlFor="name">Employee Name:</label>
				<input
					type="text"
					id="name"
					name="name"
					// value={name}
					// onChange={(e) => setName(e.target.value)} // Update state on input change
					required
				/>

				<label htmlFor="address">Employee Address:</label>
				<input
					type="text"
					id="address"
					name="address"
					// value={address}
					// onChange={(e) => setAddress(e.target.value)} // Update state on input change
					required
				/>

				<button type="submit">Add Employee</button>
			</form>
		</div>
	);
	// return (
	// 	<div>
	// 		<h1>About</h1>
	// 		<h2>This is a sample React App</h2>
	// 	</div>
	// );
};

export default App;
