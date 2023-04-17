// Primitives
// null and undefined are primitives too

let age: number;

age = 12;

let userName: string | string[];

userName = 'Adi';

let isLoggedIn: boolean | undefined;

isLoggedIn = true;

// Base types or type alias
type Person = {
    name: string,
    age: number,
    isEmployee?: boolean | undefined
}

// Objects and array of objects
let persons: Person[];

persons = [{
    name: 'Adi',
    age: 32
}, {
    name: 'Max',
    age: 32,
    isEmployee: true
}]

// Type inference - use it whenever possible
let course = 'React - The Complete Guide'; // REDUNDANT: let course: string = 'React - The Complete Guide'

// Functions

function add(a: number, b: number): number {
    return a + b;
}

function printOutput(value: any): void {
    console.log(value)

}

// Generics
function insertAtBeggining<T>(array: T[], value: T) {
    const newArray = [value, ...array]
    return newArray;
}

const demoArray = [1, 2, 3]
const udpatedArray = insertAtBeggining(demoArray, -1) // [-1, 1,2,3,]
const stringArray  =insertAtBeggining(['a', 'b', 'c'], 'y');

// more theory on generics
let numbers = [1,2,3]; // - here we dont' need to specify the type as we rely on type inference.
// But, if we want to explicitly set a type, we coluld do it like this
let numbers2: Array<number> = [1,2,3]


// required by compliation
export {}

