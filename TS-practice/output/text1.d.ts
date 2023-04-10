declare function add(x: number, y: number, z?: number): number;
declare let result: number;
declare const add2: (x: number, y: number, z?: number) => number;
declare const add3: (x: number, y: number, z: number) => number;
declare enum Direction {
    Up = 0,
    Down = 1,
    Left = 2,
    Right = "RIGHT"
}
declare function echo<T>(arg: T): T;
declare const str: string;
declare const results: string;
declare const results1 = 123;
declare const results2 = true;
declare function swap<T, U>(tuple: [T, U]): [U, T];
declare const results3: [number, string];
declare function echoWithArr<T>(arg: T[]): T[];
declare const arrs: number[];
interface IwithLength {
    length: number;
}
declare function echoWithLength<T extends IwithLength>(arg: T): T;
declare const strss = "str";
declare const obj: {
    length: number;
    width: number;
};
declare const arr2: number[];
declare class Queue<T> {
    private data;
    push(item: T): number;
    pop(): T;
}
declare const queue: Queue<number>;
declare const queue2: Queue<string>;
interface KeyPair<T, U> {
    key: T;
    value: U;
}
declare let kp1: KeyPair<number, string>;
declare let kp2: KeyPair<string, number>;
declare let arr: number[];
declare let arrTwo: Array<number>;
declare let arr1: number[];
declare let arrTwo1: Array<number>;
interface IPlus<T> {
    (a: T, b: T): T;
}
interface IPlus2<T> {
    (a: T, b: T): T;
}
declare function plus(a: number, b: number): number;
declare function connect(a: string, b: string): string;
declare const a: IPlus<number>;
declare const b: IPlus<string>;
type PlusType = (x: number, y: number) => number;
declare function sum1(x: number, y: number): number;
declare const sum2: (x: number, y: number) => number;
declare const sum3: PlusType;
type NameResolver = () => string;
type NameOrResover = string | NameResolver;
declare function getName(n: NameResolver): string;
declare function getLength(input: string | number): number;
declare const a1: Array<number>;
declare const date: Date;
declare const reg: RegExp;
declare let body: HTMLElement;
declare let allLis2: NodeListOf<HTMLLIElement>;
interface IPerson {
    name: string;
    age: number;
}
declare let viking: IPerson;
type IPartial = Partial<IPerson>;
declare let vking2: IPartial;
type IOmit = Omit<IPerson, 'name'>;
declare let viking3: IOmit;
declare const aa: Array<number>;
declare const date2: Date;
declare const reg2: RegExp;
declare let body2: HTMLElement;
declare let allLis4: NodeListOf<HTMLLIElement>;
