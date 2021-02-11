import { Employee } from './employee.entity';
import { Repository, EntityRepository } from 'typeorm';

@EntityRepository(Employee)
export class EmployeeRepository extends Repository<Employee> {}