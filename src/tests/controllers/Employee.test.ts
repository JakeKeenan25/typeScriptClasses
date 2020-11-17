import {Employee} from '../../controller';
import {Employee_TestDate} from '../fixtures';
import {assert} from 'chai';

describe('Verifies Employee getters...', () => {
  it(`getFirstName() should return ${Employee_TestDate.firstName}`, () => {
    const emp = new Employee('Jake', 'Keenan', 27, ['Footballer'], 1);
    assert(emp.getFirstName(), Employee_TestDate.firstName);
  });
  it(`getSecondName() should return ${Employee_TestDate.secondName}`, () => {
    const emp = new Employee('Jake', 'Keenan', 27, ['Footballer'], 1);
    assert(emp.getSecondName, Employee_TestDate.secondName);
  });
});
