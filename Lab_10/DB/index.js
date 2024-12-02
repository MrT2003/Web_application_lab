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

export const connectToDatabase = async () => {
  try {
    const connection = await pool.getConnection();
    console.log('MySQL Connection Successful');
    connection.release(); // Giải phóng kết nối sau khi sử dụng
  } catch (error) {
    console.error('Database Connection Error:', error.message);
    throw error;
  }
};
