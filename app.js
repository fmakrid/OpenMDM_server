const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs");
const databaseController = require('./databaseController');

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
app.get('/openmdm/getDevices', async (req, res) => {
    try {
        const userId = req.query.userId;
        const devices = await databaseController.getDevices(userId);
        res.json(devices);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


app.get("/openmdm/getData", async (req, res) => {
	const { deviceId } = req.query;
	try {
		const data = await databaseController.getData(deviceId);
		res.json(data);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal Server Error" });
	}
});

app.post("/openmdm/addDevice", async (req, res) => {
	const { deviceId, userId } = req.body;
	try {
		await databaseController.addDevice(deviceId, userId);
		res.status(201).json({ message: "Device added successfully" });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal Server Error" });
	}
});

app.put("/openmdm/updateDevice", async (req, res) => {
	const { id, userId } = req.body;
	try {
		await databaseController.updateDevice(id, userId);
		res.json({ message: "Device updated successfully" });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal Server Error" });
	}
});

app.delete("/openmdm/deleteDevice", async (req, res) => {
	const { id } = req.body;
	try {
		await databaseController.deleteDevice(id);
		res.json({ message: "Device deleted successfully" });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal Server Error" });
	}
});


// Create HTTPS server
const server = https.createServer(options, app);

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
