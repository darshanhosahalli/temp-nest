import { BaseEntity, Entity, PrimaryColumn, Column } from 'typeorm';
import { EmployeeDepartmentEnum, Employee } from './interface/Employee';

/**
 * Entity class for employee
 */
@Entity()
export class EmployeeEntity extends BaseEntity implements Employee {
  /**
   * @primarykey
   * Employee id
   */
  @PrimaryColumn({
    type: 'varchar',
    length: 150,
    unique: true,
    update: false,
  })
  empId: string;

  /**
   * @column
   * Employee name
   */
  @Column({
    type: 'varchar',
    length: 150,
  })
  name: string;

  /**
   * @column
   * Employee Department
   */
  @Column({
    type: 'varchar',
    length: 150,
    enum: EmployeeDepartmentEnum,
  })
  department: EmployeeDepartmentEnum;

  /**
   * @column
   * Employee position
   */
  @Column({
    type: 'varchar',
    length: 150,
  })
  position: string;

  /**
   * @column
   * Employee Salary
   */
  @Column({
    type: 'int',
  })
  salary: number;

  /**
   * @column
   * Employee current project
   */
  @Column({
    type: 'varchar',
    length: 150,
    nullable: true,
  })
  currentProject?: string;

  /**
   * @column
   * Employee Total leaves
   */
  @Column({
    type: 'int',
    nullable: true,
  })
  totalLeaves?: number;

  /**
   * @column
   * Employee leaves taken
   */
  @Column({
    type: 'int',
    nullable: true,
  })
  leavesTakes?: number;

  /**
   * @column
   * Employee Photo
   */
  @Column({
    type: 'varchar',
    length: 250,
    nullable: true,
  })
  photo?: string;
}
