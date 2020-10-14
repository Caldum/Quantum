"use strict";
const controller = require('../controllers/transactionsController');
/**
 * @typedef {import('moleculer').Context} Context Moleculer's Context
 */

module.exports = {
	name: "transactions",

	/**
	 * Settings
	 */
	settings: {

	},

	/**
	 * Dependencies
	 */
	dependencies: [],

	/**
	 * Actions
	 */
	actions: {
		transaction:{
			rest:{
				method : "POST",
				path: "/"
			},
			params:{
				user_id:"string",
				amount:"number",
				description:"string"
			},
			handler: controller.create_transaction
		},
		transaction:{
			rest:{
				method:"GET",
				path:"/"
			},
			handler: controller.get_transactions
		},
	},

	/**
	 * Events
	 */
	events: {

	},

	/**
	 * Methods
	 */
	methods: {

	},

	/**
	 * Service created lifecycle event handler
	 */
	created() {

	},

	/**
	 * Service started lifecycle event handler
	 */
	async started() {

	},

	/**
	 * Service stopped lifecycle event handler
	 */
	async stopped() {

	}
};