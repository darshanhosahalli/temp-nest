import { EmployeeEntity } from './employee.entity';
import { Repository, EntityRepository } from 'typeorm';
import { CreateEmployeeDto } from './DTO/create-employee.dto';
import { InternalServerErrorException } from '@nestjs/common';

/**
 * Employee Repository
 */
@EntityRepository(EmployeeEntity)
export class EmployeeRepository extends Repository<EmployeeEntity> {
  /**
   * Function to create a new Employee
   * @param createEmployeeDto
   */
  async createEmployee(
    createEmployeeDto: CreateEmployeeDto,
  ): Promise<EmployeeEntity> {
    try {
      return this.save(createEmployeeDto);
    } catch (error) {
      throw new InternalServerErrorException('Unable to create employee');
    }
  }
}
