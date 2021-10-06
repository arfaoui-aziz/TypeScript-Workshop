type Combinable1 = string | number;

const logger = (n1: Combinable1, n2: Combinable1) => {
  if (typeof n1 === "string" || typeof n2 === "string") {
    return n1.toString() + n2.toString();
  }
  return n1 + n2;
};

type Admin1 = { name: string; privileges: string[] };

type Employee1 = { name: string; startDate: Date };

type unknownEmp = Admin1 | Employee1;

const printEmployeeInfo = (emp: unknownEmp) => {
  if ("privileges" in emp) {
    console.log("admin " + emp.privileges);
  } else {
    console.log("emp:", emp.startDate);
  }
};

class Car {
  drive() {
    console.log("Driving ...");
  }
}

class Truck {
  drive() {
    console.log("Driving Truck");
  }
  loadCargo(amount: number) {
    console.log("Loading cargo ..." + amount);
  }
}

const car = new Car();
const truck = new Truck();

const driveInfo = (ins) => {
  if (ins instanceof Car) {
    ins.drive();
  } else {
    ins.loadCargo(100);
  }
};
