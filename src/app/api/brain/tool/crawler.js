import cheerio from 'cheerio';

const _getAcessoCrawler = (htmlBody) => {
    const $ = cheerio.load(htmlBody);
    const viewState = $('#__VIEWSTATE').val();
    const eventValidation = $('#__EVENTVALIDATION').val();
    const viewStateGenerator = $('#__VIEWSTATEGENERATOR').val();
    let obj = {
        viewState: viewState,
        viewStateGenerator: viewStateGenerator,
        eventValidation: eventValidation
    }
    return obj;
};


const _getReturnData = (htmlBody) => {
    const $ = cheerio.load(htmlBody);
    let response = [];

    $('#divApf .panel-body div .form-group').each(function(i,element) {

            let imovel = $(this).find('#repeater_labImovel_'+i).text().trim();
            let car = $(this).find('#repeater_labCarNumero_'+i).text().trim();
            let responsavel = $(this).find('#repeater_labResponsavel_'+i).text().trim();
            let atividade = $(this).find('#repeater_labAtividade_'+i).text().trim();
            let municipio = $(this).find('#repeater_labMunicipio_'+i).text().trim();
            let dataEmissao = $(this).find('#repeater_labDataEmissao_'+i).text().trim();
            let dataValidade = $(this).find('#repeater_labDataValidade_'+i).text().trim();
            let dataAtualizacao = $(this).find('#repeater_labUltimaAtualizacao_'+i).text().trim();

        let obj = {
            imovel : imovel,
            car: car,
            responsavel: responsavel,
            atividade: atividade,
            municipio: municipio,
            dataEmissao: dataEmissao,
            dataValidade: dataValidade,
            dataAtualizacao: dataAtualizacao
        }

        response.push(obj);
    })
    return response;

}
module.exports.getAcessoCrawler = _getAcessoCrawler;
module.exports.getReturnData = _getReturnData;



