import { Employee, EmployeeDepartmentEnum } from '../interface/employee';
import {
  IsNotEmpty,
  IsString,
  IsEnum,
  IsNumber,
  IsOptional,
} from 'class-validator';

export class CreateEmployeeDto implements Employee {
  @IsNotEmpty()
  @IsString()
  readonly empId: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEnum(EmployeeDepartmentEnum)
  department: EmployeeDepartmentEnum;

  @IsNotEmpty()
  @IsString()
  position: string;

  @IsNotEmpty()
  @IsNumber()
  salary: number;

  @IsOptional()
  @IsString()
  currentProject?: string;

  @IsOptional()
  @IsNumber()
  totalLeaves?: number;

  @IsOptional()
  @IsNumber()
  leavesTakes?: number;

  @IsOptional()
  @IsString()
  photo?: string;
}
