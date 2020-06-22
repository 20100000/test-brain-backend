import express from 'express';
import Controller from './controller';
import database from '../../lib/database';
import queries from './tool/queries'

const PATH = '/brain';
const libs = {
    database: {
        getConnection: database.getConnection,
        execute: database.execute,
        closeConn: database.closeConn
    }
}

const router = express.Router();

const controller = Controller.getController(libs, queries);

router.post('/', controller.setData);
router.get('/:id', controller.getDataId);
router.get('/', controller.getDataAll);
//Monitoramento
router.get('/monitoramento/:id', controller.getDataMonitoring);

router.get('/teste/:cpf',controller.setDataNow)

module.exports = { path: PATH, router };