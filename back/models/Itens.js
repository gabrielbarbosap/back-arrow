const mongoose = require('mongoose');

const { Schema } = mongoose;

const ItensSchema = new Schema({

    RGO_1: {
        type: String,
    },
    CARGO_1: {
        type: String,
    },
    RGO_2: {
        type: String,
    },
    CARGO_2: {
        type: String,
    },
    NOME: {
        type: String,
    },
    CPF_BASE: {
        type: String,
    },
    CPF: {
        type: String,
    },
    NASC: {
        type: String,
    },
    TELEFONE_1: {
        type: String,
    },
    TELEFONE_2: {
        type: String,
    },
    TELEFONE_3: {
        type: String,
    },
    TELEFONE_4: {
        type: String,
    },
    TELEFONE_5: {
        type: String,
    },
    TELEFONE_6: {
        type: String,
    },
    TELEFONE_7: {
        type: String,
    },
    CELULAR_1: {
        type: String,
    },
    CELULAR_2: {
        type: String,
    },
    CELULAR_3: {
        type: String,
    },
    CELULAR_4: {
        type: String,
    },
    CELULAR_5: {
        type: String,
    },
    CELULAR_6: {
        type: String,
    },
    CELULAR_7: {
        type: String,
    },
    CELULAR_8: {
        type: String,
    },
    EMAIL_1: {
        type: String,
    },
    EMAIL_2: {
        type: String,
    },
    EMAIL_3: {
        type: String,
    },
    EMAIL_4: {
        type: String,
    },
    EMAIL_5: {
        type: String,
    },
    ENDERECO: {
        type: String,
    },
    N: {
        type: String,
    },
    COMPLEMENTO: {
        type: String,
    },
    BAIRRO: {
        type: String,
    },
    CEP: {
        type: String,
    },
    CIDADE: {
        type: String,
    },
    CIDADE: {
        type: String,
    },
    RUA: {
        type: String,
    },
    LEVEL_INT: {
        type: String
    },
    PROVIDENCE: {
        type: String
    },
    OBS: {
        type: String
    }, 

});

module.exports = mongoose.model('itens', ItensSchema)