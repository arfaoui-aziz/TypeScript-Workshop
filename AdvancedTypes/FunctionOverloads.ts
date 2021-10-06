type Combinable2 = string | number;

function add(n1: number, n2: number): number;
function add(n1: string, n2: string): string;
function add(n1: Combinable2, n2: Combinable2) {
  if (typeof n1 === "string" || typeof n2 === "string") {
    return n1.toString() + n2.toString();
  }
  return n1 + n2;
}

const result = add("aziz", "arf");

//doesn't work because result is of type Combinable & split work only on string
result.split(" ");
