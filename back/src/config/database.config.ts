import { registerAs } from '@nestjs/config';

export default registerAs('db', () => ({
  type: 'mysql',
  entities: ['dist/**/*.entity.js'],
  synchronize: false,
  dropSchema: false,
  host: process.env.DB_HOST || 'db',
  port: parseInt(process.env.DB_PORT, 10) || 3306,
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_DATABASE || 'weather',
}));
