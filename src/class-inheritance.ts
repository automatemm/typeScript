// class Department {
//   //name: string;
//   //private id: string;
//   protected employees: string[] = [];

//   constructor(private id: string, public name: string) {
//     //this.name = n;
//   }

//   describe() {
//     console.log(`Department (${this.id}): (${this.name})`);
//   }

//   addAndPrintEmployeeName(empName: string) {
//     this.employees.push(empName);
//     console.log(this.employees.length);
//     console.log(this.employees);
//   }
// }

// class ITDepartment extends Department {
//   constructor(id: string, public admins: string[]) {
//     super(id, "IT");
//     this.admins = admins;
//   }

//   printAdminNames() {
//     console.log(this.admins.length);
//     console.log(`Department Admin's: (${this.name}): (${this.admins})`);
//   }
// }

// class AccDepartment extends Department {
//   private lastReport: string;

//   get mostRecentReport() {
//     if (this.lastReport) {
//       return this.lastReport;
//     } else throw new Error("Report not found ...");
//   }

//   constructor(id: string, public reports: string[]) {
//     super(id, "Accounting");
//     this.reports = reports;
//   }

//   addReports(text: string) {
//     this.reports.push(text);
//   }

//   printReports() {
//     console.log(this.reports.length);
//     console.log(`Department: (${this.name}): (${this.reports})`);
//   }

//   addEmployee(name: string) {
//     if (name === "Madhan") {
//       return;
//     }
//     this.employees.push(name);
//   }
// }

// //*********************************//*********************************
// const hr = new Department("D2", "HR");
// hr.describe();
// hr.addAndPrintEmployeeName("Nivetha");
// hr.addAndPrintEmployeeName("Mahadevan");

// //*********************************//*********************************
// const accounting = new AccDepartment("D1", []);
// accounting.describe();
// accounting.addEmployee("Madhan");
// accounting.addAndPrintEmployeeName("Vedha");
// accounting.addReports("Annual Report");
// accounting.addReports("Weekly Timesheet Report");
// console.log(accounting.mostRecentReport)
// accounting.printReports();
// //console.log(accounting.mostRecentReport)

// //*********************************//*********************************

// const it = new ITDepartment("D3", ["Maddy", "Mahesh", "Nick"]);
// it.describe();
// it.addAndPrintEmployeeName("Madhavan");
// it.addAndPrintEmployeeName("Arjun");
// it.printAdminNames();
