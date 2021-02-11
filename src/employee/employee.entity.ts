import { BaseEntity, Entity, PrimaryColumn, Column } from 'typeorm';
import { EmployeeDepartmentEnum } from './interface/Employee';

@Entity()
export class Employee extends BaseEntity {
  @PrimaryColumn()
  readonly empId: string;

  @Column()
  name: string;

  @Column()
  department: EmployeeDepartmentEnum;

  @Column()
  position: string;

  @Column()
  salary: number;

  @Column()
  currentProject?: string;

  @Column()
  totalLeaves?: number;

  @Column()
  leavesTakes?: number;

  @Column()
  photo?: string;
}
