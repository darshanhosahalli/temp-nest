/**
 *
 * @export
 * @interface Employee
 */
export interface Employee {
  [x: string]: any;
  /**
   *
   * @type {string}
   * @memberof Employee
   */
  readonly empId: string;
  /**
   *
   * @type {string}
   * @memberof Employee
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof Employee
   */
  department: EmployeeDepartmentEnum;
  /**
   *
   * @type {string}
   * @memberof Employee
   */
  position: string;
  /**
   *
   * @type {number}
   * @memberof Employee
   */
  salary: number;
  /**
   *
   * @type {string}
   * @memberof Employee
   */
  currentProject?: string;
  /**
   *
   * @type {number}
   * @memberof Employee
   */
  totalLeaves?: number;
  /**
   *
   * @type {number}
   * @memberof Employee
   */
  leavesTakes?: number;
  /**
   *
   * @type {string}
   * @memberof Employee
   */
  photo?: string;
}

/**
 * @export
 * @enum {string}
 */
export enum EmployeeDepartmentEnum {
  Accounts = 'accounts',
  Admin = 'admin',
  Production = 'production',
}
