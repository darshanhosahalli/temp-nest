import { Test } from '@nestjs/testing';
import { EmployeeService } from './employee.service';
import { EmployeeRepository } from './employee.repository';

/**
 * Mock class for employee repository
 */
const mockEmployeeRepository = () => ({
  find: jest.fn(),
});

/**
 * @description tests for employee service
 */
describe('EmployeeService', () => {
  let employeeService;
  let employeeRepository;

  /**
   * create a new instance of EmployeeService and EmployeeRepository before running each test
   */
  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        EmployeeService,
        { provide: EmployeeRepository, useFactory: mockEmployeeRepository },
      ],
    }).compile();

    employeeService = await module.get<EmployeeService>(EmployeeService);
    employeeRepository = await module.get<EmployeeRepository>(
      EmployeeRepository,
    );
  });

  /**
   * @description - tests for getAllTheEmployees, method of employeeService
   */
  describe('getEmployees', () => {
    it('get all employees from repository', async () => {
      employeeRepository.find.mockResolvedValue('employees list');
      expect(employeeRepository.find).not.toHaveBeenCalled();
      const result = await employeeService.getAllTheEmployees();
      expect(employeeRepository.find).toHaveBeenCalled();
      expect(result).toEqual('employees list');
    });
  });
});
