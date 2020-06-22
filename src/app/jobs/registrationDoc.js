import access from "../brain/tool/access";
import crawler from "../brain/tool/crawler";
import submitDatabase from "../brain/tool/subimitDatabase";

export default {
    key: 'registrationDoc',
    async handle( { data } ) {
        const {doc} = data;
        const cpf = doc.cpf

        const bodyHtml = await access.getAcesso();

        let formData =  crawler.getAcessoCrawler(bodyHtml);
        formData.doc = cpf;

        const responseHtml = await access.getHtmlData(formData);

        const resData = await crawler.getReturnData(responseHtml)

        await submitDatabase.submitMonitoramento(resData, cpf)

    },
};
