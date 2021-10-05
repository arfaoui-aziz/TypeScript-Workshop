abstract class Department {
  /* name: string;
  private readonly id: string;
  protected employees: string[] = [];

  constructor(id: string, n: string, employees: string) {
    this.name = n;
    this.id = id;
  }
*/

  //! Shorthand initialization
  constructor(private readonly id: string, public name: string) {}

  //this: Department => so we can pass only Department instances
  describe(this: Department) {
    console.log(` Departement ${this.id}-${this.name}`);
  }

  abstract log(this: Department): void;
}

// const dep = new Department("12a", "info");

//? Inheritance

class ITDepartment extends Department {
  private lastReport: string;
  static fiscalYear = 2021;
  get lastReportt() {
    return this.lastReport;
  }
  constructor(id: string, private admins: string[]) {
    super(id, "IT");
  }
  log() {}
}

const it = new ITDepartment("d2", []);

console.log(it.lastReportt);
console.log(ITDepartment.fiscalYear);

//Singleton + private constructor

class AccountingDepartement {
  private static instance: AccountingDepartement;

  private constructor(private id: string, private admins: string[]) {}

  static getInstance() {
    if (AccountingDepartement.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartement("ad4", ["aziz"]);
    return this.instance;
  }
}
