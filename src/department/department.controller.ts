import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { DepartmentList } from './interface/department-list';
import { Department } from './interface/department';
import { CreateDepartmentDto } from './DTO/create-department.dto';

/**
 * Api End point for Departments
 */
@Controller('/v1/departments')
export class DepartmentController {
  constructor(private departmentService: DepartmentService) {}

  /**
   * Get method to fetch a list of all the departments
   * @returns - a list of all the departments
   */
  @Get()
  public getAllDepartments(): Promise<DepartmentList> {
    return this.departmentService.getAllTheDepartment();
  }

  /**
   * Creates a department.
   * @param
   * @returns - the newly create department
   */
  @Post()
  public createDepartment(
    @Body() createDepartmentDto: CreateDepartmentDto,
  ): Promise<Department> {
    return this.departmentService.createDepartment(createDepartmentDto);
  }

  /**
   * Deletes the department specified by id
   * @param id
   */
  @Delete('/:id')
  public deleteDepartmentById(@Param('id') id: string): Promise<void> {
    return this.departmentService.deleteDepartment(id);
  }
}
