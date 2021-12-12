import sequelize from 'sequelize';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config({ path: path.join(__dirname, '../../.env') });

const mysqlConnection = () => {
  const mySqlSequelize = new sequelize(
    'nmcnpm',
    process.env.DATABASE_USERNAME,
    process.env.DATABASE_PASSWORD,
    {
      host: process.env.DATABASE_URL,
      dialect: 'mysql',
    }
  );
  return mySqlSequelize;
};

export default mysqlConnection;
