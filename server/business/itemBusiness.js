var meli = require('../externalServices/meli_API_Client');
var mapper = require('./mapper');

const itemBusiness = {
    getItem: async (itemID) => {

        let itemDetail;

        itemDetail = mapper.mapItemDetail(await meli.getItem(itemID));
        itemDetail.author = mapper.mapItemSeller(await meli.getItemUser(itemDetail.author.id));
        itemDetail.item.category = mapper.mapItemCategories(await meli.getItemCategories(itemDetail.item.category.id));
        itemDetail.item.description = mapper.mapItemDescription(await meli.getItemDescription(itemDetail.item.id));

        return itemDetail;
    }
};

module.exports = itemBusiness;
