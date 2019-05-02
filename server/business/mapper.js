const mapper = {
    mapSearchResponse: function(response) {
        return {
            siteId: response.site_id,
            query: response.query,
            category: {
                id: response.filters[0].values[0].id,
                categories: response.filters[0].values[0].path_from_root
            },
            results: response.results.map(item => this.mapListItem(item)).slice(0,4)
        }
    },
    mapListItem: function(item) {
        return {
            id: item.id,
            title: item.title,
            price: item.price,
            currency_id: item.currency_id,
            thumbnail: item.thumbnail,
            state_name: item.address.state_name,
            catalog_product_id: item.catalog_product_id,
            free_shipping: item.shipping.free_shipping
        }
    },
    mapItemDetail: function(item){
        return {
            author: {
                id: item.seller_id,
                name: ""
            },
            item: {
                id: item.id,
                title: item.title,
                price: {
                    amount: item.price,
                    currency: item.currency_id
                },
                picture: item.pictures[0].url,
                condition: item.condition,
                free_shipping: item.shipping.free_shipping,
                sold_quantity: item.sold_quantity,
                category: {
                    id: item.category_id,
                    categories: []
                },
                description: ""
            }
        }
    },
    mapItemCategories: function (itemCategory) {
        return {
            id: itemCategory.id,
            categories: itemCategory.path_from_root
        }
    },
    mapItemDescription: function(itemDescription){
        return itemDescription.plain_text;
    },
    mapItemSeller: function(itemUsers){
        return {
            id: itemUsers.id,
            name: itemUsers.nickname
        }
    }
};

module.exports = mapper;