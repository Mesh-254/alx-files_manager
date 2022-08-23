import express from 'express';
import AppController from '../controllers/AppController';

const app = express();

app.get('/status', (req, res) => { res.send(AppController.getStatus()); });

app.get('/stats', (req, res) => { res.send(AppController.getStats()); });

module.exports = app;