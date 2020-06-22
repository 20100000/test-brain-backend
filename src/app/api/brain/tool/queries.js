//Monitoramento
const QUpdateMonitoramento = '\
  UPDATE monitoramentos \
  SET imovel = ?, car = ?, responsavel = ?, atividade = ?, municipio = ?, data_emissao = ?,\
   data_validade  = ?, data_atualizacao = ?, \
  WHERE car = ?';
const QInsertMonitoramento =`INSERT INTO monitoramentos
  (imovel, car, responsavel, atividade, municipio, data_emissao, data_validade, data_atualizacao, id_apf_rural)
  VALUES ?`;

//Apf Rural
const QInsertApfRural ='INSERT INTO apf_rural (doc, status, data_insert ) VALUES ( ?, 0, NOW())';

const QSelectDoc = 'SELECT COUNT(id) AS cont FROM apf_rural WHERE doc = ?';

const QAllSelectDoc = 'SELECT id, doc, status, data_insert FROM apf_rural';

const QSelectRuralId = 'SELECT doc, status, data_insert FROM apf_rural WHERE id = ?';

const QSelectIdForUser = 'SELECT id FROM apf_rural WHERE doc = ?'

//JOIN Rural_Monitoramento
const QSelectMonitoramento = '\
    SELECT ar.doc, m.imovel, m.car, m.responsavel, m.atividade, m.municipio, m.data_emissao, m.data_validade, m.data_atualizacao\
    FROM apf_rural AS ar \
    INNER JOIN monitoramentos AS m ON ar.id = m.id_apf_rural\
    WHERE m.id_apf_rural = ?';


module.exports.QUpdateMonitoramento = QUpdateMonitoramento;
module.exports.QInsertMonitoramento = QInsertMonitoramento;
module.exports.QInsertApfRural = QInsertApfRural;
module.exports.QSelectDoc = QSelectDoc;
module.exports.QAllSelectDoc = QAllSelectDoc;
module.exports.QSelectRuralId = QSelectRuralId;
module.exports.QSelectMonitoramento = QSelectMonitoramento;
module.exports.QSelectIdForUser = QSelectIdForUser;
