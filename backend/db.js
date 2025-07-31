// นำเข้า dotenv เพื่อโหลดค่าตัวแปรแวดล้อมจากไฟล์ .env
import dotenv from 'dotenv';
// นำเข้า pg (PostgreSQL client) และดึง Pool class ออกมา
import pkg from 'pg';
const { Pool } = pkg;

// โหลดค่าตัวแปรแวดล้อม (.env) เข้าสู่ process.env
dotenv.config();

// สร้าง instance ของ Pool สำหรับเชื่อมต่อกับฐานข้อมูล PostgreSQL
const pool = new Pool({
  user: process.env.PGUSER,       // ชื่อผู้ใช้ฐานข้อมูล
  host: process.env.PGHOST,       // โฮสต์ของฐานข้อมูล
  database: process.env.PGDATABASE, // ชื่อฐานข้อมูล
  password: process.env.PGPASSWORD, // รหัสผ่าน
  port: process.env.PGPORT,         // พอร์ต
});

// ส่งออก pool เพื่อให้ไฟล์อื่นๆ สามารถนำไปใช้งานต่อได้
export default pool;