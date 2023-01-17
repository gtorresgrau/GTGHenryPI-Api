//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const {server} = require('./src/app.js');
const { conn } = require('./src/db.js');
const { getAllApi } = require('./src/controllers/GetAllApi.js')
const { PORT } = process.env;
const dotenv = require('dotenv');
dotenv.config()

conn.sync({ force: true }).then(async () => {
  await getAllApi();
  server.losten(PORT, () => {
    console.log(`%s listening at ${PORT}`); 
  });
});
