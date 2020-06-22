import database from "../../../lib/database";
import queries from "./queries";

const _submitMonitoramento = async (responseData, doc) => {
    if (!doc) {
        return;
    }
    const conn = await database.getConnection(true);
    const searchDoc = await database.execute(conn, queries.QSelectDoc, [doc]);
    let appRural;
    if (searchDoc[0].cont  == 0) {
         appRural = await database.execute(conn, queries.QInsertApfRural, [doc]);
    }

    if(responseData.length){
            let dataSet = [];
            responseData.forEach(function(item){
                let itemArray = [item.imovel, item.car, item.responsavel,item.atividade, item.municipio, item.dataEmissao,
                    item.dataValidade, item.dataAtualizacao, appRural.insertId]
                dataSet.push(itemArray);
            });

            await database.execute(conn, queries.QInsertMonitoramento, dataSet);
    }
}

module.exports.submitMonitoramento =_submitMonitoramento
