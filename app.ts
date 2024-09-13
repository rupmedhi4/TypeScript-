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



