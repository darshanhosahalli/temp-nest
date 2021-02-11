import { Controller, Get, Param, Post, Body, Delete, Patch } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeesList } from './interface/employees-list';
import { Employee } from './interface/employee';
import { CreateEmployeeDto } from './DTO/create-employee.dto';

/**
 * Api End point for employees
 */
@Controller('/v1/employee')
export class EmployeeController {

    constructor(private employeeService: EmployeeService) {
    }

    /**
     * Api to fetch a list of all the employees
     * @returns - the list of all the employees
     */
    @Get()
    public getAllEmployees(): EmployeesList {
        return this.employeeService.getAllTheEmployees();
    }

    /**
     * Api to fetch an employee by id
     * @param id
     * @returns - an employee with id
     */
    @Get('/:id')
    public getEmployeeById(@Param('id') id: string): Employee {
        return  this.employeeService.getEmployeeById(id);
    }

    /**
     * Api to create a new employee
     * @param createEmployeeDto
     * @returns - the newly created employee
     */
    @Post()
    public createEmployee(@Body() createEmployeeDto: CreateEmployeeDto): Employee {
        return this.employeeService.createEmployee(createEmployeeDto);
    }

    /**
     * Api to update the employee specified by id
     * @param id
     * @param createEmployeeDto
     * @returns - the updated employee
     */
    @Patch()
    public updateEmployee(@Param('id') id: string, @Body() createEmployeeDto: CreateEmployeeDto): Employee {
        return this.employeeService.updateEmployee(id, createEmployeeDto);
    }

    /**
     * Api to delete an employee specified by id
     * @param id
     */
    @Delete()
    public deleteEmployee(@Param('id') id: string): void {

    }
}
