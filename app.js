const express = require("express");
const app = express();
const port = 8081;
const cors = require("cors"); // Import the cors package

app.use(cors());

app.use(express.json());

// Middleware to parse JSON requests

// Define routes for your REST API
app.get("/openmdm/getDevices", (req, res) => {
	res.json({
		message:
			"This is the getDevices endpoint." +
			"Request received successfully, the API is under construction.",
	});
});

app.get("/openmdm/getData", (req, res) => {
	res.json({
		message:
			"This is the getData endpoint." +
			"Request received successfully, the API is under construction.",
	});
});

app.post("/openmdm/addDevice", (req, res) => {
	res.json({
		message:
			"This is the addDevice endpoint." +
			"Request received successfully, the API is under construction.",
	});
});

app.put("/openmdm/updateDevice", (req, res) => {
	res.json({
		message:
			"This is the updateDevice endpoint." +
			"Request received successfully, the API is under construction.",
	});
});

app.delete("/openmdm/deleteDevice", (req, res) => {
	res.json({
		message:
			"This is the deleteDevice endpoint." +
			"Request received successfully, the API is under construction.",
	});
});

// Start the server
app.listen(port, () => {
	console.log(`Server listening at port ${port}`);
});
