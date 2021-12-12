import sequelize from 'sequelize';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config({ path: path.join(__dirname, '../../.env') });

const mysqlConnection = () => {
  const mySqlSequelize = new sequelize(
    process.env.DATABASE_URL,
    process.env.DATABASE_USERNAME,
    process.env.DATABASE_PASSWORD,
    {
      host: '18.136.194.238',
      dialect: 'mysql',
    }
  );
  return mySqlSequelize;
};

export default mysqlConnection;
