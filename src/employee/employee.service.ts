import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { EmployeesList } from './interface/employees-list';
import { Employee } from './interface/employee';
import { CreateEmployeeDto } from './DTO/create-employee.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { EmployeeRepository } from './employee.repository';
import { UpdateResult } from 'typeorm';
import { EmployeeEntity } from './employee.entity';

/**
 * Service class for CRUD operation of employee module
 */
@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(EmployeeRepository)
    private employeeRepository: EmployeeRepository,
  ) {}

  /**
   * Service Method to fetch a list of all the employees
   * @returns - the list of all the employees
   */
  public async getAllTheEmployees(): Promise<EmployeesList> {
    return await this.employeeRepository.find();
  }

  /**
   * Service Method to fetch an employee by id
   * @param id
   * @returns an employee specified by id
   */
  public async getEmployeeById(id: string): Promise<EmployeeEntity> {
    try {
      return await this.employeeRepository.findOne(id);
    } catch (error) {
      throw new InternalServerErrorException(
        `Employee with ID "${id}" not found`,
      );
    }
  }

  /**
   * Service Method to create a new employee
   * @param createEmployeeDto
   * @returns the newly created employee
   */
  public async createEmployee(
    createEmployeeDto: CreateEmployeeDto,
  ): Promise<Employee> {
    return await this.employeeRepository.createEmployee(createEmployeeDto);
  }

  /**
   * Service Method to update an employee specified by id
   * @param id
   * @param createEmployeeDto
   * @returns the updated employee specified by id
   */
  public async updateEmployee(
    id: string,
    createEmployeeDto: CreateEmployeeDto,
  ): Promise<UpdateResult> {
    const employee = await this.getEmployeeById(id);
    try {
      return await EmployeeEntity.update(employee, createEmployeeDto);
    } catch (error) {
      throw new InternalServerErrorException(
        `Unable to update employee by ${id}`,
      );
    }
  }

  /**
   * Service Method to delete the employee specified by id
   * @param id
   */
  public async deleteEmployee(id: string): Promise<void> {
    await this.employeeRepository.delete(id);
  }
}
