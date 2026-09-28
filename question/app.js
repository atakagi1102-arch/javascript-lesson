// Q1 変数

let nickname = 'あすか';
let age = 25;

console.log(`私のニックネームは${nickname}です。年齢は${age}です。`);

// Q2 配列
let languages = [ 'JavaScript', 'PHP', 'Ruby', 'Python', 'Go' ];
console.log(`私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`);

//Q3 オブジェクト
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};
console.log(user.age);

// Q4 配列 × オブジェクト
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];
console.log(playerList[1].favorites[1]);

// Q5 四則演算

let average = (playerList[0].age + playerList[1].age + playerList[2].age)/3;
console.log(average);

// Q6 関数
function sayHello(){
  console.log('Hello');
}
sayHello();

let sayWorld = function(){
  console.log('Hello');
}
sayWorld();

// Q7 メソッド

user.birthday = '2000-09-27';
user.sayHello = function() {
  console.log('hello');
};
user.sayHello();

// Q8 引数
// ①
let calc = {};

calc.add = function(x, y){
  console.log(x + y);
}
calc.add(3,4);

// ②
calc.subtract  = function(x, y){
  console.log(x - y);
}
calc.subtract(12,2);

// ③
calc.multiply = function(x, y){
  console.log(x * y);
}
calc.multiply(7,7);
//④
calc.divide = function(x, y){
  console.log(x / y);
}
calc.divide(25,5);

// Q9 返り値
function remainder(x, y){
  return (x % y );
}

console.log( '5を3で割った余りは' + remainder(5, 3) + 'です。' );

// Q10 スコープ
//関数内だけスコープが有効なのでxは参照できない

//********   応用編 問題       ****** */

// Q1 標準組み込みオブジェクト

let numb = Math.floor(Math.random() * 9) + 1;
console.log(numb);

// Q2 コールバック関数
setTimeout(function () {
  console.log('Hello World!');
}, 3000);

//Q3 if
let num = 1;
if(num > 0){
  console.log('num is greater than 0');
}else if(num < 0){
  console.log('num is less than 0');
}else if(num === 0){
  console.log('num is 0');
}

// Q4 for
let numbers = [];
for(let i = 0; i <= 99; i++ ){
  numbers.push(i);
}
console.log(numbers);

// Q5 for × if
let mixed = [4, '2', 5, '8', '9', 0, 1];

for(let i = 0; i < mixed.length; i++){
  if(typeof mixed[i] === 'number' && mixed[i] % 2 === 0){
    console.log('even');
  }else if(typeof mixed[i] === 'number' && mixed[i] % 2 === 1){
    console.log('odd')
  }else if(typeof mixed[i] !== 'number'){
    console.log('not number');
  }
}