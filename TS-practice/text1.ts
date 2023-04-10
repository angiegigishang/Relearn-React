function add(x: number, y: number, z: number = 10): number {
   if (typeof z === 'number') {
     return x + y + z
   } else {
      return x + y 
   }
 }
 
 let result = add(2, 3, 5)

 const add2 = function(x: number, y: number, z:number = 10): number {
    if (typeof z === 'number') {
        return  x + y + z
    } else {
        return x + y
    }
 }

 const add3: (x: number, y: number, z: number) => number = add2

enum Direction {
    Up,
    Down,
    Left ,
    Right = "RIGHT"
}
// const value = 'UP'
// if (value === Direction.Up) {
//     console.log('go up!')
// }

function echo<T>(arg: T): T {
    return arg
}
const str: string = 'str'
const results = echo(str)
const results1 = echo(123)
const results2 = echo(true)

function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]]
}
const results3 = swap(['string', 123])
results3[1].concat

function echoWithArr<T>(arg: T[]): T[] {
    console.log(arg.length)
    return arg
}
const arrs= echoWithArr([1,2,3])

interface IwithLength {
    length: number
}

function echoWithLength<T extends IwithLength>(arg: T):T {
    console.log(arg.length)
    return arg
}

const strss = echoWithLength('str')
const obj = echoWithLength({ length: 10, width: 10 })
const arr2 = echoWithLength([1, 2, 3])

class Queue<T> {
    private data = [];
    push(item: T) {
        return this.data.push(item)
    }
    pop():T {
        return this.data.shift()
    }
}

const queue = new Queue<number>()
queue.push(1)
console.log(queue.pop().toFixed())
console.log(queue.pop().toFixed())

const queue2 = new Queue<string>()
queue2.push('str')
console.log(queue2.pop().length)

interface KeyPair<T, U> {
    key: T;
    value: U
}
let kp1: KeyPair<number, string> = { key: 1, value: 'str' }
let kp2: KeyPair<string,number> = { key: 'text', value: 23 }

let arr: number[] = [1, 2, 3]
let arrTwo: Array<number> = [1, 2, 3]

let arr1: number[] = [1,2,3]
let arrTwo1: Array<number> = [1, 2, 3]

interface IPlus<T> {
    (a: T, b: T): T
}

interface IPlus2<T> {
    (a: T, b: T): T
}
function plus(a: number, b: number): number {
    return a + b
}
function connect(a: string, b: string): string {
    return a + b
}
const a: IPlus<number> = plus
const b: IPlus<string> = connect


type PlusType = (x: number, y: number) => number

function sum1(x: number, y: number): number {
    return x + y
}
const sum2: (x: number, y: number) => number = sum1
const sum3: PlusType = sum1;

type NameResolver = () => string
type NameOrResover = string | NameResolver
function getName(n: NameResolver): string {
    if(typeof n === 'string') {
        return n
    } else {
        return n()
    }
}

function getLength(input: string | number): number {
    // const str = input as String
    // if (str.length) {
    //     return str.length
    // } else {
    //     const number = input as Number
    //     return number.toString().length
    // }
    if((<string>input).length) {
        return (<string>input).length
    } else {
        return input.toString().length
    }
}

const a1: Array<number> = [1, 2, 3]
const date = new Date()
date.getTime()
const reg = /abc/
reg.test('abc')
Math.pow(2, 2)

//DOM and BOM
let body = document.body
let allLis2 = document.querySelectorAll('li')
//allLis2.keys()
document.addEventListener('click', (e) => {
    e.preventDefault
})

interface IPerson {
    name: string,
    age: number
}
let viking: IPerson = { name: 'viking', age: 20 }
type IPartial = Partial<IPerson>
let vking2: IPartial = { name: 'sdf'}
type IOmit = Omit<IPerson, 'name'>
let viking3: IOmit = { age: 20 }

//global objects
const aa: Array<number> = [1, 2, 3]
const date2 = new Date()
date2.getTime()
const reg2 = /abc/
reg.test('abc')

//build-in objects
Math.pow(2, 3)

//DOM and BOM
let body2 = document.body
let allLis4 = document.querySelectorAll('li')
////allLis4.keys()

document.addEventListener('click', (e) => {
    e.preventDefault()
})
