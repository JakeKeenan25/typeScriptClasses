interface Employee {
  firstName: string;
  secondName: string;
  age: number;
  jobs: string[];
  empId: number;
}

export const Employee_TestDate = <Employee>{
  firstName: 'Jake',
  secondName: 'Keenan',
  age: 27,
  jobs: ['Footballer'],
  empId: 1,
};

export const PartTimeEmployee_TestDate = <Employee>{
  firstName: 'Jake',
  secondName: 'Keenan',
  age: 27,
  jobs: ['Footballer'],
  empId: 1,
  contractLength: 12,
};
