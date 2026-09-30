"use strict";
// var userName:string = 'Shaik Munsheer'
// console.log(userName)
// // Here we are installed typescript locally.
// let age:number = 34
// console.log(age)
// let address:string = 'Nellore'
// console.log(address)
// Data Types in Type Script
// Primitive
// Object
// Special datatype
// advanced datatype
// function datatype
// Primitive Data types
// number
// string
// boolean
// null
// undefined
// bigint
// symbol
// var a:number = 45
// var b:string = 'Hello'
// let c :boolean = true
// let d: null = null
// let e:undefined = undefined
// let bigNumber: bigint = 123456789012345678901234567890n;
// console.log(bigNumber);
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)
// OBJECT TYPES
// Array
// Tuple
// Object
// let numbers:number[] = [1,2,3,4,5]
// console.log(numbers)
// let names:Array<String> = ['Hello','Bhai','Good afternoon']
// console.log(names)
// let booleans:Array<Boolean> = [true,false,true,false]
// console.log(booleans)
// let multiple_values : [string,null,number] =['Hello',null,67]
// console.log(multiple_values)
// let objects:{name:string,age:number} = {name:'Davood',age:23}
// console.log(objects)
// SPECIAL DATA TYPES IN TYPESCRIPT
// any
// unknown
// void
// never
// let a: any;
// a = 45
// a=56
// console.log(a)
// let b:unknown;
// b=67
// if(typeof b ==='number')  console.log(b)
// function one ():void{
//     console.log('Hello badsha')
// }
// one()
// function two():never{
//     throw new Error ("Something went wrong")
// }
// two()
// ADVANCED TYPES
// union
// typeAlias
// intersection
// Enum
// literaltypes
// let a:number|string = 'name'
// console.log(a)
// type Id = string | number
// let b : Id = 67
// console.log(b)
// enum Role {
//     student,
//     parent,
//     brother
// }
// let c : Role = Role.student
// console.log(c)
// let direction : "up" | "down";
// direction = 'up'
// console.log(direction)
// NUMBER DATAT TYPES IN TYPESCRIPTa
// var a:number = 13
// var b:string = "50"
// var c=Number(b)
// console.log(a+c)
// var a:number | string = 'Devarada'
// console.log(a)
// let value1 = 100
// console.log(value1)
// STRING DATA TYPE IN TYPESCRIPT
// var a:string = 'Hello'
// var b:string = a.toString()
// console.log(a+b)
// Boolean Data types in typescript
// var a:boolean = true
// var b:boolean = false
// console.log(a)
// console.log(b)
// interface cData {
//     sName:string,
//     sRoll:string,
//     sAge:number
// }
// var student1:cData ={
//     sName :'Raju',
//     sRoll : '3F45',
//     sAge:45
// }
// console.log(student1)
// TYPE IN TYPESCRIPT
// type studentsData = {name:string,age:number,address:string}
// type moreData = {rollNu:number,Idnum:number,percentageg:string}
// type alldata = studentsData & moreData
// var studentInfo:studentsData ={
//     name:'Ram',
//     age:34,
//     address:'Banglore'
// }
// console.log(studentInfo)
// var student2Info:alldata ={
//     name:'Rose',
//     age:23,
//     address:'Chennai',
//     rollNu:112,
//     Idnum:34,
//     percentageg:"45%"
// }
// console.log(student2Info)
// OOPS in Typescript Buddy
// class Product {
//     private productName:string;
//     protected productPrice:number;
//     constructor(productName:string,productPrice:number){
//         this.productName = productName
//         this.productPrice = productPrice
//     }
//     getOrder(){
//         console.log("Your ordered this ",this.productName,"with this",this.productPrice)
//     }
//     onlyForPrivate(){
//         console.log(this.productName)
//     }
// }
// var obj1 = new Product('Apple',1000)
// obj1.getOrder()
// var order2 = new Product('Banana',45)
// order2.getOrder()
// // console.log(order2.productName)
// console.log(order2.productPrice)
// order2.onlyForPrivate()
// class ChildProducts extends Product{
//     getProtected(){
//         console.log(this.productPrice)
//     }
// }
// var ob1 = new ChildProducts("Mango",65)
// ob1.getProtected()
// INHERITANCE IN TYPSCRIPT
// class Logins {
//       login(name:string,password:string){
//         if(name && password){
//             console.log('Your are Logged In')
//         }
//         else{
//             console.log('Login Failed')
//         }
//     }
// }
// class Student extends Logins {
//     percentage(marks:number){
//         if (marks>50) console.log('80%'); else console.log('you are Failed')
//     }
// }
// class Teacher extends Logins {
//     teachingSubject(subject:string){
//         console.log('This teacher is teaching this subject',subject)
//     }
// }
// var s1 = new Student()
// s1.login('Raju','raju@123')
// s1.percentage(56)
// var t1 = new Teacher()
// t1.login('SAMALA','SKDH98')
// t1.teachingSubject('Mathematics')
// Interface with class
// interface ForStudent {
//     teacherName:string
//     getDetails(): void;
// }
// class Student  implements ForStudent{
//     teacherName : string
//     constructor(teacherName:string){
//         this.teacherName = teacherName
//     }
//     getName(){
//         console.log(this.teacherName)
//     }
//     getDetails(): void {
//         console.log('Hello buddy I am implements ForStudent')
//     }
// }
// var st1 = new Student('Amritha')
// st1.getDetails()
// st1.getName()
// TypeGuards in Typescript
// function one(age: number | string) {
//   if (typeof age == "number") {
//     console.log("This is the number age ");
//   } else {
//     console.log("This is a string age ");
//   }
// }
// one(45)
// instanceof()
// class One{
// }
// var a1 = new One()
// class Two {
// }
// var a2 = new Two()
// function newData(data:One |Two){
//     if (data instanceof One)
//     console.log('The is a good one bro');else console.log('Not one')
// }
// newData('hello')
// INDEX SIGNATURE IN TYPESCRIPT
// CASE -1
// type anyData ={
//     [key:string]:number 
// }
// let students:anyData={
//     studentiD:9830943,
//     age:45,
//     mob:3434342,
//     place:908,
// }
// console.log(students)
// CASE -2
// type anyData ={
//     [key:string]:number |string
// }
// let students:anyData={
//     studentiD:9830943,
//     age:45,
//     mob:3434342,
//     place:908,
//     studentName:'Rajesh'
// }
// console.log(students)
// CASE -3
// type anyData ={
//     studentID :number,
//     studentName:string
//     [key:string]:number |string
// }
// let students:anyData={
//      studentID:9830943,
//     studentName:'Rajesh',
//     age:45,
//     mob:3434342,
//     place:908
// }
// console.log(students)
// CASE -4
// type anyData ={
//     studentID :number,
//     studentName:string
//     readonly [key:string]:number |string
// }
// let students:anyData={
//      studentID:9830943,
//     studentName:'Rajesh',
//     age:45,
//     mob:3434342,
//     place:908
// }
// console.log(students)
// UTILITY TYPES IN TYPESCRIPT
// Partial
// interface CollegeType{
//     name1:string,
//     location:string,
//     students:number,
//     branch:string
// }
// let collegeData:Partial<CollegeType>={
//     name1:"iit delhi",
//     location:'Nellore'
// }
// console.log(collegeData)
//Required
// interface CollegeType{
//     name1:string,
//     location:string,
//     students:number,
//     branch?:string
// }
// function one(data:Required<CollegeType>){
//     return data
// }
// let veo = one({name1:'IITK',location:'HYD',students:564,branch:'CSE'})
// console.log(veo)
// readonly
// interface employeeData {
//     readonly empName:string,
//     empId:number,
//     empAddress:string,
//     empSalary:number
// }
// let emp1:employeeData={
//     empName:'EmployeeOne',
//     empId:34,
//     empAddress:'Bangalore',
//     empSalary:50000
// }
// emp1.empName = 'Rahul'
// console.log(emp1)
// utility Properties in typescript
// Partial<interfaceName>
// Required<interfaceName>
// readonly<interfaceName>
// pick<interfaceName>
// interface employeeInfo {
//     empsId : string,
//     empsName:string,
//     empsAddress:string,
//     empsSalary:number,
//     empsNumber:number
// }
// let valEmpInfo:Partial<employeeInfo> = {
//     empsId:'@123',
//     empsName:'Suresh',
//     empsAddress:'Bangalore',
//     // empsSalary:5000,
//     // empsNumber:8786
// }
// console.log(valEmpInfo)
// Required
// interface employeeInfo {
//     empsId : string,
//     empsName:string,
//     empsAddress:string,
//     empsSalary ?:number,
//     empsNumber:number
// }
// let valEmpInfo:Required<employeeInfo> = {
//     empsId:'@123',
//     empsName:'Suresh',
//     empsAddress:'Bangalore',
//     empsSalary:5000,
//     empsNumber:8786
// }
// console.log(valEmpInfo)
// function newfun(data:employeeInfo){
//     return data
// }
// console.log(newfun)
// Readonly
// interface employeeInfo {
//     empsId : string,
//     empsName:string,
//     empsAddress:string,
//     empsSalary ?:number,
//     empsNumber:number
// }
// let valEmpInfo:Readonly<employeeInfo> = {
//     empsId:'@123',
//     empsName:'Suresh',
//     empsAddress:'Bangalore',
//     empsSalary:5000,
//     empsNumber:8786
// }
// valEmpInfo.empsAddress='Ind' //Not possible here to change the value becouse here we are using Readonly.
// interface employeeInfo {
//     empsId : string,
//     empsName:string,
//     empsAddress:string,
//     empsSalary :number,
//     empsNumber:number
// }
// let valEmpInfo:Pick<employeeInfo,'empsId'|'empsName' > = {
//     empsId:'@34323',
//     empsName:'Ramesh',
// }
// console.log(valEmpInfo)
"use strict";
// var userName:string = 'Shaik Munsheer'
// console.log(userName)
// // Here we are installed typescript locally.
// let age:number = 34
// console.log(age)
// let address:string = 'Nellore'
// console.log(address)
// Data Types in Type Script
// Primitive
// Object
// Special datatype
// advanced datatype
// function datatype
// Primitive Data types
// number
// string
// boolean
// null
// undefined
// bigint
// symbol
// var a:number = 45
// var b:string = 'Hello'
// let c :boolean = true
// let d: null = null
// let e:undefined = undefined
// let bigNumber: bigint = 123456789012345678901234567890n;
// console.log(bigNumber);
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)
// OBJECT TYPES
// Array
// Tuple
// Object
// let numbers:number[] = [1,2,3,4,5]
// console.log(numbers)
// let names:Array<String> = ['Hello','Bhai','Good afternoon']
// console.log(names)
// let booleans:Array<Boolean> = [true,false,true,false]
// console.log(booleans)
// let multiple_values : [string,null,number] =['Hello',null,67]
// console.log(multiple_values)
// let objects:{name:string,age:number} = {name:'Davood',age:23}
// console.log(objects)
// SPECIAL DATA TYPES IN TYPESCRIPT
// any
// unknown
// void
// never
// let a: any;
// a = 45
// a=56
// console.log(a)
// let b:unknown;
// b=67
// if(typeof b ==='number')  console.log(b)
// function one ():void{
//     console.log('Hello badsha')
// }
// one()
// function two():never{
//     throw new Error ("Something went wrong")
// }
// two()
// ADVANCED TYPES
// union
// typeAlias
// intersection
// Enum
// literaltypes
// let a:number|string = 'name'
// console.log(a)
// type Id = string | number
// let b : Id = 67
// console.log(b)
// enum Role {
//     student,
//     parent,
//     brother
// }
// let c : Role = Role.student
// console.log(c)
// let direction : "up" | "down";
// direction = 'up'
// console.log(direction)
// NUMBER DATAT TYPES IN TYPESCRIPTa
// var a:number = 13
// var b:string = "50"
// var c=Number(b)
// console.log(a+c)
// var a:number | string = 'Devarada'
// console.log(a)
// let value1 = 100
// console.log(value1)
// STRING DATA TYPE IN TYPESCRIPT
// var a:string = 'Hello'
// var b:string = a.toString()
// console.log(a+b)
// Boolean Data types in typescript
// var a:boolean = true
// var b:boolean = false
// console.log(a)
// console.log(b)
// interface cData {
//     sName:string,
//     sRoll:string,
//     sAge:number
// }
// var student1:cData ={
//     sName :'Raju',
//     sRoll : '3F45',
//     sAge:45
// }
// console.log(student1)
// TYPE IN TYPESCRIPT
// type studentsData = {name:string,age:number,address:string}
// type moreData = {rollNu:number,Idnum:number,percentageg:string}
// type alldata = studentsData & moreData
// var studentInfo:studentsData ={
//     name:'Ram',
//     age:34,
//     address:'Banglore'
// }
// console.log(studentInfo)
// var student2Info:alldata ={
//     name:'Rose',
//     age:23,
//     address:'Chennai',
//     rollNu:112,
//     Idnum:34,
//     percentageg:"45%"
// }
// console.log(student2Info)
// OOPS in Typescript Buddy
// class Product {
//     private productName:string;
//     protected productPrice:number;
//     constructor(productName:string,productPrice:number){
//         this.productName = productName
//         this.productPrice = productPrice
//     }
//     getOrder(){
//         console.log("Your ordered this ",this.productName,"with this",this.productPrice)
//     }
//     onlyForPrivate(){
//         console.log(this.productName)
//     }
// }
// var obj1 = new Product('Apple',1000)
// obj1.getOrder()
// var order2 = new Product('Banana',45)
// order2.getOrder()
// // console.log(order2.productName)
// console.log(order2.productPrice)
// order2.onlyForPrivate()
// class ChildProducts extends Product{
//     getProtected(){
//         console.log(this.productPrice)
//     }
// }
// var ob1 = new ChildProducts("Mango",65)
// ob1.getProtected()
// INHERITANCE IN TYPSCRIPT
// class Logins {
//       login(name:string,password:string){
//         if(name && password){
//             console.log('Your are Logged In')
//         }
//         else{
//             console.log('Login Failed')
//         }
//     }
// }
// class Student extends Logins {
//     percentage(marks:number){
//         if (marks>50) console.log('80%'); else console.log('you are Failed')
//     }
// }
// class Teacher extends Logins {
//     teachingSubject(subject:string){
//         console.log('This teacher is teaching this subject',subject)
//     }
// }
// var s1 = new Student()
// s1.login('Raju','raju@123')
// s1.percentage(56)
// var t1 = new Teacher()
// t1.login('SAMALA','SKDH98')
// t1.teachingSubject('Mathematics')
// Interface with class
// interface ForStudent {
//     teacherName:string
//     getDetails(): void;
// }
// class Student  implements ForStudent{
//     teacherName : string
//     constructor(teacherName:string){
//         this.teacherName = teacherName
//     }
//     getName(){
//         console.log(this.teacherName)
//     }
//     getDetails(): void {
//         console.log('Hello buddy I am implements ForStudent')
//     }
// }
// var st1 = new Student('Amritha')
// st1.getDetails()
// st1.getName()
// TypeGuards in Typescript
// function one(age: number | string) {
//   if (typeof age == "number") {
//     console.log("This is the number age ");
//   } else {
//     console.log("This is a string age ");
//   }
// }
// one(45)
// instanceof()
// class One{
// }
// var a1 = new One()
// class Two {
// }
// var a2 = new Two()
// function newData(data:One |Two){
//     if (data instanceof One)
//     console.log('The is a good one bro');else console.log('Not one')
// }
// newData('hello')
// INDEX SIGNATURE IN TYPESCRIPT
// CASE -1
// type anyData ={
//     [key:string]:number 
// }
// let students:anyData={
//     studentiD:9830943,
//     age:45,
//     mob:3434342,
//     place:908,
// }
// console.log(students)
// CASE -2
// type anyData ={
//     [key:string]:number |string
// }
// let students:anyData={
//     studentiD:9830943,
//     age:45,
//     mob:3434342,
//     place:908,
//     studentName:'Rajesh'
// }
// console.log(students)
// CASE -3
// type anyData ={
//     studentID :number,
//     studentName:string
//     [key:string]:number |string
// }
// let students:anyData={
//      studentID:9830943,
//     studentName:'Rajesh',
//     age:45,
//     mob:3434342,
//     place:908
// }
// console.log(students)
// CASE -4
// type anyData ={
//     studentID :number,
//     studentName:string
//     readonly [key:string]:number |string
// }
// let students:anyData={
//      studentID:9830943,
//     studentName:'Rajesh',
//     age:45,
//     mob:3434342,
//     place:908
// }
// console.log(students)
// UTILITY TYPES IN TYPESCRIPT
// Partial
// interface CollegeType{
//     name1:string,
//     location:string,
//     students:number,
//     branch:string
// }
// let collegeData:Partial<CollegeType>={
//     name1:"iit delhi",
//     location:'Nellore'
// }
// console.log(collegeData)
//Required
// interface CollegeType{
//     name1:string,
//     location:string,
//     students:number,
//     branch?:string
// }
// function one(data:Required<CollegeType>){
//     return data
// }
// let veo = one({name1:'IITK',location:'HYD',students:564,branch:'CSE'})
// console.log(veo)
// readonly
// interface employeeData {
//     readonly empName:string,
//     empId:number,
//     empAddress:string,
//     empSalary:number
// }
// let emp1:employeeData={
//     empName:'EmployeeOne',
//     empId:34,
//     empAddress:'Bangalore',
//     empSalary:50000
// }
// emp1.empName = 'Rahul'
// console.log(emp1)
// utility Properties in typescript
// Partial<interfaceName>
// Required<interfaceName>
// readonly<interfaceName>
// pick<interfaceName>
// interface employeeInfo {
//     empsId : string,
//     empsName:string,
//     empsAddress:string,
//     empsSalary:number,
//     empsNumber:number
// }
// let valEmpInfo:Partial<employeeInfo> = {
//     empsId:'@123',
//     empsName:'Suresh',
//     empsAddress:'Bangalore',
//     // empsSalary:5000,
//     // empsNumber:8786
// }
// console.log(valEmpInfo)
// Required
// interface employeeInfo {
//     empsId : string,
//     empsName:string,
//     empsAddress:string,
//     empsSalary ?:number,
//     empsNumber:number
// }
// let valEmpInfo:Required<employeeInfo> = {
//     empsId:'@123',
//     empsName:'Suresh',
//     empsAddress:'Bangalore',
//     empsSalary:5000,
//     empsNumber:8786
// }
// console.log(valEmpInfo)
// function newfun(data:employeeInfo){
//     return data
// }
// console.log(newfun)
// Readonly
// interface employeeInfo {
//     empsId : string,
//     empsName:string,
//     empsAddress:string,
//     empsSalary ?:number,
//     empsNumber:number
// }
// let valEmpInfo:Readonly<employeeInfo> = {
//     empsId:'@123',
//     empsName:'Suresh',
//     empsAddress:'Bangalore',
//     empsSalary:5000,
//     empsNumber:8786
// }
// valEmpInfo.empsAddress='Ind' //Not possible here to change the value becouse here we are using Readonly.
// interface employeeInfo {
//     empsId : string,
//     empsName:string,
//     empsAddress:string,
//     empsSalary :number,
//     empsNumber:number
// }
// let valEmpInfo:Pick<employeeInfo,'empsId'|'empsName' > = {
//     empsId:'@34323',
//     empsName:'Ramesh',
// }
// console.log(valEmpInfo)
"use strict";
// var userName:string = 'Shaik Munsheer'
// console.log(userName)
// // Here we are installed typescript locally.
// let age:number = 34
// console.log(age)
// let address:string = 'Nellore'
// console.log(address)
// Data Types in Type Script
// Primitive
// Object
// Special datatype
// advanced datatype
// function datatype
// Primitive Data types
// number
// string
// boolean
// null
// undefined
// bigint
// symbol
// var a:number = 45
// var b:string = 'Hello'
// let c :boolean = true
// let d: null = null
// let e:undefined = undefined
// let bigNumber: bigint = 123456789012345678901234567890n;
// console.log(bigNumber);
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)
// OBJECT TYPES
// Array
// Tuple
// Object
// let numbers:number[] = [1,2,3,4,5]
// console.log(numbers)
// let names:Array<String> = ['Hello','Bhai','Good afternoon']
// console.log(names)
// let booleans:Array<Boolean> = [true,false,true,false]
// console.log(booleans)
// let multiple_values : [string,null,number] =['Hello',null,67]
// console.log(multiple_values)
// let objects:{name:string,age:number} = {name:'Davood',age:23}
// console.log(objects)
// SPECIAL DATA TYPES IN TYPESCRIPT
// any
// unknown
// void
// never
// let a: any;
// a = 45
// a=56
// console.log(a)
// let b:unknown;
// b=67
// if(typeof b ==='number')  console.log(b)
// function one ():void{
//     console.log('Hello badsha')
// }
// one()
// function two():never{
//     throw new Error ("Something went wrong")
// }
// two()
// ADVANCED TYPES
// union
// typeAlias
// intersection
// Enum
// literaltypes
// let a:number|string = 'name'
// console.log(a)
// type Id = string | number
// let b : Id = 67
// console.log(b)
// enum Role {
//     student,
//     parent,
//     brother
// }
// let c : Role = Role.student
// console.log(c)
// let direction : "up" | "down";
// direction = 'up'
// console.log(direction)
// NUMBER DATAT TYPES IN TYPESCRIPTa
// var a:number = 13
// var b:string = "50"
// var c=Number(b)
// console.log(a+c)
// var a:number | string = 'Devarada'
// console.log(a)
// let value1 = 100
// console.log(value1)
// STRING DATA TYPE IN TYPESCRIPT
// var a:string = 'Hello'
// var b:string = a.toString()
// console.log(a+b)
// Boolean Data types in typescript
// var a:boolean = true
// var b:boolean = false
// console.log(a)
// console.log(b)
// interface cData {
//     sName:string,
//     sRoll:string,
//     sAge:number
// }
// var student1:cData ={
//     sName :'Raju',
//     sRoll : '3F45',
//     sAge:45
// }
// console.log(student1)
// TYPE IN TYPESCRIPT
// type studentsData = {name:string,age:number,address:string}
// type moreData = {rollNu:number,Idnum:number,percentageg:string}
// type alldata = studentsData & moreData
// var studentInfo:studentsData ={
//     name:'Ram',
//     age:34,
//     address:'Banglore'
// }
// console.log(studentInfo)
// var student2Info:alldata ={
//     name:'Rose',
//     age:23,
//     address:'Chennai',
//     rollNu:112,
//     Idnum:34,
//     percentageg:"45%"
// }
// console.log(student2Info)
// OOPS in Typescript Buddy
// class Product {
//     private productName:string;
//     protected productPrice:number;
//     constructor(productName:string,productPrice:number){
//         this.productName = productName
//         this.productPrice = productPrice
//     }
//     getOrder(){
//         console.log("Your ordered this ",this.productName,"with this",this.productPrice)
//     }
//     onlyForPrivate(){
//         console.log(this.productName)
//     }
// }
// var obj1 = new Product('Apple',1000)
// obj1.getOrder()
// var order2 = new Product('Banana',45)
// order2.getOrder()
// // console.log(order2.productName)
// console.log(order2.productPrice)
// order2.onlyForPrivate()
// class ChildProducts extends Product{
//     getProtected(){
//         console.log(this.productPrice)
//     }
// }
// var ob1 = new ChildProducts("Mango",65)
// ob1.getProtected()
// INHERITANCE IN TYPSCRIPT
// class Logins {
//       login(name:string,password:string){
//         if(name && password){
//             console.log('Your are Logged In')
//         }
//         else{
//             console.log('Login Failed')
//         }
//     }
// }
// class Student extends Logins {
//     percentage(marks:number){
//         if (marks>50) console.log('80%'); else console.log('you are Failed')
//     }
// }
// class Teacher extends Logins {
//     teachingSubject(subject:string){
//         console.log('This teacher is teaching this subject',subject)
//     }
// }
// var s1 = new Student()
// s1.login('Raju','raju@123')
// s1.percentage(56)
// var t1 = new Teacher()
// t1.login('SAMALA','SKDH98')
// t1.teachingSubject('Mathematics')
// Interface with class
// interface ForStudent {
//     teacherName:string
//     getDetails(): void;
// }
// class Student  implements ForStudent{
//     teacherName : string
//     constructor(teacherName:string){
//         this.teacherName = teacherName
//     }
//     getName(){
//         console.log(this.teacherName)
//     }
//     getDetails(): void {
//         console.log('Hello buddy I am implements ForStudent')
//     }
// }
// var st1 = new Student('Amritha')
// st1.getDetails()
// st1.getName()
// TypeGuards in Typescript
// function one(age: number | string) {
//   if (typeof age == "number") {
//     console.log("This is the number age ");
//   } else {
//     console.log("This is a string age ");
//   }
// }
// one(45)
// instanceof()
// class One{
// }
// var a1 = new One()
// class Two {
// }
// var a2 = new Two()
// function newData(data:One |Two){
//     if (data instanceof One)
//     console.log('The is a good one bro');else console.log('Not one')
// }
// newData('hello')
// INDEX SIGNATURE IN TYPESCRIPT
// CASE -1
// type anyData ={
//     [key:string]:number 
// }
// let students:anyData={
//     studentiD:9830943,
//     age:45,
//     mob:3434342,
//     place:908,
// }
// console.log(students)
// CASE -2
// type anyData ={
//     [key:string]:number |string
// }
// let students:anyData={
//     studentiD:9830943,
//     age:45,
//     mob:3434342,
//     place:908,
//     studentName:'Rajesh'
// }
// console.log(students)
// CASE -3
// type anyData ={
//     studentID :number,
//     studentName:string
//     [key:string]:number |string
// }
// let students:anyData={
//      studentID:9830943,
//     studentName:'Rajesh',
//     age:45,
//     mob:3434342,
//     place:908
// }
// console.log(students)
// CASE -4
// type anyData ={
//     studentID :number,
//     studentName:string
//     readonly [key:string]:number |string
// }
// let students:anyData={
//      studentID:9830943,
//     studentName:'Rajesh',
//     age:45,
//     mob:3434342,
//     place:908
// }
// console.log(students)
// UTILITY TYPES IN TYPESCRIPT
// Partial
// interface CollegeType{
//     name1:string,
//     location:string,
//     students:number,
//     branch:string
// }
// let collegeData:Partial<CollegeType>={
//     name1:"iit delhi",
//     location:'Nellore'
// }
// console.log(collegeData)
//Required
// interface CollegeType{
//     name1:string,
//     location:string,
//     students:number,
//     branch?:string
// }
// function one(data:Required<CollegeType>){
//     return data
// }
// let veo = one({name1:'IITK',location:'HYD',students:564,branch:'CSE'})
// console.log(veo)
// readonly
// interface employeeData {
//     readonly empName:string,
//     empId:number,
//     empAddress:string,
//     empSalary:number
// }
// let emp1:employeeData={
//     empName:'EmployeeOne',
//     empId:34,
//     empAddress:'Bangalore',
//     empSalary:50000
// }
// emp1.empName = 'Rahul'
// console.log(emp1)
// utility Properties in typescript
// Partial<interfaceName>
// Required<interfaceName>
// readonly<interfaceName>
// pick<interfaceName>
// interface employeeInfo {
//     empsId : string,
//     empsName:string,
//     empsAddress:string,
//     empsSalary:number,
//     empsNumber:number
// }
// let valEmpInfo:Partial<employeeInfo> = {
//     empsId:'@123',
//     empsName:'Suresh',
//     empsAddress:'Bangalore',
//     // empsSalary:5000,
//     // empsNumber:8786
// }
// console.log(valEmpInfo)
// Required
// interface employeeInfo {
//     empsId : string,
//     empsName:string,
//     empsAddress:string,
//     empsSalary ?:number,
//     empsNumber:number
// }
// let valEmpInfo:Required<employeeInfo> = {
//     empsId:'@123',
//     empsName:'Suresh',
//     empsAddress:'Bangalore',
//     empsSalary:5000,
//     empsNumber:8786
// }
// console.log(valEmpInfo)
// function newfun(data:employeeInfo){
//     return data
// }
// console.log(newfun)
// Readonly
// interface employeeInfo {
//     empsId : string,
//     empsName:string,
//     empsAddress:string,
//     empsSalary ?:number,
//     empsNumber:number
// }
// let valEmpInfo:Readonly<employeeInfo> = {
//     empsId:'@123',
//     empsName:'Suresh',
//     empsAddress:'Bangalore',
//     empsSalary:5000,
//     empsNumber:8786
// }
// valEmpInfo.empsAddress='Ind' //Not possible here to change the value becouse here we are using Readonly.
// interface employeeInfo {
//     empsId : string,
//     empsName:string,
//     empsAddress:string,
//     empsSalary :number,
//     empsNumber:number
// }
// let valEmpInfo:Pick<employeeInfo,'empsId'|'empsName' > = {
//     empsId:'@34323',
//     empsName:'Ramesh',
// }
// console.log(valEmpInfo)
"use strict";
// var userName:string = 'Shaik Munsheer'
// console.log(userName)
// // Here we are installed typescript locally.
// let age:number = 34
// console.log(age)
// let address:string = 'Nellore'
// console.log(address)
// Data Types in Type Script
// Primitive
// Object
// Special datatype
// advanced datatype
// function datatype
// Primitive Data types
// number
// string
// boolean
// null
// undefined
// bigint
// symbol
// var a:number = 45
// var b:string = 'Hello'
// let c :boolean = true
// let d: null = null
// let e:undefined = undefined
// let bigNumber: bigint = 123456789012345678901234567890n;
// console.log(bigNumber);
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)
// OBJECT TYPES
// Array
// Tuple
// Object
// let numbers:number[] = [1,2,3,4,5]
// console.log(numbers)
// let names:Array<String> = ['Hello','Bhai','Good afternoon']
// console.log(names)
// let booleans:Array<Boolean> = [true,false,true,false]
// console.log(booleans)
// let multiple_values : [string,null,number] =['Hello',null,67]
// console.log(multiple_values)
// let objects:{name:string,age:number} = {name:'Davood',age:23}
// console.log(objects)
// SPECIAL DATA TYPES IN TYPESCRIPT
// any
// unknown
// void
// never
// let a: any;
// a = 45
// a=56
// console.log(a)
// let b:unknown;
// b=67
// if(typeof b ==='number')  console.log(b)
// function one ():void{
//     console.log('Hello badsha')
// }
// one()
// function two():never{
//     throw new Error ("Something went wrong")
// }
// two()
// ADVANCED TYPES
// union
// typeAlias
// intersection
// Enum
// literaltypes
// let a:number|string = 'name'
// console.log(a)
// type Id = string | number
// let b : Id = 67
// console.log(b)
// enum Role {
//     student,
//     parent,
//     brother
// }
// let c : Role = Role.student
// console.log(c)
// let direction : "up" | "down";
// direction = 'up'
// console.log(direction)
// NUMBER DATAT TYPES IN TYPESCRIPTa
// var a:number = 13
// var b:string = "50"
// var c=Number(b)
// console.log(a+c)
// var a:number | string = 'Devarada'
// console.log(a)
// let value1 = 100
// console.log(value1)
// STRING DATA TYPE IN TYPESCRIPT
// var a:string = 'Hello'
// var b:string = a.toString()
// console.log(a+b)
// Boolean Data types in typescript
// var a:boolean = true
// var b:boolean = false
// console.log(a)
// console.log(b)
// interface cData {
//     sName:string,
//     sRoll:string,
//     sAge:number
// }
// var student1:cData ={
//     sName :'Raju',
//     sRoll : '3F45',
//     sAge:45
// }
// console.log(student1)
// TYPE IN TYPESCRIPT
// type studentsData = {name:string,age:number,address:string}
// type moreData = {rollNu:number,Idnum:number,percentageg:string}
// type alldata = studentsData & moreData
// var studentInfo:studentsData ={
//     name:'Ram',
//     age:34,
//     address:'Banglore'
// }
// console.log(studentInfo)
// var student2Info:alldata ={
//     name:'Rose',
//     age:23,
//     address:'Chennai',
//     rollNu:112,
//     Idnum:34,
//     percentageg:"45%"
// }
// console.log(student2Info)
// OOPS in Typescript Buddy
// class Product {
//     private productName:string;
//     protected productPrice:number;
//     constructor(productName:string,productPrice:number){
//         this.productName = productName
//         this.productPrice = productPrice
//     }
//     getOrder(){
//         console.log("Your ordered this ",this.productName,"with this",this.productPrice)
//     }
//     onlyForPrivate(){
//         console.log(this.productName)
//     }
// }
// var obj1 = new Product('Apple',1000)
// obj1.getOrder()
// var order2 = new Product('Banana',45)
// order2.getOrder()
// // console.log(order2.productName)
// console.log(order2.productPrice)
// order2.onlyForPrivate()
// class ChildProducts extends Product{
//     getProtected(){
//         console.log(this.productPrice)
//     }
// }
// var ob1 = new ChildProducts("Mango",65)
// ob1.getProtected()
// INHERITANCE IN TYPSCRIPT
// class Logins {
//       login(name:string,password:string){
//         if(name && password){
//             console.log('Your are Logged In')
//         }
//         else{
//             console.log('Login Failed')
//         }
//     }
// }
// class Student extends Logins {
//     percentage(marks:number){
//         if (marks>50) console.log('80%'); else console.log('you are Failed')
//     }
// }
// class Teacher extends Logins {
//     teachingSubject(subject:string){
//         console.log('This teacher is teaching this subject',subject)
//     }
// }
// var s1 = new Student()
// s1.login('Raju','raju@123')
// s1.percentage(56)
// var t1 = new Teacher()
// t1.login('SAMALA','SKDH98')
// t1.teachingSubject('Mathematics')
// Interface with class
// interface ForStudent {
//     teacherName:string
//     getDetails(): void;
// }
// class Student  implements ForStudent{
//     teacherName : string
//     constructor(teacherName:string){
//         this.teacherName = teacherName
//     }
//     getName(){
//         console.log(this.teacherName)
//     }
//     getDetails(): void {
//         console.log('Hello buddy I am implements ForStudent')
//     }
// }
// var st1 = new Student('Amritha')
// st1.getDetails()
// st1.getName()
// TypeGuards in Typescript
// function one(age: number | string) {
//   if (typeof age == "number") {
//     console.log("This is the number age ");
//   } else {
//     console.log("This is a string age ");
//   }
// }
// one(45)
// instanceof()
// class One{
// }
// var a1 = new One()
// class Two {
// }
// var a2 = new Two()
// function newData(data:One |Two){
//     if (data instanceof One)
//     console.log('The is a good one bro');else console.log('Not one')
// }
// newData('hello')
// INDEX SIGNATURE IN TYPESCRIPT
// CASE -1
// type anyData ={
//     [key:string]:number 
// }
// let students:anyData={
//     studentiD:9830943,
//     age:45,
//     mob:3434342,
//     place:908,
// }
// console.log(students)
// CASE -2
// type anyData ={
//     [key:string]:number |string
// }
// let students:anyData={
//     studentiD:9830943,
//     age:45,
//     mob:3434342,
//     place:908,
//     studentName:'Rajesh'
// }
// console.log(students)
// CASE -3
// type anyData ={
//     studentID :number,
//     studentName:string
//     [key:string]:number |string
// }
// let students:anyData={
//      studentID:9830943,
//     studentName:'Rajesh',
//     age:45,
//     mob:3434342,
//     place:908
// }
// console.log(students)
// CASE -4
// type anyData ={
//     studentID :number,
//     studentName:string
//     readonly [key:string]:number |string
// }
// let students:anyData={
//      studentID:9830943,
//     studentName:'Rajesh',
//     age:45,
//     mob:3434342,
//     place:908
// }
// console.log(students)
// UTILITY TYPES IN TYPESCRIPT
// Partial
// interface CollegeType{
//     name1:string,
//     location:string,
//     students:number,
//     branch:string
// }
// let collegeData:Partial<CollegeType>={
//     name1:"iit delhi",
//     location:'Nellore'
// }
// console.log(collegeData)
//Required
// interface CollegeType{
//     name1:string,
//     location:string,
//     students:number,
//     branch?:string
// }
// function one(data:Required<CollegeType>){
//     return data
// }
// let veo = one({name1:'IITK',location:'HYD',students:564,branch:'CSE'})
// console.log(veo)
// readonly
// interface employeeData {
//     readonly empName:string,
//     empId:number,
//     empAddress:string,
//     empSalary:number
// }
// let emp1:employeeData={
//     empName:'EmployeeOne',
//     empId:34,
//     empAddress:'Bangalore',
//     empSalary:50000
// }
// emp1.empName = 'Rahul'
// console.log(emp1)
// utility Properties in typescript
// Partial<interfaceName>
// Required<interfaceName>
// readonly<interfaceName>
// pick<interfaceName>
// interface employeeInfo {
//     empsId : string,
//     empsName:string,
//     empsAddress:string,
//     empsSalary:number,
//     empsNumber:number
// }
// let valEmpInfo:Partial<employeeInfo> = {
//     empsId:'@123',
//     empsName:'Suresh',
//     empsAddress:'Bangalore',
//     // empsSalary:5000,
//     // empsNumber:8786
// }
// console.log(valEmpInfo)
// Required
// interface employeeInfo {
//     empsId : string,
//     empsName:string,
//     empsAddress:string,
//     empsSalary ?:number,
//     empsNumber:number
// }
// let valEmpInfo:Required<employeeInfo> = {
//     empsId:'@123',
//     empsName:'Suresh',
//     empsAddress:'Bangalore',
//     empsSalary:5000,
//     empsNumber:8786
// }
// console.log(valEmpInfo)
// function newfun(data:employeeInfo){
//     return data
// }
// console.log(newfun)
// Readonly
// interface employeeInfo {
//     empsId : string,
//     empsName:string,
//     empsAddress:string,
//     empsSalary ?:number,
//     empsNumber:number
// }
// let valEmpInfo:Readonly<employeeInfo> = {
//     empsId:'@123',
//     empsName:'Suresh',
//     empsAddress:'Bangalore',
//     empsSalary:5000,
//     empsNumber:8786
// }
// valEmpInfo.empsAddress='Ind' //Not possible here to change the value becouse here we are using Readonly.
// interface employeeInfo {
//     empsId : string,
//     empsName:string,
//     empsAddress:string,
//     empsSalary :number,
//     empsNumber:number
// }
// let valEmpInfo:Pick<employeeInfo,'empsId'|'empsName' > = {
//     empsId:'@34323',
//     empsName:'Ramesh',
// }
// console.log(valEmpInfo)
"use strict";
// var userName:string = 'Shaik Munsheer'
// console.log(userName)
// // Here we are installed typescript locally.
// let age:number = 34
// console.log(age)
// let address:string = 'Nellore'
// console.log(address)
// Data Types in Type Script
// Primitive
// Object
// Special datatype
// advanced datatype
// function datatype
// Primitive Data types
// number
// string
// boolean
// null
// undefined
// bigint
// symbol
// var a:number = 45
// var b:string = 'Hello'
// let c :boolean = true
// let d: null = null
// let e:undefined = undefined
// let bigNumber: bigint = 123456789012345678901234567890n;
// console.log(bigNumber);
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)
// OBJECT TYPES
// Array
// Tuple
// Object
// let numbers:number[] = [1,2,3,4,5]
// console.log(numbers)
// let names:Array<String> = ['Hello','Bhai','Good afternoon']
// console.log(names)
// let booleans:Array<Boolean> = [true,false,true,false]
// console.log(booleans)
// let multiple_values : [string,null,number] =['Hello',null,67]
// console.log(multiple_values)
// let objects:{name:string,age:number} = {name:'Davood',age:23}
// console.log(objects)
// SPECIAL DATA TYPES IN TYPESCRIPT
// any
// unknown
// void
// never
// let a: any;
// a = 45
// a=56
// console.log(a)
// let b:unknown;
// b=67
// if(typeof b ==='number')  console.log(b)
// function one ():void{
//     console.log('Hello badsha')
// }
// one()
// function two():never{
//     throw new Error ("Something went wrong")
// }
// two()
// ADVANCED TYPES
// union
// typeAlias
// intersection
// Enum
// literaltypes
// let a:number|string = 'name'
// console.log(a)
// type Id = string | number
// let b : Id = 67
// console.log(b)
// enum Role {
//     student,
//     parent,
//     brother
// }
// let c : Role = Role.student
// console.log(c)
// let direction : "up" | "down";
// direction = 'up'
// console.log(direction)
// NUMBER DATAT TYPES IN TYPESCRIPTa
// var a:number = 13
// var b:string = "50"
// var c=Number(b)
// console.log(a+c)
// var a:number | string = 'Devarada'
// console.log(a)
// let value1 = 100
// console.log(value1)
// STRING DATA TYPE IN TYPESCRIPT
// var a:string = 'Hello'
// var b:string = a.toString()
// console.log(a+b)
// Boolean Data types in typescript
// var a:boolean = true
// var b:boolean = false
// console.log(a)
// console.log(b)
// interface cData {
//     sName:string,
//     sRoll:string,
//     sAge:number
// }
// var student1:cData ={
//     sName :'Raju',
//     sRoll : '3F45',
//     sAge:45
// }
// console.log(student1)
// TYPE IN TYPESCRIPT
// type studentsData = {name:string,age:number,address:string}
// type moreData = {rollNu:number,Idnum:number,percentageg:string}
// type alldata = studentsData & moreData
// var studentInfo:studentsData ={
//     name:'Ram',
//     age:34,
//     address:'Banglore'
// }
// console.log(studentInfo)
// var student2Info:alldata ={
//     name:'Rose',
//     age:23,
//     address:'Chennai',
//     rollNu:112,
//     Idnum:34,
//     percentageg:"45%"
// }
// console.log(student2Info)
// OOPS in Typescript Buddy
// class Product {
//     private productName:string;
//     protected productPrice:number;
//     constructor(productName:string,productPrice:number){
//         this.productName = productName
//         this.productPrice = productPrice
//     }
//     getOrder(){
//         console.log("Your ordered this ",this.productName,"with this",this.productPrice)
//     }
//     onlyForPrivate(){
//         console.log(this.productName)
//     }
// }
// var obj1 = new Product('Apple',1000)
// obj1.getOrder()
// var order2 = new Product('Banana',45)
// order2.getOrder()
// // console.log(order2.productName)
// console.log(order2.productPrice)
// order2.onlyForPrivate()
// class ChildProducts extends Product{
//     getProtected(){
//         console.log(this.productPrice)
//     }
// }
// var ob1 = new ChildProducts("Mango",65)
// ob1.getProtected()
// INHERITANCE IN TYPSCRIPT
// class Logins {
//       login(name:string,password:string){
//         if(name && password){
//             console.log('Your are Logged In')
//         }
//         else{
//             console.log('Login Failed')
//         }
//     }
// }
// class Student extends Logins {
//     percentage(marks:number){
//         if (marks>50) console.log('80%'); else console.log('you are Failed')
//     }
// }
// class Teacher extends Logins {
//     teachingSubject(subject:string){
//         console.log('This teacher is teaching this subject',subject)
//     }
// }
// var s1 = new Student()
// s1.login('Raju','raju@123')
// s1.percentage(56)
// var t1 = new Teacher()
// t1.login('SAMALA','SKDH98')
// t1.teachingSubject('Mathematics')
// Interface with class
// interface ForStudent {
//     teacherName:string
//     getDetails(): void;
// }
// class Student  implements ForStudent{
//     teacherName : string
//     constructor(teacherName:string){
//         this.teacherName = teacherName
//     }
//     getName(){
//         console.log(this.teacherName)
//     }
//     getDetails(): void {
//         console.log('Hello buddy I am implements ForStudent')
//     }
// }
// var st1 = new Student('Amritha')
// st1.getDetails()
// st1.getName()
// TypeGuards in Typescript
// function one(age: number | string) {
//   if (typeof age == "number") {
//     console.log("This is the number age ");
//   } else {
//     console.log("This is a string age ");
//   }
// }
// one(45)
// instanceof()
// class One{
// }
// var a1 = new One()
// class Two {
// }
// var a2 = new Two()
// function newData(data:One |Two){
//     if (data instanceof One)
//     console.log('The is a good one bro');else console.log('Not one')
// }
// newData('hello')
// INDEX SIGNATURE IN TYPESCRIPT
// CASE -1
// type anyData ={
//     [key:string]:number 
// }
// let students:anyData={
//     studentiD:9830943,
//     age:45,
//     mob:3434342,
//     place:908,
// }
// console.log(students)
// CASE -2
// type anyData ={
//     [key:string]:number |string
// }
// let students:anyData={
//     studentiD:9830943,
//     age:45,
//     mob:3434342,
//     place:908,
//     studentName:'Rajesh'
// }
// console.log(students)
// CASE -3
// type anyData ={
//     studentID :number,
//     studentName:string
//     [key:string]:number |string
// }
// let students:anyData={
//      studentID:9830943,
//     studentName:'Rajesh',
//     age:45,
//     mob:3434342,
//     place:908
// }
// console.log(students)
// CASE -4
// type anyData ={
//     studentID :number,
//     studentName:string
//     readonly [key:string]:number |string
// }
// let students:anyData={
//      studentID:9830943,
//     studentName:'Rajesh',
//     age:45,
//     mob:3434342,
//     place:908
// }
// console.log(students)
// UTILITY TYPES IN TYPESCRIPT
// Partial
// interface CollegeType{
//     name1:string,
//     location:string,
//     students:number,
//     branch:string
// }
// let collegeData:Partial<CollegeType>={
//     name1:"iit delhi",
//     location:'Nellore'
// }
// console.log(collegeData)
//Required
// interface CollegeType{
//     name1:string,
//     location:string,
//     students:number,
//     branch?:string
// }
// function one(data:Required<CollegeType>){
//     return data
// }
// let veo = one({name1:'IITK',location:'HYD',students:564,branch:'CSE'})
// console.log(veo)
// readonly
// interface employeeData {
//     readonly empName:string,
//     empId:number,
//     empAddress:string,
//     empSalary:number
// }
// let emp1:employeeData={
//     empName:'EmployeeOne',
//     empId:34,
//     empAddress:'Bangalore',
//     empSalary:50000
// }
// emp1.empName = 'Rahul'
// console.log(emp1)
// utility Properties in typescript
// Partial<interfaceName>
// Required<interfaceName>
// readonly<interfaceName>
// pick<interfaceName>
// interface employeeInfo {
//     empsId : string,
//     empsName:string,
//     empsAddress:string,
//     empsSalary:number,
//     empsNumber:number
// }
// let valEmpInfo:Partial<employeeInfo> = {
//     empsId:'@123',
//     empsName:'Suresh',
//     empsAddress:'Bangalore',
//     // empsSalary:5000,
//     // empsNumber:8786
// }
// console.log(valEmpInfo)
// Required
// interface employeeInfo {
//     empsId : string,
//     empsName:string,
//     empsAddress:string,
//     empsSalary ?:number,
//     empsNumber:number
// }
// let valEmpInfo:Required<employeeInfo> = {
//     empsId:'@123',
//     empsName:'Suresh',
//     empsAddress:'Bangalore',
//     empsSalary:5000,
//     empsNumber:8786
// }
// console.log(valEmpInfo)
// function newfun(data:employeeInfo){
//     return data
// }
// console.log(newfun)
// Readonly
// interface employeeInfo {
//     empsId : string,
//     empsName:string,
//     empsAddress:string,
//     empsSalary ?:number,
//     empsNumber:number
// }
// let valEmpInfo:Readonly<employeeInfo> = {
//     empsId:'@123',
//     empsName:'Suresh',
//     empsAddress:'Bangalore',
//     empsSalary:5000,
//     empsNumber:8786
// }
// valEmpInfo.empsAddress='Ind' //Not possible here to change the value becouse here we are using Readonly.
// interface employeeInfo {
//     empsId : string,
//     empsName:string,
//     empsAddress:string,
//     empsSalary :number,
//     empsNumber:number
// }
// let valEmpInfo:Pick<employeeInfo,'empsId'|'empsName' > = {
//     empsId:'@34323',
//     empsName:'Ramesh',
// }
// console.log(valEmpInfo)
"use strict";
// var userName:string = 'Shaik Munsheer'
// console.log(userName)
// // Here we are installed typescript locally.
// let age:number = 34
// console.log(age)
// let address:string = 'Nellore'
// console.log(address)
// Data Types in Type Script
// Primitive
// Object
// Special datatype
// advanced datatype
// function datatype
// Primitive Data types
// number
// string
// boolean
// null
// undefined
// bigint
// symbol
// var a:number = 45
// var b:string = 'Hello'
// let c :boolean = true
// let d: null = null
// let e:undefined = undefined
// let bigNumber: bigint = 123456789012345678901234567890n;
// console.log(bigNumber);
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)
// OBJECT TYPES
// Array
// Tuple
// Object
// let numbers:number[] = [1,2,3,4,5]
// console.log(numbers)
// let names:Array<String> = ['Hello','Bhai','Good afternoon']
// console.log(names)
// let booleans:Array<Boolean> = [true,false,true,false]
// console.log(booleans)
// let multiple_values : [string,null,number] =['Hello',null,67]
// console.log(multiple_values)
// let objects:{name:string,age:number} = {name:'Davood',age:23}
// console.log(objects)
// SPECIAL DATA TYPES IN TYPESCRIPT
// any
// unknown
// void
// never
// let a: any;
// a = 45
// a=56
// console.log(a)
// let b:unknown;
// b=67
// if(typeof b ==='number')  console.log(b)
// function one ():void{
//     console.log('Hello badsha')
// }
// one()
// function two():never{
//     throw new Error ("Something went wrong")
// }
// two()
// ADVANCED TYPES
// union
// typeAlias
// intersection
// Enum
// literaltypes
// let a:number|string = 'name'
// console.log(a)
// type Id = string | number
// let b : Id = 67
// console.log(b)
// enum Role {
//     student,
//     parent,
//     brother
// }
// let c : Role = Role.student
// console.log(c)
// let direction : "up" | "down";
// direction = 'up'
// console.log(direction)
// NUMBER DATAT TYPES IN TYPESCRIPTa
// var a:number = 13
// var b:string = "50"
// var c=Number(b)
// console.log(a+c)
// var a:number | string = 'Devarada'
// console.log(a)
// let value1 = 100
// console.log(value1)
// STRING DATA TYPE IN TYPESCRIPT
// var a:string = 'Hello'
// var b:string = a.toString()
// console.log(a+b)
// Boolean Data types in typescript
// var a:boolean = true
// var b:boolean = false
// console.log(a)
// console.log(b)
// interface cData {
//     sName:string,
//     sRoll:string,
//     sAge:number
// }
// var student1:cData ={
//     sName :'Raju',
//     sRoll : '3F45',
//     sAge:45
// }
// console.log(student1)
// TYPE IN TYPESCRIPT
// type studentsData = {name:string,age:number,address:string}
// type moreData = {rollNu:number,Idnum:number,percentageg:string}
// type alldata = studentsData & moreData
// var studentInfo:studentsData ={
//     name:'Ram',
//     age:34,
//     address:'Banglore'
// }
// console.log(studentInfo)
// var student2Info:alldata ={
//     name:'Rose',
//     age:23,
//     address:'Chennai',
//     rollNu:112,
//     Idnum:34,
//     percentageg:"45%"
// }
// console.log(student2Info)
// OOPS in Typescript Buddy
// class Product {
//     private productName:string;
//     protected productPrice:number;
//     constructor(productName:string,productPrice:number){
//         this.productName = productName
//         this.productPrice = productPrice
//     }
//     getOrder(){
//         console.log("Your ordered this ",this.productName,"with this",this.productPrice)
//     }
//     onlyForPrivate(){
//         console.log(this.productName)
//     }
// }
// var obj1 = new Product('Apple',1000)
// obj1.getOrder()
// var order2 = new Product('Banana',45)
// order2.getOrder()
// // console.log(order2.productName)
// console.log(order2.productPrice)
// order2.onlyForPrivate()
// class ChildProducts extends Product{
//     getProtected(){
//         console.log(this.productPrice)
//     }
// }
// var ob1 = new ChildProducts("Mango",65)
// ob1.getProtected()
// INHERITANCE IN TYPSCRIPT
// class Logins {
//       login(name:string,password:string){
//         if(name && password){
//             console.log('Your are Logged In')
//         }
//         else{
//             console.log('Login Failed')
//         }
//     }
// }
// class Student extends Logins {
//     percentage(marks:number){
//         if (marks>50) console.log('80%'); else console.log('you are Failed')
//     }
// }
// class Teacher extends Logins {
//     teachingSubject(subject:string){
//         console.log('This teacher is teaching this subject',subject)
//     }
// }
// var s1 = new Student()
// s1.login('Raju','raju@123')
// s1.percentage(56)
// var t1 = new Teacher()
// t1.login('SAMALA','SKDH98')
// t1.teachingSubject('Mathematics')
// Interface with class
// interface ForStudent {
//     teacherName:string
//     getDetails(): void;
// }
// class Student  implements ForStudent{
//     teacherName : string
//     constructor(teacherName:string){
//         this.teacherName = teacherName
//     }
//     getName(){
//         console.log(this.teacherName)
//     }
//     getDetails(): void {
//         console.log('Hello buddy I am implements ForStudent')
//     }
// }
// var st1 = new Student('Amritha')
// st1.getDetails()
// st1.getName()
// TypeGuards in Typescript
// function one(age: number | string) {
//   if (typeof age == "number") {
//     console.log("This is the number age ");
//   } else {
//     console.log("This is a string age ");
//   }
// }
// one(45)
// instanceof()
// class One{
// }
// var a1 = new One()
// class Two {
// }
// var a2 = new Two()
// function newData(data:One |Two){
//     if (data instanceof One)
//     console.log('The is a good one bro');else console.log('Not one')
// }
// newData('hello')
// INDEX SIGNATURE IN TYPESCRIPT
// CASE -1
// type anyData ={
//     [key:string]:number 
// }
// let students:anyData={
//     studentiD:9830943,
//     age:45,
//     mob:3434342,
//     place:908,
// }
// console.log(students)
// CASE -2
// type anyData ={
//     [key:string]:number |string
// }
// let students:anyData={
//     studentiD:9830943,
//     age:45,
//     mob:3434342,
//     place:908,
//     studentName:'Rajesh'
// }
// console.log(students)
// CASE -3
// type anyData ={
//     studentID :number,
//     studentName:string
//     [key:string]:number |string
// }
// let students:anyData={
//      studentID:9830943,
//     studentName:'Rajesh',
//     age:45,
//     mob:3434342,
//     place:908
// }
// console.log(students)
// CASE -4
// type anyData ={
//     studentID :number,
//     studentName:string
//     readonly [key:string]:number |string
// }
// let students:anyData={
//      studentID:9830943,
//     studentName:'Rajesh',
//     age:45,
//     mob:3434342,
//     place:908
// }
// console.log(students)
// UTILITY TYPES IN TYPESCRIPT
// Partial
// interface CollegeType{
//     name1:string,
//     location:string,
//     students:number,
//     branch:string
// }
// let collegeData:Partial<CollegeType>={
//     name1:"iit delhi",
//     location:'Nellore'
// }
// console.log(collegeData)
//Required
// interface CollegeType{
//     name1:string,
//     location:string,
//     students:number,
//     branch?:string
// }
// function one(data:Required<CollegeType>){
//     return data
// }
// let veo = one({name1:'IITK',location:'HYD',students:564,branch:'CSE'})
// console.log(veo)
// readonly
// interface employeeData {
//     readonly empName:string,
//     empId:number,
//     empAddress:string,
//     empSalary:number
// }
// let emp1:employeeData={
//     empName:'EmployeeOne',
//     empId:34,
//     empAddress:'Bangalore',
//     empSalary:50000
// }
// emp1.empName = 'Rahul'
// console.log(emp1)
// utility Properties in typescript
// Partial<interfaceName>
// Required<interfaceName>
// readonly<interfaceName>
// pick<interfaceName>
// interface employeeInfo {
//     empsId : string,
//     empsName:string,
//     empsAddress:string,
//     empsSalary:number,
//     empsNumber:number
// }
// let valEmpInfo:Partial<employeeInfo> = {
//     empsId:'@123',
//     empsName:'Suresh',
//     empsAddress:'Bangalore',
//     // empsSalary:5000,
//     // empsNumber:8786
// }
// console.log(valEmpInfo)
// Required
// interface employeeInfo {
//     empsId : string,
//     empsName:string,
//     empsAddress:string,
//     empsSalary ?:number,
//     empsNumber:number
// }
// let valEmpInfo:Required<employeeInfo> = {
//     empsId:'@123',
//     empsName:'Suresh',
//     empsAddress:'Bangalore',
//     empsSalary:5000,
//     empsNumber:8786
// }
// console.log(valEmpInfo)
// function newfun(data:employeeInfo){
//     return data
// }
// console.log(newfun)
// Readonly
// interface employeeInfo {
//     empsId : string,
//     empsName:string,
//     empsAddress:string,
//     empsSalary ?:number,
//     empsNumber:number
// }
// let valEmpInfo:Readonly<employeeInfo> = {
//     empsId:'@123',
//     empsName:'Suresh',
//     empsAddress:'Bangalore',
//     empsSalary:5000,
//     empsNumber:8786
// }
// valEmpInfo.empsAddress='Ind' //Not possible here to change the value becouse here we are using Readonly.
// interface employeeInfo {
//     empsId : string,
//     empsName:string,
//     empsAddress:string,
//     empsSalary :number,
//     empsNumber:number
// }
// let valEmpInfo:Pick<employeeInfo,'empsId'|'empsName' > = {
//     empsId:'@34323',
//     empsName:'Ramesh',
// }
// console.log(valEmpInfo)
"use strict";
// var userName:string = 'Shaik Munsheer'
// console.log(userName)
// // Here we are installed typescript locally.
// let age:number = 34
// console.log(age)
// let address:string = 'Nellore'
// console.log(address)
// Data Types in Type Script
// Primitive
// Object
// Special datatype
// advanced datatype
// function datatype
// Primitive Data types
// number
// string
// boolean
// null
// undefined
// bigint
// symbol
// var a:number = 45
// var b:string = 'Hello'
// let c :boolean = true
// let d: null = null
// let e:undefined = undefined
// let bigNumber: bigint = 123456789012345678901234567890n;
// console.log(bigNumber);
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)
// OBJECT TYPES
// Array
// Tuple
// Object
// let numbers:number[] = [1,2,3,4,5]
// console.log(numbers)
// let names:Array<String> = ['Hello','Bhai','Good afternoon']
// console.log(names)
// let booleans:Array<Boolean> = [true,false,true,false]
// console.log(booleans)
// let multiple_values : [string,null,number] =['Hello',null,67]
// console.log(multiple_values)
// let objects:{name:string,age:number} = {name:'Davood',age:23}
// console.log(objects)
// SPECIAL DATA TYPES IN TYPESCRIPT
// any
// unknown
// void
// never
// let a: any;
// a = 45
// a=56
// console.log(a)
// let b:unknown;
// b=67
// if(typeof b ==='number')  console.log(b)
// function one ():void{
//     console.log('Hello badsha')
// }
// one()
// function two():never{
//     throw new Error ("Something went wrong")
// }
// two()
// ADVANCED TYPES
// union
// typeAlias
// intersection
// Enum
// literaltypes
// let a:number|string = 'name'
// console.log(a)
// type Id = string | number
// let b : Id = 67
// console.log(b)
// enum Role {
//     student,
//     parent,
//     brother
// }
// let c : Role = Role.student
// console.log(c)
// let direction : "up" | "down";
// direction = 'up'
// console.log(direction)
// NUMBER DATAT TYPES IN TYPESCRIPTa
// var a:number = 13
// var b:string = "50"
// var c=Number(b)
// console.log(a+c)
// var a:number | string = 'Devarada'
// console.log(a)
// let value1 = 100
// console.log(value1)
// STRING DATA TYPE IN TYPESCRIPT
// var a:string = 'Hello'
// var b:string = a.toString()
// console.log(a+b)
// Boolean Data types in typescript
// var a:boolean = true
// var b:boolean = false
// console.log(a)
// console.log(b)
// interface cData {
//     sName:string,
//     sRoll:string,
//     sAge:number
// }
// var student1:cData ={
//     sName :'Raju',
//     sRoll : '3F45',
//     sAge:45
// }
// console.log(student1)
// TYPE IN TYPESCRIPT
// type studentsData = {name:string,age:number,address:string}
// type moreData = {rollNu:number,Idnum:number,percentageg:string}
// type alldata = studentsData & moreData
// var studentInfo:studentsData ={
//     name:'Ram',
//     age:34,
//     address:'Banglore'
// }
// console.log(studentInfo)
// var student2Info:alldata ={
//     name:'Rose',
//     age:23,
//     address:'Chennai',
//     rollNu:112,
//     Idnum:34,
//     percentageg:"45%"
// }
// console.log(student2Info)
// OOPS in Typescript Buddy
// class Product {
//     private productName:string;
//     protected productPrice:number;
//     constructor(productName:string,productPrice:number){
//         this.productName = productName
//         this.productPrice = productPrice
//     }
//     getOrder(){
//         console.log("Your ordered this ",this.productName,"with this",this.productPrice)
//     }
//     onlyForPrivate(){
//         console.log(this.productName)
//     }
// }
// var obj1 = new Product('Apple',1000)
// obj1.getOrder()
// var order2 = new Product('Banana',45)
// order2.getOrder()
// // console.log(order2.productName)
// console.log(order2.productPrice)
// order2.onlyForPrivate()
// class ChildProducts extends Product{
//     getProtected(){
//         console.log(this.productPrice)
//     }
// }
// var ob1 = new ChildProducts("Mango",65)
// ob1.getProtected()
// INHERITANCE IN TYPSCRIPT
// class Logins {
//       login(name:string,password:string){
//         if(name && password){
//             console.log('Your are Logged In')
//         }
//         else{
//             console.log('Login Failed')
//         }
//     }
// }
// class Student extends Logins {
//     percentage(marks:number){
//         if (marks>50) console.log('80%'); else console.log('you are Failed')
//     }
// }
// class Teacher extends Logins {
//     teachingSubject(subject:string){
//         console.log('This teacher is teaching this subject',subject)
//     }
// }
// var s1 = new Student()
// s1.login('Raju','raju@123')
// s1.percentage(56)
// var t1 = new Teacher()
// t1.login('SAMALA','SKDH98')
// t1.teachingSubject('Mathematics')
// Interface with class
// interface ForStudent {
//     teacherName:string
//     getDetails(): void;
// }
// class Student  implements ForStudent{
//     teacherName : string
//     constructor(teacherName:string){
//         this.teacherName = teacherName
//     }
//     getName(){
//         console.log(this.teacherName)
//     }
//     getDetails(): void {
//         console.log('Hello buddy I am implements ForStudent')
//     }
// }
// var st1 = new Student('Amritha')
// st1.getDetails()
// st1.getName()
// TypeGuards in Typescript
// function one(age: number | string) {
//   if (typeof age == "number") {
//     console.log("This is the number age ");
//   } else {
//     console.log("This is a string age ");
//   }
// }
// one(45)
// instanceof()
// class One{
// }
// var a1 = new One()
// class Two {
// }
// var a2 = new Two()
// function newData(data:One |Two){
//     if (data instanceof One)
//     console.log('The is a good one bro');else console.log('Not one')
// }
// newData('hello')
// INDEX SIGNATURE IN TYPESCRIPT
// CASE -1
// type anyData ={
//     [key:string]:number 
// }
// let students:anyData={
//     studentiD:9830943,
//     age:45,
//     mob:3434342,
//     place:908,
// }
// console.log(students)
// CASE -2
// type anyData ={
//     [key:string]:number |string
// }
// let students:anyData={
//     studentiD:9830943,
//     age:45,
//     mob:3434342,
//     place:908,
//     studentName:'Rajesh'
// }
// console.log(students)
// CASE -3
// type anyData ={
//     studentID :number,
//     studentName:string
//     [key:string]:number |string
// }
// let students:anyData={
//      studentID:9830943,
//     studentName:'Rajesh',
//     age:45,
//     mob:3434342,
//     place:908
// }
// console.log(students)
// CASE -4
// type anyData ={
//     studentID :number,
//     studentName:string
//     readonly [key:string]:number |string
// }
// let students:anyData={
//      studentID:9830943,
//     studentName:'Rajesh',
//     age:45,
//     mob:3434342,
//     place:908
// }
// console.log(students)
// UTILITY TYPES IN TYPESCRIPT
// Partial
// interface CollegeType{
//     name1:string,
//     location:string,
//     students:number,
//     branch:string
// }
// let collegeData:Partial<CollegeType>={
//     name1:"iit delhi",
//     location:'Nellore'
// }
// console.log(collegeData)
//Required
// interface CollegeType{
//     name1:string,
//     location:string,
//     students:number,
//     branch?:string
// }
// function one(data:Required<CollegeType>){
//     return data
// }
// let veo = one({name1:'IITK',location:'HYD',students:564,branch:'CSE'})
// console.log(veo)
// readonly
// interface employeeData {
//     readonly empName:string,
//     empId:number,
//     empAddress:string,
//     empSalary:number
// }
// let emp1:employeeData={
//     empName:'EmployeeOne',
//     empId:34,
//     empAddress:'Bangalore',
//     empSalary:50000
// }
// emp1.empName = 'Rahul'
// console.log(emp1)
// utility Properties in typescript
// Partial<interfaceName>
// Required<interfaceName>
// readonly<interfaceName>
// pick<interfaceName>
// interface employeeInfo {
//     empsId : string,
//     empsName:string,
//     empsAddress:string,
//     empsSalary:number,
//     empsNumber:number
// }
// let valEmpInfo:Partial<employeeInfo> = {
//     empsId:'@123',
//     empsName:'Suresh',
//     empsAddress:'Bangalore',
//     // empsSalary:5000,
//     // empsNumber:8786
// }
// console.log(valEmpInfo)
// Required
// interface employeeInfo {
//     empsId : string,
//     empsName:string,
//     empsAddress:string,
//     empsSalary ?:number,
//     empsNumber:number
// }
// let valEmpInfo:Required<employeeInfo> = {
//     empsId:'@123',
//     empsName:'Suresh',
//     empsAddress:'Bangalore',
//     empsSalary:5000,
//     empsNumber:8786
// }
// console.log(valEmpInfo)
// function newfun(data:employeeInfo){
//     return data
// }
// console.log(newfun)
// Readonly
// interface employeeInfo {
//     empsId : string,
//     empsName:string,
//     empsAddress:string,
//     empsSalary ?:number,
//     empsNumber:number
// }
// let valEmpInfo:Readonly<employeeInfo> = {
//     empsId:'@123',
//     empsName:'Suresh',
//     empsAddress:'Bangalore',
//     empsSalary:5000,
//     empsNumber:8786
// }
// valEmpInfo.empsAddress='Ind' //Not possible here to change the value becouse here we are using Readonly.
// interface employeeInfo {
//     empsId : string,
//     empsName:string,
//     empsAddress:string,
//     empsSalary :number,
//     empsNumber:number
// }
// let valEmpInfo:Pick<employeeInfo,'empsId'|'empsName' > = {
//     empsId:'@34323',
//     empsName:'Ramesh',
// }
// console.log(valEmpInfo)
"use strict";
// var userName:string = 'Shaik Munsheer'
// console.log(userName)
// // Here we are installed typescript locally.
// let age:number = 34
// console.log(age)
// let address:string = 'Nellore'
// console.log(address)
// Data Types in Type Script
// Primitive
// Object
// Special datatype
// advanced datatype
// function datatype
// Primitive Data types
// number
// string
// boolean
// null
// undefined
// bigint
// symbol
// var a:number = 45
// var b:string = 'Hello'
// let c :boolean = true
// let d: null = null
// let e:undefined = undefined
// let bigNumber: bigint = 123456789012345678901234567890n;
// console.log(bigNumber);
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)
// OBJECT TYPES
// Array
// Tuple
// Object
// let numbers:number[] = [1,2,3,4,5]
// console.log(numbers)
// let names:Array<String> = ['Hello','Bhai','Good afternoon']
// console.log(names)
// let booleans:Array<Boolean> = [true,false,true,false]
// console.log(booleans)
// let multiple_values : [string,null,number] =['Hello',null,67]
// console.log(multiple_values)
// let objects:{name:string,age:number} = {name:'Davood',age:23}
// console.log(objects)
// SPECIAL DATA TYPES IN TYPESCRIPT
// any
// unknown
// void
// never
// let a: any;
// a = 45
// a=56
// console.log(a)
// let b:unknown;
// b=67
// if(typeof b ==='number')  console.log(b)
// function one ():void{
//     console.log('Hello badsha')
// }
// one()
// function two():never{
//     throw new Error ("Something went wrong")
// }
// two()
// ADVANCED TYPES
// union
// typeAlias
// intersection
// Enum
// literaltypes
// let a:number|string = 'name'
// console.log(a)
// type Id = string | number
// let b : Id = 67
// console.log(b)
// enum Role {
//     student,
//     parent,
//     brother
// }
// let c : Role = Role.student
// console.log(c)
// let direction : "up" | "down";
// direction = 'up'
// console.log(direction)
// NUMBER DATAT TYPES IN TYPESCRIPTa
// var a:number = 13
// var b:string = "50"
// var c=Number(b)
// console.log(a+c)
// var a:number | string = 'Devarada'
// console.log(a)
// let value1 = 100
// console.log(value1)
// STRING DATA TYPE IN TYPESCRIPT
// var a:string = 'Hello'
// var b:string = a.toString()
// console.log(a+b)
// Boolean Data types in typescript
// var a:boolean = true
// var b:boolean = false
// console.log(a)
// console.log(b)
// interface cData {
//     sName:string,
//     sRoll:string,
//     sAge:number
// }
// var student1:cData ={
//     sName :'Raju',
//     sRoll : '3F45',
//     sAge:45
// }
// console.log(student1)
// TYPE IN TYPESCRIPT
// type studentsData = {name:string,age:number,address:string}
// type moreData = {rollNu:number,Idnum:number,percentageg:string}
// type alldata = studentsData & moreData
// var studentInfo:studentsData ={
//     name:'Ram',
//     age:34,
//     address:'Banglore'
// }
// console.log(studentInfo)
// var student2Info:alldata ={
//     name:'Rose',
//     age:23,
//     address:'Chennai',
//     rollNu:112,
//     Idnum:34,
//     percentageg:"45%"
// }
// console.log(student2Info)
// OOPS in Typescript Buddy
// class Product {
//     private productName:string;
//     protected productPrice:number;
//     constructor(productName:string,productPrice:number){
//         this.productName = productName
//         this.productPrice = productPrice
//     }
//     getOrder(){
//         console.log("Your ordered this ",this.productName,"with this",this.productPrice)
//     }
//     onlyForPrivate(){
//         console.log(this.productName)
//     }
// }
// var obj1 = new Product('Apple',1000)
// obj1.getOrder()
// var order2 = new Product('Banana',45)
// order2.getOrder()
// // console.log(order2.productName)
// console.log(order2.productPrice)
// order2.onlyForPrivate()
// class ChildProducts extends Product{
//     getProtected(){
//         console.log(this.productPrice)
//     }
// }
// var ob1 = new ChildProducts("Mango",65)
// ob1.getProtected()
// INHERITANCE IN TYPSCRIPT
// class Logins {
//       login(name:string,password:string){
//         if(name && password){
//             console.log('Your are Logged In')
//         }
//         else{
//             console.log('Login Failed')
//         }
//     }
// }
// class Student extends Logins {
//     percentage(marks:number){
//         if (marks>50) console.log('80%'); else console.log('you are Failed')
//     }
// }
// class Teacher extends Logins {
//     teachingSubject(subject:string){
//         console.log('This teacher is teaching this subject',subject)
//     }
// }
// var s1 = new Student()
// s1.login('Raju','raju@123')
// s1.percentage(56)
// var t1 = new Teacher()
// t1.login('SAMALA','SKDH98')
// t1.teachingSubject('Mathematics')
// Interface with class
// interface ForStudent {
//     teacherName:string
//     getDetails(): void;
// }
// class Student  implements ForStudent{
//     teacherName : string
//     constructor(teacherName:string){
//         this.teacherName = teacherName
//     }
//     getName(){
//         console.log(this.teacherName)
//     }
//     getDetails(): void {
//         console.log('Hello buddy I am implements ForStudent')
//     }
// }
// var st1 = new Student('Amritha')
// st1.getDetails()
// st1.getName()
// TypeGuards in Typescript
// function one(age: number | string) {
//   if (typeof age == "number") {
//     console.log("This is the number age ");
//   } else {
//     console.log("This is a string age ");
//   }
// }
// one(45)
// instanceof()
// class One{
// }
// var a1 = new One()
// class Two {
// }
// var a2 = new Two()
// function newData(data:One |Two){
//     if (data instanceof One)
//     console.log('The is a good one bro');else console.log('Not one')
// }
// newData('hello')
// INDEX SIGNATURE IN TYPESCRIPT
// CASE -1
// type anyData ={
//     [key:string]:number 
// }
// let students:anyData={
//     studentiD:9830943,
//     age:45,
//     mob:3434342,
//     place:908,
// }
// console.log(students)
// CASE -2
// type anyData ={
//     [key:string]:number |string
// }
// let students:anyData={
//     studentiD:9830943,
//     age:45,
//     mob:3434342,
//     place:908,
//     studentName:'Rajesh'
// }
// console.log(students)
// CASE -3
// type anyData ={
//     studentID :number,
//     studentName:string
//     [key:string]:number |string
// }
// let students:anyData={
//      studentID:9830943,
//     studentName:'Rajesh',
//     age:45,
//     mob:3434342,
//     place:908
// }
// console.log(students)
// CASE -4
// type anyData ={
//     studentID :number,
//     studentName:string
//     readonly [key:string]:number |string
// }
// let students:anyData={
//      studentID:9830943,
//     studentName:'Rajesh',
//     age:45,
//     mob:3434342,
//     place:908
// }
// console.log(students)
// UTILITY TYPES IN TYPESCRIPT
// Partial
// interface CollegeType{
//     name1:string,
//     location:string,
//     students:number,
//     branch:string
// }
// let collegeData:Partial<CollegeType>={
//     name1:"iit delhi",
//     location:'Nellore'
// }
// console.log(collegeData)
//Required
// interface CollegeType{
//     name1:string,
//     location:string,
//     students:number,
//     branch?:string
// }
// function one(data:Required<CollegeType>){
//     return data
// }
// let veo = one({name1:'IITK',location:'HYD',students:564,branch:'CSE'})
// console.log(veo)
// readonly
// interface employeeData {
//     readonly empName:string,
//     empId:number,
//     empAddress:string,
//     empSalary:number
// }
// let emp1:employeeData={
//     empName:'EmployeeOne',
//     empId:34,
//     empAddress:'Bangalore',
//     empSalary:50000
// }
// emp1.empName = 'Rahul'
// console.log(emp1)
// utility Properties in typescript
// Partial<interfaceName>
// Required<interfaceName>
// readonly<interfaceName>
// pick<interfaceName>
// interface employeeInfo {
//     empsId : string,
//     empsName:string,
//     empsAddress:string,
//     empsSalary:number,
//     empsNumber:number
// }
// let valEmpInfo:Partial<employeeInfo> = {
//     empsId:'@123',
//     empsName:'Suresh',
//     empsAddress:'Bangalore',
//     // empsSalary:5000,
//     // empsNumber:8786
// }
// console.log(valEmpInfo)
// Required
// interface employeeInfo {
//     empsId : string,
//     empsName:string,
//     empsAddress:string,
//     empsSalary ?:number,
//     empsNumber:number
// }
// let valEmpInfo:Required<employeeInfo> = {
//     empsId:'@123',
//     empsName:'Suresh',
//     empsAddress:'Bangalore',
//     empsSalary:5000,
//     empsNumber:8786
// }
// console.log(valEmpInfo)
// function newfun(data:employeeInfo){
//     return data
// }
// console.log(newfun)
// Readonly
// interface employeeInfo {
//     empsId : string,
//     empsName:string,
//     empsAddress:string,
//     empsSalary ?:number,
//     empsNumber:number
// }
// let valEmpInfo:Readonly<employeeInfo> = {
//     empsId:'@123',
//     empsName:'Suresh',
//     empsAddress:'Bangalore',
//     empsSalary:5000,
//     empsNumber:8786
// }
// valEmpInfo.empsAddress='Ind' //Not possible here to change the value becouse here we are using Readonly.
// interface employeeInfo {
//     empsId : string,
//     empsName:string,
//     empsAddress:string,
//     empsSalary :number,
//     empsNumber:number
// }
// let valEmpInfo:Pick<employeeInfo,'empsId'|'empsName' > = {
//     empsId:'@34323',
//     empsName:'Ramesh',
// }
// console.log(valEmpInfo)
"use strict";
// var userName:string = 'Shaik Munsheer'
// console.log(userName)
// // Here we are installed typescript locally.
// let age:number = 34
// console.log(age)
// let address:string = 'Nellore'
// console.log(address)
// Data Types in Type Script
// Primitive
// Object
// Special datatype
// advanced datatype
// function datatype
// Primitive Data types
// number
// string
// boolean
// null
// undefined
// bigint
// symbol
// var a:number = 45
// var b:string = 'Hello'
// let c :boolean = true
// let d: null = null
// let e:undefined = undefined
// let bigNumber: bigint = 123456789012345678901234567890n;
// console.log(bigNumber);
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)
// OBJECT TYPES
// Array
// Tuple
// Object
// let numbers:number[] = [1,2,3,4,5]
// console.log(numbers)
// let names:Array<String> = ['Hello','Bhai','Good afternoon']
// console.log(names)
// let booleans:Array<Boolean> = [true,false,true,false]
// console.log(booleans)
// let multiple_values : [string,null,number] =['Hello',null,67]
// console.log(multiple_values)
// let objects:{name:string,age:number} = {name:'Davood',age:23}
// console.log(objects)
// SPECIAL DATA TYPES IN TYPESCRIPT
// any
// unknown
// void
// never
// let a: any;
// a = 45
// a=56
// console.log(a)
// let b:unknown;
// b=67
// if(typeof b ==='number')  console.log(b)
// function one ():void{
//     console.log('Hello badsha')
// }
// one()
// function two():never{
//     throw new Error ("Something went wrong")
// }
// two()
// ADVANCED TYPES
// union
// typeAlias
// intersection
// Enum
// literaltypes
// let a:number|string = 'name'
// console.log(a)
// type Id = string | number
// let b : Id = 67
// console.log(b)
// enum Role {
//     student,
//     parent,
//     brother
// }
// let c : Role = Role.student
// console.log(c)
// let direction : "up" | "down";
// direction = 'up'
// console.log(direction)
// NUMBER DATAT TYPES IN TYPESCRIPTa
// var a:number = 13
// var b:string = "50"
// var c=Number(b)
// console.log(a+c)
// var a:number | string = 'Devarada'
// console.log(a)
// let value1 = 100
// console.log(value1)
// STRING DATA TYPE IN TYPESCRIPT
// var a:string = 'Hello'
// var b:string = a.toString()
// console.log(a+b)
// Boolean Data types in typescript
// var a:boolean = true
// var b:boolean = false
// console.log(a)
// console.log(b)
// interface cData {
//     sName:string,
//     sRoll:string,
//     sAge:number
// }
// var student1:cData ={
//     sName :'Raju',
//     sRoll : '3F45',
//     sAge:45
// }
// console.log(student1)
// TYPE IN TYPESCRIPT
// type studentsData = {name:string,age:number,address:string}
// type moreData = {rollNu:number,Idnum:number,percentageg:string}
// type alldata = studentsData & moreData
// var studentInfo:studentsData ={
//     name:'Ram',
//     age:34,
//     address:'Banglore'
// }
// console.log(studentInfo)
// var student2Info:alldata ={
//     name:'Rose',
//     age:23,
//     address:'Chennai',
//     rollNu:112,
//     Idnum:34,
//     percentageg:"45%"
// }
// console.log(student2Info)
// OOPS in Typescript Buddy
// class Product {
//     private productName:string;
//     protected productPrice:number;
//     constructor(productName:string,productPrice:number){
//         this.productName = productName
//         this.productPrice = productPrice
//     }
//     getOrder(){
//         console.log("Your ordered this ",this.productName,"with this",this.productPrice)
//     }
//     onlyForPrivate(){
//         console.log(this.productName)
//     }
// }
// var obj1 = new Product('Apple',1000)
// obj1.getOrder()
// var order2 = new Product('Banana',45)
// order2.getOrder()
// // console.log(order2.productName)
// console.log(order2.productPrice)
// order2.onlyForPrivate()
// class ChildProducts extends Product{
//     getProtected(){
//         console.log(this.productPrice)
//     }
// }
// var ob1 = new ChildProducts("Mango",65)
// ob1.getProtected()
// INHERITANCE IN TYPSCRIPT
// class Logins {
//       login(name:string,password:string){
//         if(name && password){
//             console.log('Your are Logged In')
//         }
//         else{
//             console.log('Login Failed')
//         }
//     }
// }
// class Student extends Logins {
//     percentage(marks:number){
//         if (marks>50) console.log('80%'); else console.log('you are Failed')
//     }
// }
// class Teacher extends Logins {
//     teachingSubject(subject:string){
//         console.log('This teacher is teaching this subject',subject)
//     }
// }
// var s1 = new Student()
// s1.login('Raju','raju@123')
// s1.percentage(56)
// var t1 = new Teacher()
// t1.login('SAMALA','SKDH98')
// t1.teachingSubject('Mathematics')
// Interface with class
// interface ForStudent {
//     teacherName:string
//     getDetails(): void;
// }
// class Student  implements ForStudent{
//     teacherName : string
//     constructor(teacherName:string){
//         this.teacherName = teacherName
//     }
//     getName(){
//         console.log(this.teacherName)
//     }
//     getDetails(): void {
//         console.log('Hello buddy I am implements ForStudent')
//     }
// }
// var st1 = new Student('Amritha')
// st1.getDetails()
// st1.getName()
// TypeGuards in Typescript
// function one(age: number | string) {
//   if (typeof age == "number") {
//     console.log("This is the number age ");
//   } else {
//     console.log("This is a string age ");
//   }
// }
// one(45)
// instanceof()
// class One{
// }
// var a1 = new One()
// class Two {
// }
// var a2 = new Two()
// function newData(data:One |Two){
//     if (data instanceof One)
//     console.log('The is a good one bro');else console.log('Not one')
// }
// newData('hello')
// INDEX SIGNATURE IN TYPESCRIPT
// CASE -1
// type anyData ={
//     [key:string]:number 
// }
// let students:anyData={
//     studentiD:9830943,
//     age:45,
//     mob:3434342,
//     place:908,
// }
// console.log(students)
// CASE -2
// type anyData ={
//     [key:string]:number |string
// }
// let students:anyData={
//     studentiD:9830943,
//     age:45,
//     mob:3434342,
//     place:908,
//     studentName:'Rajesh'
// }
// console.log(students)
// CASE -3
// type anyData ={
//     studentID :number,
//     studentName:string
//     [key:string]:number |string
// }
// let students:anyData={
//      studentID:9830943,
//     studentName:'Rajesh',
//     age:45,
//     mob:3434342,
//     place:908
// }
// console.log(students)
// CASE -4
// type anyData ={
//     studentID :number,
//     studentName:string
//     readonly [key:string]:number |string
// }
// let students:anyData={
//      studentID:9830943,
//     studentName:'Rajesh',
//     age:45,
//     mob:3434342,
//     place:908
// }
// console.log(students)
// UTILITY TYPES IN TYPESCRIPT
// Partial
// interface CollegeType{
//     name1:string,
//     location:string,
//     students:number,
//     branch:string
// }
// let collegeData:Partial<CollegeType>={
//     name1:"iit delhi",
//     location:'Nellore'
// }
// console.log(collegeData)
//Required
// interface CollegeType{
//     name1:string,
//     location:string,
//     students:number,
//     branch?:string
// }
// function one(data:Required<CollegeType>){
//     return data
// }
// let veo = one({name1:'IITK',location:'HYD',students:564,branch:'CSE'})
// console.log(veo)
// readonly
// interface employeeData {
//     readonly empName:string,
//     empId:number,
//     empAddress:string,
//     empSalary:number
// }
// let emp1:employeeData={
//     empName:'EmployeeOne',
//     empId:34,
//     empAddress:'Bangalore',
//     empSalary:50000
// }
// emp1.empName = 'Rahul'
// console.log(emp1)
// utility Properties in typescript
// Partial<interfaceName>
// Required<interfaceName>
// readonly<interfaceName>
// pick<interfaceName>
// interface employeeInfo {
//     empsId : string,
//     empsName:string,
//     empsAddress:string,
//     empsSalary:number,
//     empsNumber:number
// }
// let valEmpInfo:Partial<employeeInfo> = {
//     empsId:'@123',
//     empsName:'Suresh',
//     empsAddress:'Bangalore',
//     // empsSalary:5000,
//     // empsNumber:8786
// }
// console.log(valEmpInfo)
// Required
// interface employeeInfo {
//     empsId : string,
//     empsName:string,
//     empsAddress:string,
//     empsSalary ?:number,
//     empsNumber:number
// }
// let valEmpInfo:Required<employeeInfo> = {
//     empsId:'@123',
//     empsName:'Suresh',
//     empsAddress:'Bangalore',
//     empsSalary:5000,
//     empsNumber:8786
// }
// console.log(valEmpInfo)
// function newfun(data:employeeInfo){
//     return data
// }
// console.log(newfun)
// Readonly
// interface employeeInfo {
//     empsId : string,
//     empsName:string,
//     empsAddress:string,
//     empsSalary ?:number,
//     empsNumber:number
// }
// let valEmpInfo:Readonly<employeeInfo> = {
//     empsId:'@123',
//     empsName:'Suresh',
//     empsAddress:'Bangalore',
//     empsSalary:5000,
//     empsNumber:8786
// }
// valEmpInfo.empsAddress='Ind' //Not possible here to change the value becouse here we are using Readonly.
// interface employeeInfo {
//     empsId : string,
//     empsName:string,
//     empsAddress:string,
//     empsSalary :number,
//     empsNumber:number
// }
// let valEmpInfo:Pick<employeeInfo,'empsId'|'empsName' > = {
//     empsId:'@34323',
//     empsName:'Ramesh',
// }
// console.log(valEmpInfo)
"use strict";
// var userName:string = 'Shaik Munsheer'
// console.log(userName)
// // Here we are installed typescript locally.
// let age:number = 34
// console.log(age)
// let address:string = 'Nellore'
// console.log(address)
// Data Types in Type Script
// Primitive
// Object
// Special datatype
// advanced datatype
// function datatype
// Primitive Data types
// number
// string
// boolean
// null
// undefined
// bigint
// symbol
// var a:number = 45
// var b:string = 'Hello'
// let c :boolean = true
// let d: null = null
// let e:undefined = undefined
// let bigNumber: bigint = 123456789012345678901234567890n;
// console.log(bigNumber);
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)
// OBJECT TYPES
// Array
// Tuple
// Object
// let numbers:number[] = [1,2,3,4,5]
// console.log(numbers)
// let names:Array<String> = ['Hello','Bhai','Good afternoon']
// console.log(names)
// let booleans:Array<Boolean> = [true,false,true,false]
// console.log(booleans)
// let multiple_values : [string,null,number] =['Hello',null,67]
// console.log(multiple_values)
// let objects:{name:string,age:number} = {name:'Davood',age:23}
// console.log(objects)
// SPECIAL DATA TYPES IN TYPESCRIPT
// any
// unknown
// void
// never
// let a: any;
// a = 45
// a=56
// console.log(a)
// let b:unknown;
// b=67
// if(typeof b ==='number')  console.log(b)
// function one ():void{
//     console.log('Hello badsha')
// }
// one()
// function two():never{
//     throw new Error ("Something went wrong")
// }
// two()
// ADVANCED TYPES
// union
// typeAlias
// intersection
// Enum
// literaltypes
// let a:number|string = 'name'
// console.log(a)
// type Id = string | number
// let b : Id = 67
// console.log(b)
// enum Role {
//     student,
//     parent,
//     brother
// }
// let c : Role = Role.student
// console.log(c)
// let direction : "up" | "down";
// direction = 'up'
// console.log(direction)
// NUMBER DATAT TYPES IN TYPESCRIPTa
// var a:number = 13
// var b:string = "50"
// var c=Number(b)
// console.log(a+c)
// var a:number | string = 'Devarada'
// console.log(a)
// let value1 = 100
// console.log(value1)
// STRING DATA TYPE IN TYPESCRIPT
// var a:string = 'Hello'
// var b:string = a.toString()
// console.log(a+b)
// Boolean Data types in typescript
// var a:boolean = true
// var b:boolean = false
// console.log(a)
// console.log(b)
// interface cData {
//     sName:string,
//     sRoll:string,
//     sAge:number
// }
// var student1:cData ={
//     sName :'Raju',
//     sRoll : '3F45',
//     sAge:45
// }
// console.log(student1)
// TYPE IN TYPESCRIPT
// type studentsData = {name:string,age:number,address:string}
// type moreData = {rollNu:number,Idnum:number,percentageg:string}
// type alldata = studentsData & moreData
// var studentInfo:studentsData ={
//     name:'Ram',
//     age:34,
//     address:'Banglore'
// }
// console.log(studentInfo)
// var student2Info:alldata ={
//     name:'Rose',
//     age:23,
//     address:'Chennai',
//     rollNu:112,
//     Idnum:34,
//     percentageg:"45%"
// }
// console.log(student2Info)
// OOPS in Typescript Buddy
// class Product {
//     private productName:string;
//     protected productPrice:number;
//     constructor(productName:string,productPrice:number){
//         this.productName = productName
//         this.productPrice = productPrice
//     }
//     getOrder(){
//         console.log("Your ordered this ",this.productName,"with this",this.productPrice)
//     }
//     onlyForPrivate(){
//         console.log(this.productName)
//     }
// }
// var obj1 = new Product('Apple',1000)
// obj1.getOrder()
// var order2 = new Product('Banana',45)
// order2.getOrder()
// // console.log(order2.productName)
// console.log(order2.productPrice)
// order2.onlyForPrivate()
// class ChildProducts extends Product{
//     getProtected(){
//         console.log(this.productPrice)
//     }
// }
// var ob1 = new ChildProducts("Mango",65)
// ob1.getProtected()
// INHERITANCE IN TYPSCRIPT
// class Logins {
//       login(name:string,password:string){
//         if(name && password){
//             console.log('Your are Logged In')
//         }
//         else{
//             console.log('Login Failed')
//         }
//     }
// }
// class Student extends Logins {
//     percentage(marks:number){
//         if (marks>50) console.log('80%'); else console.log('you are Failed')
//     }
// }
// class Teacher extends Logins {
//     teachingSubject(subject:string){
//         console.log('This teacher is teaching this subject',subject)
//     }
// }
// var s1 = new Student()
// s1.login('Raju','raju@123')
// s1.percentage(56)
// var t1 = new Teacher()
// t1.login('SAMALA','SKDH98')
// t1.teachingSubject('Mathematics')
// Interface with class
// interface ForStudent {
//     teacherName:string
//     getDetails(): void;
// }
// class Student  implements ForStudent{
//     teacherName : string
//     constructor(teacherName:string){
//         this.teacherName = teacherName
//     }
//     getName(){
//         console.log(this.teacherName)
//     }
//     getDetails(): void {
//         console.log('Hello buddy I am implements ForStudent')
//     }
// }
// var st1 = new Student('Amritha')
// st1.getDetails()
// st1.getName()
// TypeGuards in Typescript
// function one(age: number | string) {
//   if (typeof age == "number") {
//     console.log("This is the number age ");
//   } else {
//     console.log("This is a string age ");
//   }
// }
// one(45)
// instanceof()
// class One{
// }
// var a1 = new One()
// class Two {
// }
// var a2 = new Two()
// function newData(data:One |Two){
//     if (data instanceof One)
//     console.log('The is a good one bro');else console.log('Not one')
// }
// newData('hello')
// INDEX SIGNATURE IN TYPESCRIPT
// CASE -1
// type anyData ={
//     [key:string]:number 
// }
// let students:anyData={
//     studentiD:9830943,
//     age:45,
//     mob:3434342,
//     place:908,
// }
// console.log(students)
// CASE -2
// type anyData ={
//     [key:string]:number |string
// }
// let students:anyData={
//     studentiD:9830943,
//     age:45,
//     mob:3434342,
//     place:908,
//     studentName:'Rajesh'
// }
// console.log(students)
// CASE -3
// type anyData ={
//     studentID :number,
//     studentName:string
//     [key:string]:number |string
// }
// let students:anyData={
//      studentID:9830943,
//     studentName:'Rajesh',
//     age:45,
//     mob:3434342,
//     place:908
// }
// console.log(students)
// CASE -4
// type anyData ={
//     studentID :number,
//     studentName:string
//     readonly [key:string]:number |string
// }
// let students:anyData={
//      studentID:9830943,
//     studentName:'Rajesh',
//     age:45,
//     mob:3434342,
//     place:908
// }
// console.log(students)
// UTILITY TYPES IN TYPESCRIPT
// Partial
// interface CollegeType{
//     name1:string,
//     location:string,
//     students:number,
//     branch:string
// }
// let collegeData:Partial<CollegeType>={
//     name1:"iit delhi",
//     location:'Nellore'
// }
// console.log(collegeData)
//Required
// interface CollegeType{
//     name1:string,
//     location:string,
//     students:number,
//     branch?:string
// }
// function one(data:Required<CollegeType>){
//     return data
// }
// let veo = one({name1:'IITK',location:'HYD',students:564,branch:'CSE'})
// console.log(veo)
// readonly
// interface employeeData {
//     readonly empName:string,
//     empId:number,
//     empAddress:string,
//     empSalary:number
// }
// let emp1:employeeData={
//     empName:'EmployeeOne',
//     empId:34,
//     empAddress:'Bangalore',
//     empSalary:50000
// }
// emp1.empName = 'Rahul'
// console.log(emp1)
// utility Properties in typescript
// Partial<interfaceName>
// Required<interfaceName>
// readonly<interfaceName>
// pick<interfaceName>
// interface employeeInfo {
//     empsId : string,
//     empsName:string,
//     empsAddress:string,
//     empsSalary:number,
//     empsNumber:number
// }
// let valEmpInfo:Partial<employeeInfo> = {
//     empsId:'@123',
//     empsName:'Suresh',
//     empsAddress:'Bangalore',
//     // empsSalary:5000,
//     // empsNumber:8786
// }
// console.log(valEmpInfo)
// Required
// interface employeeInfo {
//     empsId : string,
//     empsName:string,
//     empsAddress:string,
//     empsSalary ?:number,
//     empsNumber:number
// }
// let valEmpInfo:Required<employeeInfo> = {
//     empsId:'@123',
//     empsName:'Suresh',
//     empsAddress:'Bangalore',
//     empsSalary:5000,
//     empsNumber:8786
// }
// console.log(valEmpInfo)
// function newfun(data:employeeInfo){
//     return data
// }
// console.log(newfun)
// Readonly
// interface employeeInfo {
//     empsId : string,
//     empsName:string,
//     empsAddress:string,
//     empsSalary ?:number,
//     empsNumber:number
// }
// let valEmpInfo:Readonly<employeeInfo> = {
//     empsId:'@123',
//     empsName:'Suresh',
//     empsAddress:'Bangalore',
//     empsSalary:5000,
//     empsNumber:8786
// }
// valEmpInfo.empsAddress='Ind' //Not possible here to change the value becouse here we are using Readonly.
// interface employeeInfo {
//     empsId : string,
//     empsName:string,
//     empsAddress:string,
//     empsSalary :number,
//     empsNumber:number
// }
// let valEmpInfo:Pick<employeeInfo,'empsId'|'empsName' > = {
//     empsId:'@34323',
//     empsName:'Ramesh',
// }
// console.log(valEmpInfo)

