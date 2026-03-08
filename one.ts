// More Utilities
// Omit
// Excluded
// Extract
// NonNullable
// Record

// interface childrensData {
//     childName: string,
//     childNumber:number,
//     childAddress:string,
//     childId:number,
//     childParents: string
// }

// var removing:Omit<childrensData,'childId' |'childParents'>={
//     childName:'Sarada',
//     childNumber:34343,
//     childAddress:'koramangala'
// }
// console.log(removing)

// type studentReview = "pass" | 'failed' |'low grade' | 'topper' |'average'

// var student1:Exclude<studentReview,'failed' >='average'
// console.log(student1)

// var student2:Extract<studentReview, 'topper'|'average'> = 'topper'
// console.log(student2)

// type studentValues = 'passing'|'passedout'| null |undefined
// var anotherOne:NonNullable<studentValues> = 'passedout'

// console.log(anotherOne)

// type companyRoles = 'Employee' | 'Interns' | 'TeamLead' |'AssistantM'
// var namesofRoles:Record<companyRoles,string>={
//     Employee :'Suresh',
//     Interns:'Ganga',
//     TeamLead : 'Sarath',
//     AssistantM:'Rajat'
// }

// console.log(namesofRoles)

// namespace in typscript

// namespace NamesSpaceExample {
//   export class One {
//     login() {
//       console.log("You are logged in bro");
//     }
//   }
//   export function getData() {
//     console.log("Hello buddy this is the list of data");
//   }
// }

// var t1 = new NamesSpaceExample.One()
// t1.login()
// NamesSpaceExample.getData()

// decorators in typescript 

// function classLogger(constructor: Function) {
//     console.log((constructor as any).name)
// }
// function getKeys(target:any,key:any){
//     console.log(key)
// }
// @classLogger
// class CustomMaths{
//     @getKeys
//     value1:number;
//     value2:number;
//     constructor(x:number,y:number){
//         this.value1 = x;
//         this.value2 = y;
//     }
// }

// Override Functions
// const updatedSum: MethodDecorator = (
//   target: Object,
//   propertyKey: string | symbol,
//   descriptor: PropertyDescriptor
// ) => {
//     descriptor.value = function (x: number, y: number) {
//         return `The output of the following sum is ${x + y}`
//     }
// }

// class CustomMaths {
//     @updatedSum error is coming here
//     sum(x: number, y: number) {
//         return x + y
//     }
// }
// const obj = new CustomMaths()
// console.log(obj.sum(5, 10))
function one(): Promise<string> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Hello World')
        }, 2000)
    })
}

one().then(console.log)

