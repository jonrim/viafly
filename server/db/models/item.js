'use strict';
var crypto = require('crypto');
var _ = require('lodash');
var Sequelize = require('sequelize');

var db = require('../_db');

module.exports = db.define('item', {
    system_id: {
        type: Sequelize.INTEGER
    },
    upc: {
        type: Sequelize.INTEGER
    },
    name: {
        type: Sequelize.STRING
    },
    quantity: {
        type: Sequelize.INTEGER
    },
    price: {
        type: Sequelize.DECIMAL(10,2)
    },
    category: {
        type: Sequelize.STRING
    }

}, {
    instanceMethods: {
        
    },
    classMethods: {
        
    },
    hooks: {
        
    }
});
