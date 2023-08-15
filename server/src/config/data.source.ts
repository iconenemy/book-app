import { DataSource, DataSourceOptions } from 'typeorm';
import { User } from '../entities/user.entity'
import { Book } from '../entities/book.entity'
import { Section } from '../entities/section.entity'

const Config: DataSourceOptions = {
  type: process.env.POSTGRES_TYPE,
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  logging: ['query', 'error'],
  entities: [User, Book, Section],
  migrations: [`${__dirname}/../migrations/*{.ts,.js}`],
  database: process.env.POSTGRES_DATABASE,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  migrationsRun: true,
  synchronize: true
};

export const AppDataSource: DataSource = new DataSource(Config);
