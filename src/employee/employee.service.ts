import { Injectable } from '@nestjs/common';
import { EmployeesList } from './interface/employees-list';
import { Employee } from './interface/employee';
import { CreateEmployeeDto } from './DTO/create-employee.dto';

@Injectable()
export class EmployeeService {
    
    /**
     * Service Method to fetch a list of all the employees
     * @returns - the list of all the employees
     */
    public getAllTheEmployees(): EmployeesList {
        return;
    }

    /**
     * Service Method to fetch an employee by id
     * @param id
     * @returns an employee specified by id
     */
    public getEmployeeById(id: string): Employee {
        return;
    }

    /**
     * Service Method to create a new employee
     * @param createEmployeeDto 
     * @returns the newly created employee
     */
    public createEmployee(createEmployeeDto: CreateEmployeeDto): Employee {
        return;
    }

    /**
     * Service Method to update an employee specified by id
     * @param id 
     * @param createEmployeeDto
     * @returns the updated employee specified by id
     */
    public updateEmployee(id: string, createEmployeeDto: CreateEmployeeDto): Employee {
        return;
    }

    /**
     * Service Method to delete the employee specified by id
     * @param id
     */
    public deleteEmployee(id: string): void {
        return;
    }
}
