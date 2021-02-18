import { BaseEntity, Entity, PrimaryColumn, Column } from 'typeorm';
import { Department } from './interface/department';

/**
 * Entity class for Department
 */
@Entity()
export class DepartmentEntity extends BaseEntity implements Department {
  /**
   * @primarykey
   * Department id
   */
  @PrimaryColumn({
    type: 'varchar',
    length: 150,
    unique: true,
    update: false,
  })
  did: string;

  /**
   * @column
   * Department name
   */
  @Column({
    type: 'varchar',
    length: 150,
  })
  name: string;
}
