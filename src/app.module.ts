import { Module } from '@nestjs/common';
import { EmployeeModule } from './employee/employee.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { DepartmentModule } from './department/department.module';
import { PositionModule } from './position/position.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), EmployeeModule, DepartmentModule, PositionModule],
})
export class AppModule {}
