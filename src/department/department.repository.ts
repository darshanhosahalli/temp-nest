import { DepartmentEntity } from './department.entity';
import { Repository, EntityRepository } from 'typeorm';
import { InternalServerErrorException } from '@nestjs/common';
import { CreateDepartmentDto } from './DTO/create-department.dto';

/**
 * Department Repository
 */
@EntityRepository(DepartmentEntity)
export class DepartmentRepository extends Repository<DepartmentEntity> {
  /**
   * Function to create a new Employee
   * @param createEmployeeDto
   */
  async createEmployee(
    createDepartmentDto: CreateDepartmentDto,
  ): Promise<DepartmentEntity> {
    try {
      return this.save(createDepartmentDto);
    } catch (error) {
      throw new InternalServerErrorException('Unable to create employee');
    }
  }
}
