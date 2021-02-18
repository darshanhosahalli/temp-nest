import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DepartmentRepository } from './department.repository';
import { DepartmentList } from './interface/department-list';
import { Department } from './interface/department';
import { CreateDepartmentDto } from './DTO/create-department.dto';

/**
 * Service class for CRUD operation of department module
 */
@Injectable()
export class DepartmentService {
  constructor(
    @InjectRepository(DepartmentRepository)
    private departmentRepository: DepartmentRepository,
  ) {}

  /**
   * Service Method to fetch a list of all the department
   * @returns - the list of all the department
   */
  public async getAllTheDepartment(): Promise<DepartmentList> {
    return await this.departmentRepository.find();
  }

  /**
   * Service Method to create a new department
   * @param createDepartmentDto
   * @returns the newly created department
   */
  public async createDepartment(
    createDepartmentDto: CreateDepartmentDto,
  ): Promise<Department> {
    return await this.departmentRepository.createEmployee(createDepartmentDto);
  }

  /**
   * Service Method to delete the department specified by id
   * @param id
   */
  public async deleteDepartment(id: string): Promise<void> {
    await this.departmentRepository.delete(id);
  }
}
