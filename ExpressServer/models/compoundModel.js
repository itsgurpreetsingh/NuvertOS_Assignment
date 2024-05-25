module.exports=(sequelize,DataTypes)=>{
    const compound=sequelize.define("compound",{
        id:{
            type:DataTypes.INTEGER,
            primaryKey: true,
        },
        CompoundName:{
            type:DataTypes.STRING
        },
        CompoundDescription:{
            type:DataTypes.TEXT
        },
        strImageSource:{
            type:DataTypes.TEXT
        },
        strImageAttribution:{
            type:DataTypes.TEXT
        },
        dateModified:{
            type:DataTypes.STRING
        }
    })
    return compound
}
