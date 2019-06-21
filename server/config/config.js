//========================//
//         PUERTO         //
//========================//
process.env.PORT = process.env.PORT || 3000;

//========================//
//        ENTORNO         //
//========================//
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//========================//
// VENCIMIENTO DEL TOKEN  //
//========================//
//60 SEG, 60 MIN, 24 HR, 30 D
process.env.CADUCIDAD_TOKEN = '720h';

//========================//
//       SEED DES         //
//========================//
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

//========================//
//       SEED PROD        //
//========================//
//process.env.SEEDP = process.env.SEEDP || 'este-es-el-seed-produccion';

//========================//
//     BASE DE DATOS      //
//========================//
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;

//========================//
//    GOOGLE CLIENT ID    //
//========================//
process.env.CLIENT_ID = process.env.CLIENT_ID || '884435774675-cbnpjop2ga5rn8j10bgtogu5qmonqs5p.apps.googleusercontent.com';