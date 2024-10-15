import express from "express";
import sqlite3 from "sqlite3";

const app = express();
const PORT = 5000;

const db = new sqlite3.Database(":memory:");

db.serialize(() => {
	db.run(
		"CREATE TABLE employees (id INTEGER PRIMARY KEY, name TEXT, address TEXT)"
	);
	db.run("INSERT INTO employees (name, address) VALUES (?,?)", [
		"John Doe",
		"99 Baker St",
	]);
	db.run("INSERT INTO employees (name, address) VALUES (?,?)", [
		"youngmoney Records",
		"1 Washington Sq",
	]);
});

app.use(express.json());

app.get("/getAllEmployees", (req, res) => {
	db.all("SELECT * from employees", [], (err, rows) => {
		if (err) return res.status(500).json({ error: err.message });
		res.json({ data: rows });
	});
});

app.post("/add", (req, res) => {
	const { id, name, address } = req.body;
	db.run(
		"INSERT INTO employees (id, name, address) VALUES (?,?,?)",
		[id, name, address],
		function (err) {
			if (err) return res.status(500).json({ error: err.message });
			res.json({ id });
		}
	);
});

app.listen(PORT, () => {
	console.log(`Server is up on http://localhost:${PORT}`);
});
