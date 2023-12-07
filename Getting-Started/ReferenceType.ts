//object type

let details: { name: string; age: number; hobbies: string[] } = {
  name: 'Rachel',
  age: 21,
  hobbies: ['violin', 'volleyball'],
};

console.log(typeof details);
var Name = details.name;
console.log(Name);
//ouptut:
object
Rachel
------------->
//array type-same type
`syntax: let arr:string[]`
let arr:string[]=['burger','pizza','starbucks'];
console.log(arr instanceof Array);
//ouptut:
true
------>
//array type-different types

`syntax: let arr:(string|number)[]`
let arr:(string|number)[]=['rush',7,'queen',90];
console.log(arr instanceof Array);
//output:
true
------------------>
//tuple-fixed collection of element 
`syntax: let arr:[number,string] -the order of the entry element inside the tuple must follow this order only`

let arr:[string,number]=['Happy',100];
console.log(arr);

//output:
['Happy',100]
---------->
//enum type-used for defining the constant elements

enum Direction{
  Left,
  Up,
  Down,
  Right
}

let direct:Direction;

console.log(Direction.Up);
  
//output:
1//gives the index oft he element 
--------->
  //any type-this type is used when we want to declare the tpe of th variable that being decided yet...may be a json api or user input
  let what:any;

console.log(typeof(what));
  //output:
any
-------------->
//void type-it is used in the function as the function returns nothing indication is called void type

function detail():void{
  console.log("currently working on it");
}

detail();

//output:
currently working on it
