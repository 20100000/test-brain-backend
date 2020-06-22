import config from '../../../../common/config';
import fetch from 'node-fetch';

const _getAcesso = async () => {

    var myHeadersGet = new fetch.Headers();
    myHeadersGet.append("Cookie", "ASP.NET_SessionId=amli3zxr2jjjieabcp5cfo5t");

    var requestOptions = {
        method: 'GET',
        headers: myHeadersGet,
        redirect: 'follow'
    };

    const response = await fetch(config.constants.URL_SEED, requestOptions);
    const bodyHtml = await response.text();
    return bodyHtml;
}

const _getHtmlData = async (formData) => {

    let doc = formData.doc;
    let urlencoded = new URLSearchParams();
    urlencoded.append("__VIEWSTATE", formData.viewState);
    urlencoded.append("__VIEWSTATEGENERATOR", "0A9742DC");
    urlencoded.append("__SCROLLPOSITIONX", "0");
    urlencoded.append("__EVENTVALIDATION", formData.eventValidation);
    urlencoded.append("txtCpfCnpjProprietario", doc);
    urlencoded.append("rblNumeroCar", "FEDERAL");
    urlencoded.append("btnBuscar", "Buscar");

    let requestOptions = {
        method: 'POST',
        body: urlencoded
    };

    const response = await fetch(config.constants.URL_SEED, requestOptions);
    return  await response.text();

}

module.exports.getAcesso = _getAcesso;
module.exports.getHtmlData = _getHtmlData;

