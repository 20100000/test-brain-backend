import Queue from '../../lib/Queue';
import access from "./tool/access";
import crawler from "./tool/crawler";
import submitDatabase from "./tool/subimitDatabase";

const _setData = async (req, res, next) => {
    try {
        const cpf = req.body.cpf;
        const doc = {
            cpf
        };
        await Queue.add('registrationDoc', { doc });
        res.status(200);
        return res.send(JSON.stringify({success: true, data: 'Sua requisição esta sendo processada em fila'}));
    } catch (e) {
        res.status(400);
        return res.send(JSON.stringify({success: false, error: e}));
    }
};

const _getDataId = async (req, res, next, database, queries) => {
    let conn = null;
    //result.insertId
    try{

        const id = req.params.id;
        conn = await database.getConnection(true);
        const data = await database.execute(conn, queries.QSelectRuralId, [id]);

        res.status(200);
        return res.send(JSON.stringify({success: true, data: data}));
    } catch (e) {

        next(e);
        res.status(400);
        return res.send(JSON.stringify({success: false, error: 'erro'}));
    } finally {

        database.closeConn(conn);
    }

}

const _getDataAll = async (req, res, next, database, queries) => {
    let conn = null;
    try{

        conn = await database.getConnection(true);
        const data = await database.execute(conn, queries.QAllSelectDoc);
        res.status(200);
        return res.send(JSON.stringify({success: true, data: data}));
    } catch (e) {

        next(e);
        res.status(400);
        return res.send(JSON.stringify({success: false, error: 'erro'}));
    } finally {

        database.closeConn(conn);
    }
}

const _getDataMonitoring = async (req, res, next, database, queries) => {
    let conn = null;
    try{
        const id = req.params.id;
        conn = await database.getConnection(true);
        const data = await database.execute(conn, queries.QSelectMonitoramento, [id]);
        res.status(200);
        return res.send(JSON.stringify({success: true, data: data}));
    } catch (e) {

        next(e);
        res.status(400);
        return res.send(JSON.stringify({success: false, error: 'erro'}));
    } finally {

        database.closeConn(conn);
    }
}

const _setDataNow = async (req, res, next) => {
    const cpf = req.params.cpf;

    const bodyHtml = await access.getAcesso();

    let formData =  crawler.getAcessoCrawler(bodyHtml);
    formData.doc = cpf;

    const responseHtml = await access.getHtmlData(formData);

    const resData = await crawler.getReturnData(responseHtml)

    // const resss =  await submitDatabase.submitMonitoramento(resData, cpf)

    res.status(200);
    return res.send(JSON.stringify({success: true, data: resData}));
};

const getController = (libs, queries) => ({
    setData: (req, res, next) => _setData(req, res, next),
    getDataId: (req, res, next, ) => _getDataId(req, res, next, libs.database, queries),
    getDataAll: (req, res, next) => _getDataAll(req, res, next, libs.database, queries),
    getDataMonitoring: (req, res, next) => _getDataMonitoring(req, res, next, libs.database, queries),
    setDataNow: (req, res, next) => _setDataNow(req, res, next),

});

module.exports.getController = getController;
