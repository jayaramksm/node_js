const mongoose = require("mongoose")


const DB_Connection = async () => {
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_URL);
        console.log("Daatabase connected", connect.connection.host);
        
    } catch (err) {
        console.log("Db_error==>", err);
        process.exit(1)

    }
}
module.exports = DB_Connection