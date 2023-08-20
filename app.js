const express = require("express");
const app = express();
// const mysql = require("mysql2");
const cors = require("cors");
const fs = require("fs");
const https = require("https");

app.use(cors());

const port = 8081;

const options = {
	key: fs.readFileSync(
		"/etc/letsencrypt/live/covid19.philippos-makridis.dev/privkey.pem"
	),
	cert: fs.readFileSync(
		"/etc/letsencrypt/live/covid19.philippos-makridis.dev/fullchain.pem"
	),
};

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

// Create HTTPS server
const server = https.createServer(options, app);

// Start the server
server.listen(port, () => {
	console.log(`Server listening at port ${port}`);
});
