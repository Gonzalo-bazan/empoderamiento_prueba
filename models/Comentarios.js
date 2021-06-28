const Sequelize = require('sequelize');
const slug = require('slug');
const db=require('../config/db');
const shortid = require('shortid');

const Comentarios = db.define('comentarios',{
    id: {
        type : Sequelize.INTEGER,

        primaryKey: true,
        autoIncrement: true
    },

    nombre: {
        type: Sequelize.STRING,
        allowNull: false
    },

    apellidoPaterno:{
        type: Sequelize.STRING,
        allowNull: false
    },

    apellidoMaterno:{
        type: Sequelize.STRING,
        allowNull: false
    },

    producto:{
        type: Sequelize.STRING,
        allowNull: false
    },

    comentario:{
        type: Sequelize.STRING(180),
        allowNull: false
    },

    
});

module.exports= Comentarios;