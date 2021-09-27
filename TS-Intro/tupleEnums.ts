let role: [number, string] = [2, "admin"];

role[1] = "user"; //*valid
role[1] = 3; //! ERROR

role = [2, "admin", "user"]; //!ERROR max length 2

role.push("user"); //? push() doesn't generate an ERROR

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}


console.log(Role.ADMIN)