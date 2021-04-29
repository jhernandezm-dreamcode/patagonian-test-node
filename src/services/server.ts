import express from "express";
import router from '../services/routes';

const server = express();

server.use('/v1',router);

export default server;
