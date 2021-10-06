type Admin = { name: string; privileges: string[] };

type Employee = { name: string; startDate: Date };

type ElevatedEmployee = Admin & Employee;

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;
