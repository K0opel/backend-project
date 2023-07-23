import { Sequelize } from "sequelize";

const db = new Sequelize('b1ywi8yntr2twxgtz1ac', 'uyyadb4imvfv0ran', 'W6a4OUseGKxeF69WqdLG', {
    host: 'b1ywi8yntr2twxgtz1ac-mysql.services.clever-cloud.com',
    dialect: 'mysql',
    port: 3306,
    dialectOptions: {
        connectTimeout: 60000, // Set a longer connection timeout (in milliseconds)
      },
      timezone: '+07:00'
});

export default db;
