import {PartTimeEmployee} from '../../controller';
import {PartTimeEmployee_TestDate} from '../fixtures';
import {assert} from 'chai';

describe('Verifies PartTimeEmployee getters...', () => {
  it(`getFirstName() should return ${PartTimeEmployee_TestDate.firstName}`, () => {
    const emp = new PartTimeEmployee(
      'Jake',
      'Keenan',
      27,
      ['Footballer'],
      1,
      12
    );
    assert(emp.getFirstName(), PartTimeEmployee_TestDate.firstName);
  });
  it(`getSecondName() should return ${PartTimeEmployee_TestDate.secondName}`, () => {
    const emp = new PartTimeEmployee('Jake', 'Keenan', 27, ['Footballer'], 1);
    assert(emp.getSecondName, PartTimeEmployee_TestDate.secondName);
  });
});
