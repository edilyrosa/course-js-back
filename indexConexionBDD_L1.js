require('dotenv').config() // Carga las variables de entorno desde .env
const mysql = require('mysql2')
//Configurar la conexion.
const db = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    })

//Probar la conexion.
db.connect((err)=> {
    if(err) throw err; //Muestra Todo el obj Error
    console.log(`conexion successfully`)
})
// Ejecutar consulta.
db.query("SELECT * FROM construccion", (err, result)=>{
    if(err) throw err;
    console.log(result);

// Cerrar la conexión después de procesar la consulta
    db.end((err) => {
        if (err) console.error(`Error closing conexion: ${err.message}`);
        else console.log('Conexion Closed');
    });
})