const { DataTypes } = require ('sequelize');

export default function(sequelize){
  sequelize.define('Activity', {
    name: {
      type: DataTypes.STRING,
    },
    difficulty:{
      type: DataTypes.ENUM(
        "1",
        "2",
        "3",
        "4",
        "5",
      ),
      defaultValue: "3"
    },
    duration:{
      type: DataTypes.FLOAT,
    },
    season:{
      type: DataTypes.ENUM(
        "SUMMER",
        "FALL",
        "WINTER",
        "SPRING",
        "ALL SEASON",
      ),
      defaultValue: "ALL SEASON"
    }
  }, 
  {
    timestamps: false,
  }
  );
};
