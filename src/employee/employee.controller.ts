import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Patch,
} from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeesList } from './interface/employees-list';
import { Employee } from './interface/employee';
import { CreateEmployeeDto } from './DTO/create-employee.dto';
import { UpdateResult } from 'typeorm';

/**
 * Api End point for employees
 */
@Controller('/v1/employees')
export class EmployeeController {
  /**
   * Constructor for the Employee Controller
   * @param employeeService
   */
  constructor(private employeeService: EmployeeService) {}

  /**
   * Api to fetch a list of all the employees
   * @returns - the list of all the employees
   */
  @Get()
  public async getAllEmployees(): Promise<EmployeesList> {
    return await this.employeeService.getAllTheEmployees();
  }

  /**
   * Api to fetch an employee by id
   * @param id
   * @returns - an employee with id
   */
  @Get('/:id')
  public async getEmployeeById(@Param('id') id: string): Promise<Employee> {
    return await this.employeeService.getEmployeeById(id);
  }

  /**
   * Api to create a new employee
   * @param createEmployeeDto
   * @returns - the newly created employee
   */
  @Post()
  public async createEmployee(
    @Body() createEmployeeDto: CreateEmployeeDto,
  ): Promise<Employee> {
    return await this.employeeService.createEmployee(createEmployeeDto);
  }

  /**
   * Api to update the employee specified by id
   * @param id
   * @param createEmployeeDto
   * @returns - the updated employee
   */
  @Patch('/:id')
  public async updateEmployee(
    @Param('id') id: string,
    @Body() createEmployeeDto: CreateEmployeeDto,
  ): Promise<UpdateResult> {
    console.log(createEmployeeDto);
    return await this.employeeService.updateEmployee(id, createEmployeeDto);
  }

  /**
   * Api to delete an employee specified by id
   * @param id
   */
  @Delete('/:id')
  public async deleteEmployee(@Param('id') id: string): Promise<void> {
    console.log(`Id of employee will be deleted ${id}`);
    await this.employeeService.deleteEmployee(id);
  }
}
