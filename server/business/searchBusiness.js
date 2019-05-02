var meli = require('../externalServices/meli_API_Client');
var mapper = require('./mapper');

const searchBusiness = {
    search: async (queryString) => {

        let searchResponse;

        searchResponse = mapper.mapSearchResponse(await meli.search(queryString));
        return searchResponse;
    }
};

module.exports = searchBusiness;