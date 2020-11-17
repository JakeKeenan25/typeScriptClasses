export class Employee {
  private _firstName: string;
  private _secondName: string;
  private _age: number;
  private _jobs: string[];
  private _empId: number;

  static numberOfEmployees = 500;

  constructor(
    firstName = 'Joe',
    secondName = 'Doe',
    age = 25,
    jobs: string[] = ['Walk Boson'],
    empId = 0
  ) {
    this._firstName = firstName;
    this._secondName = secondName;
    this._age = age;
    this._jobs = jobs;
    this._empId = empId;
  }

  get fullName(): string {
    return `${this._firstName} ${this._secondName}`;
  }

  getFirstName(): string {
    return this._firstName;
  }
  setFirstName(firstName: string = this._firstName): void {
    this._firstName = firstName;
  }

  getSecondName(): string {
    return this._secondName;
  }
  setSecondName(secondName: string = this._secondName): void {
    this._secondName = secondName;
  }

  getAge(): number {
    return this._age;
  }
  setAge(age: number = this._age): void {
    this._age = age;
  }

  getJobs(): string[] {
    return this._jobs;
  }
  setJobs(jobs: string[] = this._jobs): void {
    this._jobs = jobs;
  }
  addJob(job: string): void {
    if (job && this._jobs && !this._jobs.includes(job)) {
      this._jobs.push(job);
    }
  }
  removeJob(job: string): void {
    if (job && this._jobs && this._jobs.includes(job)) {
      const arr = this._jobs.filter(j => j !== job);
      this.setJobs(arr);
    }
  }

  getEmpId(): number {
    return this._empId;
  }

  display(): void {
    console.log({
      firstName: this._firstName,
      secondName: this._secondName,
      age: this._age,
      jobs: this._jobs,
      empId: this._empId,
    });
  }

  HowManyIdsLeft(): void {
    console.log(Employee.numberOfEmployees - this._empId);
  }
}
