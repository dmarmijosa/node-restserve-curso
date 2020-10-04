// ===============
// puerto
//================

process.env.PORT = process.env.PORT || 3000;

// ===============
// entorno
//================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
// ===============
// Vencimiento del Token
//================
// 60 segundos
// 60 minutos
// 24 horas
// 30 dias
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';
// ===============
// SEED de autentificacion
//================


// ===============
// base de datos remota
//================

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb+srv://dmarmijosa:7pwmHs522eE3LIYP@cluster0.cfcmt.mongodb.net/cafe?retryWrites=true&w=majority'
}

process.env.URLDB = urlDB;

//mongodb: //localhost:27017/cafe
//mongodb + srv: //dmarmijosa:<password>@cluster0.cfcmt.mongodb.net/<dbname>?retryWrites=true&w=majority

//==================
// Google Client Id
//================

process.env.CLIENT_ID = process.env.CLIENT_ID || '674737535512-5uolvj7c2ahgrq0p6srvfn99a3hj0gkg.apps.googleusercontent.com';