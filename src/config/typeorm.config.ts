import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { EmployeeEntity } from 'src/employee/employee.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'AMS',
  entities: [EmployeeEntity],
  synchronize: true,
};
