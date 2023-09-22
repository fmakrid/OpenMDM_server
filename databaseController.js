const { Pool } = require('pg');
const dotenv = require('dotenv');

// Configure dotenv
dotenv.config({ path: './database.env' });

// Create a connection pool
const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

const getDevices = async (userId) => {
    try {
        const result = await pool.query('SELECT * FROM devices WHERE userid = $1', [userId]);
        return result.rows;
    } catch (err) {
        console.error(err);
    }
};

const getData = async (deviceId) => {
    try {
        const result = await pool.query('SELECT * FROM devices WHERE deviceid = $1', [deviceId]);
        return result.rows;
    } catch (err) {
        console.error(err);
    }
};

const addDevice = async (deviceId, userId) => {
    try {
        await pool.query('INSERT INTO devices(deviceid, userid) VALUES($1, $2)', [deviceId, userId]);
    } catch (err) {
        console.error(err);
    }
};

const updateDevice = async (id, userId) => {
    try {
        await pool.query('UPDATE devices SET userid = $1 WHERE id = $2', [userId, id]);
    } catch (err) {
        console.error(err);
    }
};

const deleteDevice = async (id) => {
    try {
        await pool.query('DELETE FROM devices WHERE id = $1', [id]);
    } catch (err) {
        console.error(err);
    }
};

module.exports = {
    getDevices,
    getData,
    addDevice,
    updateDevice,
    deleteDevice,
};
