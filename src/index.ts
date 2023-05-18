// const plusOne = (x:number) => x + 1

// console.log(`1 + 1 = ${plusOne(1)}`)

//////////////////////

// let age:number = 20

// if(age < 50 )
//   age+=10
//   console.log(age)

////////////////////////
// let sales: number = 123_456_789;
// let course: string = 'Typescript';
// let is_published: boolean = true;
// let level
// function render(params: any) {
//   console.log(params)
// }
// let user: [number, string] = [1, 'a']

///////////////
// enum
//  enum Size{Small =1, Medium=2, Large=3}
// let mySize:Size = Size.Medium
// console.log(mySize);
// const enum Size1{Small =1, Medium=2, Large=3}
// let mySize1:Size1 = Size1.Medium
// console.log(mySize);
/////////////
// function calculateTaxa(income:number,taxYear=2022):number {
//   if( taxYear > 2023)
//     return income *1.2
//   return income
// }
// calculateTaxa(10_000)
////////////////////

let employee:{
  readonly id:number,
  name:string,
  retire: (date:Date) => void
}={
  id:1,
  name:'a',
  retire:(date:Date)=>{
    console.log(date);
    
  }
}
