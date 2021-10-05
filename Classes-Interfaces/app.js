var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = /** @class */ (function () {
    /* name: string;
    private readonly id: string;
    protected employees: string[] = [];
  
    constructor(id: string, n: string, employees: string) {
      this.name = n;
      this.id = id;
    }
  */
    //! Shorthand initialization
    function Department(id, name) {
        this.id = id;
        this.name = name;
    }
    //this: Department => so we can pass only Department instances
    Department.prototype.describe = function () {
        console.log(" Departement " + this.id + "-" + this.name);
    };
    return Department;
}());
var dep = new Department("12a", "info");
//? Inheritance
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        var _this = _super.call(this, id, "IT") || this;
        _this.admins = admins;
        return _this;
    }
    Object.defineProperty(ITDepartment.prototype, "lastReportt", {
        get: function () {
            return this.lastReport;
        },
        enumerable: false,
        configurable: true
    });
    return ITDepartment;
}(Department));
var it = new ITDepartment("d2", []);
console.log(it.lastReportt);
