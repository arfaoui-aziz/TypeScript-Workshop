var role = [2, "admin"];
role[1] = "user"; //*valid
role[1] = 3; //! ERROR
role = [2, "admin", "user"]; //!ERROR max length 2
role.push("user"); //? push() doesn't generate an ERROR
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
console.log(Role.ADMIN);
