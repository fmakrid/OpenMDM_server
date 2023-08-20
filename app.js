const express = require("express");
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Define routes for your REST API
app.get("/getDevices", (req, res) => {
	res.json({
		message:
			"This is the getDevices endpoint." +
			"Request received successfully, the API is under construction.",
	});
});

app.get("/getData", (req, res) => {
	res.json({
		message:
			"This is the getData endpoint." +
			"Request received successfully, the API is under construction.",
	});
});

app.post("/addDevice", (req, res) => {
	res.json({
		message:
			"This is the addDevice endpoint." +
			"Request received successfully, the API is under construction.",
	});
});

app.put("/updateDevice", (req, res) => {
	res.json({
		message:
			"This is the updateDevice endpoint." +
			"Request received successfully, the API is under construction.",
	});
});

app.delete("/deleteDevice", (req, res) => {
	res.json({
		message:
			"This is the deleteDevice endpoint." +
			"Request received successfully, the API is under construction.",
	});
});

// Start the server
app.listen(port, () => {
	console.log(`Server listening at http://localhost:${port}/`);
});
