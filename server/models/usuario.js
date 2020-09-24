const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let rolesValidos = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} no es un rol valido'
};

let Shema = mongoose.Schema;

let usuarioSchema = new Shema({
    nombre: {
        type: String,
        required: [true, 'El nombre es necesario']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'El correo es necesario']
    },
    password: {
        type: String,
        required: [true, 'la contraseña es obligatoria']
    },
    img: {
        type: String,
        required: false
    }, // NO ES OBLIOGATORIO
    role: {
        type: String,
        default: 'USER_ROLE',
        enum: rolesValidos
    }, // DEFAULT: 'USER_ROLE'
    estado: {
        type: Boolean,
        default: true

    }, // BOOLEAN
    google: {
        type: Boolean,
        default: false
    } // BOOLEAN
});

usuarioSchema.methods.toJSON = function() {
    let user = this;
    let userObject = user.toObject();
    delete userObject.password;
    return userObject;
}

usuarioSchema.plugin(uniqueValidator, { message: '{PATH} debe ser unico' })

module.exports = mongoose.model('Usuario', usuarioSchema);