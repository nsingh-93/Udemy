// Abstract classes cannot be instantiated
// abstract functions must be implemented in the inherited classes
abstract class Department {
  static fiscalYear = 2020;
  // public name: string;
  // private readonly id: string;
  protected employees: string[] = [];

  // constructor(id: string, n: string) {
  //   this.id = id;
  //   this.name = n;
  // }

  // Instead of declaring everything separately, can do it all at once
  // The property is created and set this way
  constructor(protected readonly id: string, public name: string) {
    // static properties can only be called by using the class name in non static functions
    // console.log(Department.fiscalYear);
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  // describe(this: Department) {
  //   console.log(`Department (${this.id}): ${this.name}`);
  // }

  abstract describe(this: Department): void; 

  addEmployee(this: Department, employee: string) {
    // validation, etc.
    this.employees.push(employee);
  }

  printEmployeeInformation(this: Department) {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    // super needs to be called before using this keyword
    super(id, "IT");
    this.admins = admins;
  }

  describe() {
    console.log("IT Department - ID: " + this.id)
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) return this.lastReport;

    throw new Error("No report found");
  }

  set mostRecentReport(value: string) {
    if (!value) throw new Error("Please pass in valid value");

    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }

    this.instance = new AccountingDepartment("D2", []);
    return this.instance;
  }

  describe() {
    console.log("Accounting Department - ID: " + this.id)
  }

  // Overriding base class functions
  addEmployee(this: AccountingDepartment, name: string) {
    if (name === "Neil") return;

    this.employees.push(name);
  }

  addReport(this: AccountingDepartment, text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports(this: AccountingDepartment) {
    console.log(this.reports);
  }
}

const employee1 = Department.createEmployee("Neil");

console.log(employee1, Department.fiscalYear);

const it = new ITDepartment("D1", ["Neil"]);

it.addEmployee("Neil");
it.addEmployee("Justin");

console.log(it);

it.describe();
it.printEmployeeInformation();

// Cannot use new on the class since the constructor is private
// const accounting = new AccountingDepartment("D2", []);
const accounting = AccountingDepartment.getInstance();
// This allows us to use the singleton pattern and have only
// one of these classes created

accounting.addEmployee("Neil");
accounting.addEmployee("Luna");

accounting.mostRecentReport = "Everything is okay!";

console.log(accounting);

accounting.describe();
accounting.printEmployeeInformation();
accounting.addReport("Something went terribly wrong..");
accounting.printReports();

console.log(accounting.mostRecentReport);

// const accountingCopy = { name: "COPY", describe: accounting.describe };
// accountingCopy.describe();
