// ===============
// puerto
//================

process.env.PORT = process.env.PORT || 3000;

// ===============
// entorno
//================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

let urlDB;

/* if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else { */
urlDB = 'mongodb+srv://dmarmijosa:7pwmHs522eE3LIYP@cluster0.cfcmt.mongodb.net/cafe?retryWrites=true&w=majority'
    //}

process.env.URLDB = urlDB;

//mongodb: //localhost:27017/cafe
//mongodb + srv: //dmarmijosa:<password>@cluster0.cfcmt.mongodb.net/<dbname>?retryWrites=true&w=majority