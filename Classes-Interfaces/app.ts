class Department {
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
}

const dep = new Department("12a", "info");

//? Inheritance

class ITDepartment extends Department {
  private lastReport: string;
  get lastReportt() {
    return this.lastReport;
  }
  constructor(id: string, private admins: string[]) {
    super(id, "IT");
  }
}

const it = new ITDepartment("d2", []);

console.log(it.lastReportt);
