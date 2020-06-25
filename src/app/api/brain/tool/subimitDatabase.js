import database from "../../../lib/database";
import queries from "./queries";

const _submitMonitoramento = async (responseData, doc) => {
    if (!doc) {
        return;
    }
    let conn = null;
    try{
        conn = await database.getConnection(true);

        const searchDoc = await database.execute(conn, queries.QSelectDoc, [doc]);
        let appRural;
        let id;
        if (searchDoc[0].cont  == 0) {
            appRural = await database.execute(conn, queries.QInsertApfRural, [doc]);
            id = appRural.insertId
        } else {
            appRural =  await database.execute(conn, queries.QSelectIdRural, [doc]);
            id = appRural[0].id

        }

        if(responseData.length){
            let dataSet = [];
            responseData.forEach(function(item){
                let itemArray = [item.imovel, item.car, item.responsavel,item.atividade, item.municipio, item.dataEmissao,
                    item.dataValidade, item.dataAtualizacao, id]
                dataSet.push(itemArray);
            });

            await database.execute(conn, queries.QInsertMonitoramento, dataSet);
        }
    }catch (e) {
        console.log('Erro', e)
    }finally {
        database.closeConn(conn);

    }
}

module.exports.submitMonitoramento =_submitMonitoramento
