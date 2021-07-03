const Sequelize = require('sequelize');
const db = require('../config/db');
const bcrypt = require('bcrypt-nodejs');

const UsuariosCV = db.define('usuarios',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },

    nombre:{
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
           
            notEmpty:{
                msg: 'El nombre no puede ir vacío'
            }
        }
    },
    apellidoPaterno:{
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
            
            notEmpty:{
                msg: 'El apellido no puede ir vacío'
            }
        }
    },
    apellidoMaterno:{
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
            
            notEmpty:{
                msg: 'El apellido no puede ir vacío'
            }
        }
    },
    email:{
        type: Sequelize.STRING(60),
        allowNull: false,
        validate:{
            isEmail: {
                msg: 'Agrega un Correo Válido'
            },
            notEmpty:{
                msg: 'El email no puede ir vacío'
            }
        },
        unique:{
            args:true,
            msg: 'Usuario ya registrado'
        }
    },
    password:{
        type: Sequelize.STRING(60),
        allowNull: false,
        validate:{
            notEmpty:{
                msg: 'El password no puede ir vacío'
            }
        }
    }
    

},{
    hooks:{
        beforeCreate(usuario){
            usuario.password=bcrypt.hashSync(usuario.password,bcrypt.genSaltSync(10));
        }
    }
});

//Método

UsuariosCV.prototype.verificarPassword = function(password){
    return bcrypt.compareSync(password,this.password);
}

module.exports=UsuariosCV;