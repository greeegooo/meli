var request = require('request');

const uriSearch = 'https://api.mercadolibre.com/sites/MLA/search?q=';
const uriItem =  'https://api.mercadolibre.com/items/';
const uriCategories = 'https://api.mercadolibre.com/categories/';
const uriUsers = 'https://api.mercadolibre.com/users/';

const client = {
	search: function(queryStr) {
		return new Promise((resolve, reject) => {
			request(uriSearch + queryStr, { json: true }, (err, res, body) => {
				if (err) reject(err);
				resolve(body);
			});
		});
	},
	getItem: function(itemId){
		return new Promise((resolve, reject) => {
			request(uriItem + itemId, { json: true }, (err, res, body) => {
				if (err) reject(err);
				resolve(body);
			});
		});
	},
	getItemCategories: function(categoryId){
		return new Promise((resolve, reject) => {
			request(uriCategories + categoryId, { json: true }, (err, res, body) => {
				if (err) reject(err);
				resolve(body);
			});
		});
	},
	getItemDescription: function (itemId){
		return new Promise((resolve, reject) => {
			request(uriItem + itemId + '/description', { json: true }, (err, res, body) => {
				if (err) reject(err);
				resolve(body);
			});
		});
	},
	getItemUser: function (sellerId) {
		return new Promise((resolve, reject) => {
			request(uriUsers + sellerId, { json: true }, (err, res, body) => {
				if (err) reject(err);
				resolve(body);
			});
		});
	}
};

module.exports = client;
