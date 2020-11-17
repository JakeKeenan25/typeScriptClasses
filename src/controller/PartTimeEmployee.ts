import {Employee} from './index';

export class PartTimeEmployee extends Employee {
  private _contractLength = 12;

  constructor(
    firstName: string,
    secondName: string,
    age: number,
    jobs: string[] = ['Cleaner'],
    empId: number,
    contractLength?: number
  ) {
    super(firstName, secondName, age, jobs, empId);
    if (contractLength) {
      this._contractLength = contractLength;
    }
  }

  getContractLength(): number {
    return this._contractLength;
  }
  setContactLenght(contractLength: number = this._contractLength): void {
    this._contractLength = contractLength;
  }

  display(): void {
    console.log({
      firstName: this.getFirstName(),
      secondName: this.getSecondName(),
      age: this.getAge(),
      jobs: this.getJobs(),
      empId: this.getEmpId(),
      contractLength: this.getContractLength(),
    });
  }
}
