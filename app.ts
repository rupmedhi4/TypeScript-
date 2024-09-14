// // let num1:number = 1

// // function calculate(num1:number,num2:number){
// //     return num1 + num2
// // }

// // console.log(calculate(num1,3))



// function getTotal(numbers:Array<number> ){   // 2way se hum array ko type de sakte hai : number[] & Array<number> isko generic bolte hai
//     return numbers.reduce((acc,item)=>{
//         return acc + item
//     },0)
// }

// console.log(getTotal([3,2,1]));


// const user ={
//     firstName :"rup",
//     lastName :"medhi",
//     role:"professor"
// }


// console.log(user)


//type alias 
// type User ={
//     name :string;
//     age:number;
//     address? : string   // ? iska matlab hota hai ki address property optional hai
// }

// const user :User={
//     name :"rup",
//     age :24,
// }

// function login(userData:User):User{
//     return userData
// }

// console.log(login({name:"rup",age:24 }))




// interfaces
// interface Transaction {
//    payerAccountNumber : number;
//    payeeAccountNumber : number;
// }

// interface BankAccount {
//     accountNumber :number;
//     accountHolder :string;
//     balance :number;
//     isActive:boolean;
//     transactions : Transaction[]; 

// }

// const transaction1:Transaction ={
//     payeeAccountNumber:123,
//     payerAccountNumber:456
// }
// const transaction2:Transaction ={
//     payeeAccountNumber:123,
//     payerAccountNumber:456
// }

// const bankAccount:BankAccount = {
//     accountNumber:123,
//     accountHolder:"rup",
//     balance:1000,
//     isActive:true,
//     transactions:[transaction1,transaction2]
// }





//extend
// interface Book{
//     name :string;
//     price:number;
// }
// interface EBook extends Book {
//     // name: string;
//     // price: number;
//     fileSize:number;
//     format:string
// }
// interface AudioBook extends EBook {
//     // name: string;
//     // price: number;
//     // fileSize:number;
//     // format:string;
//     duration:number
// }


// const book :Book={
//     name :"computer science",
//     price:123   
// }



// merge property interface
// interface Book {
//     name :string;
//     price: number;
// }

// interface Book{
//     size:number;
// }


// const book:Book={
//     name:"the jungle book",
//     price :123,
//     size:12
// }



// type SanitizedString = string;
// type EvenNumber = number


//Unions

// type ID = number | string;

// //narrowing
// function printId(id:ID){
//     if(typeof id === "string"){
//             console.log(id.toUpperCase());
//     }else{
//         console.log(id);
        
//     }
     
// }

//printId(1)


// function getFirstThree(x:string | number[]){
//     return x.slice(0,3)
// }

// // generics

// function logString(arg:string){
//     console.log(arg)
//     return arg
// }
// logString('logged in')


// function logNumber(arg:number){
//     console.log(arg)
//     return arg
// }
// logNumber(1);

// function logArray(arg:any[]){
//     console.log(arg)
//     return arg
// }
// logArray([2,3,4]);


// function logAnything <T>(arg:T):T{
//     console.log(arg)
//     return arg
// }
// logAnything([2,3,4]);


// interface HasAge{
//     age:number
// }

// function getOldest<T extends HasAge>(people:T[]):T{
//    return people.sort((a,b)=>b.age - a.age)[0]
// }

// const people:HasAge[] = [{age:30},{age:40},{age:10}]


// interface Player{
//     name:string,
//     age :number
// }



// const players:Player[] = [
//     {name:"rup",age:30},
//     {name:"jyoti",age:20},
//     {name:"medhi",age:10},
// ]

// //assertion
// //getOldest(players) as Player

// const person = getOldest(players) 

// //Generics
// person.name
 
 
interface IPost {
    title :string;
    id:number;
    description :string
}
interface IUser {
    name :string;
    id:number;
    age :string
}

const  fetchPostData= async(path:string):Promise<IPost[]>=>{
    const response = await fetch(`http://example.com${path}`)
    return response.json()
}
const  fetchUserData= async<ResultType>(path:string):Promise<ResultType>=>{
    const response = await fetch(`http://example.com${path}`)
    return response.json()
}


(async()=>{
   //const posts = await fetchPostData('/posts')
   const userData = await fetchUserData<IUser[]>("/users")
})()




