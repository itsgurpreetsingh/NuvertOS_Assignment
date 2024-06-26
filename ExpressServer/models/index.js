const {Sequelize,DataTypes} = require('sequelize')
const dbConfig= require('../config/DBconfig.js')
const sequelize=new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
   {
    host:dbConfig.HOST,
    dialect:dbConfig.dialect,
   pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
   }
   }
)

sequelize.authenticate().then(()=>{
    console.log("connected...")
}).catch(err=>{
    console.log('Error'+err)
})
const db={}
db.Sequelize=Sequelize
db.sequelize=sequelize
db.compounds=require('./compoundModel.js')(sequelize,DataTypes)
db.sequelize.sync({force:false}).then(()=>{
    console.log('re-sync done')
})

module.exports=db