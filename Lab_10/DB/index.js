import { config } from 'dotenv';
import { createPool } from 'mysql2/promise';

config(); // Tải tệp .env

const pool = createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER, // Đảm bảo có user
  password: process.env.MYSQL_PASSWORD, // Đảm bảo có mật khẩu
  database: process.env.MYSQL_DATABASE_NAME,
  port: process.env.MYSQL_PORT,
});

const connectToDB = async () => {
  try {
      await pool.getConnection();
      console.log("MySQL connection successful!");
  } catch (error) {
      console.error("Database connection error!");
      console.error(error.message);
      throw error;
  }
};

export { connectToDB, pool };
