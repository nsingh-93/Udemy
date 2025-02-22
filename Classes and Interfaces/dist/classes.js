"use strict";
class Department {
    id;
    name;
    static fiscalYear = 2020;
    employees = [];
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class ITDepartment extends Department {
    admins;
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
    describe() {
        console.log("IT Department - ID: " + this.id);
    }
}
class AccountingDepartment extends Department {
    reports;
    lastReport;
    static instance;
    get mostRecentReport() {
        if (this.lastReport)
            return this.lastReport;
        throw new Error("No report found");
    }
    set mostRecentReport(value) {
        if (!value)
            throw new Error("Please pass in valid value");
        this.addReport(value);
    }
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
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
        console.log("Accounting Department - ID: " + this.id);
    }
    addEmployee(name) {
        if (name === "Neil")
            return;
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
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
const accounting = AccountingDepartment.getInstance();
accounting.addEmployee("Neil");
accounting.addEmployee("Luna");
accounting.mostRecentReport = "Everything is okay!";
console.log(accounting);
accounting.describe();
accounting.printEmployeeInformation();
accounting.addReport("Something went terribly wrong..");
accounting.printReports();
console.log(accounting.mostRecentReport);
//# sourceMappingURL=classes.js.map