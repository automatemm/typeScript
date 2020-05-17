class Department {
  static year = 2020;
  //name: string;
  //private id: string;
  protected employees: string[] = [];

  constructor(private id: string, public name: string) {
    //this.name = n;
  }

  describe() {
    console.log(`Department (${this.id}): (${this.name})`);
  }

  addAndPrintEmployeeName(empName: string) {
    this.employees.push(empName);
    console.log(this.employees.length);
    console.log(this.employees);
  }

  static createEmp(name: string) {
    return { name: name };
  }

  static printEmployee() {
    console.log(name);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  printAdminNames() {
    console.log(this.admins.length);
    console.log(`Department Admin's: (${this.name}): (${this.admins})`);
  }
}

class AccDepartment extends Department {
  private lastReport: string;
  private static instance: AccDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value!");
    }
    this.addReports(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccDepartment('d2', []);
    return this.instance;
  }

  addReports(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports.length);
    console.log(`Department: (${this.name}): (${this.reports})`);
  }

  addEmployee(name: string) {
    if (name === "mnmn") {
      return;
    }
    this.employees.push(name);
  }
}

//*********************************//*********************************

const hr = new Department("D2", "HR");
hr.describe();
hr.addAndPrintEmployeeName("Nivetha");
hr.addAndPrintEmployeeName("Mahadevan");

//*********************************//*********************************

// const accounting1 = AccDepartment.getInstance();
// accounting1.describe();
// accounting1.addEmployee("singleton");

const accounting = AccDepartment.getInstance();
accounting.describe();
accounting.addEmployee("Madhan");
accounting.addAndPrintEmployeeName("Vedha");
accounting.mostRecentReport = "Year End Report";
accounting.addReports("Monthly Report");
accounting.addReports("Weekly Timesheet Report");
console.log(accounting.mostRecentReport);
accounting.printReports();

//*********************************//*********************************

const it = new ITDepartment("D3", ["Maddy", "Mahesh", "Nick"]);
it.describe();
it.addAndPrintEmployeeName("Madhavan");
it.addAndPrintEmployeeName("Arjun");
it.printAdminNames();

//*********************************//*********************************
// static
const staticEmp1 = Department.createEmp('Static Man')
console.log(staticEmp1, Department.year);
//*********************************//*********************************

