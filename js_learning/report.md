# 20260802
## 文字列
-基本的に`○○ ${} ${} ○○`を使用するのがいいと思う。  
-console.log(50 + '20') 片方が文字列だと、もう片方が数値でも文字列になる。  
-promopt('');で文字列を入力させる表示を出すことができる  
-文字列を数値に変換させるにはNumber(n)を使用する。  

## 条件分岐
### switch
取りうる値が決まってい場合、switchのほうがすっきりかけたりする。  
```javascript
const color = prompt('Color?');  

switch (color) {  
  case 'red':  
    console.log('Stop!');  
    break;  
  case 'yellow':  
    console.log('Slow down!');   
    break;  
  case 'blue':  
  case 'green':
    console.log('Go!');
    break;
  default: //扱わない条件の時
    console.log('Wrong color');
    break;
}
```

## 反復処理
### for(){}
```javascript
for (let i = 1; i <= 10; i++) {
    // console.log('Hello');
  console.log(`${i}: Hello`);
}
```
### 
### while
()の条件の間、処理を繰り返す
```javascript
let command = Number(prompt('Menu 1, 2, 3 or 0 to exit'));

while(command !== 0){
    console.log(`Menu ${command} processed.`);
    command = Number(prompt('Menu 1, 2, 3 or 0 to exit'));
}
```
### do-while
while構文の別の形  
必ず1回は実行されるため、何らかの処理をしておかなければならない
```javascript
let command;

do {
  command = Number(prompt('Menu 1, 2, 3 or 0 to exit'));
  if (command === 0) {
    console.log('Exited');
  } else {
    console.log(`Menu ${command} processed.`);
  }
} while (command !== 0);
```

### break　と　continue
breakは反復処理全体から抜けるための命令  
continueは反復処理の途中でそれ以降の処理をスキップして、次の反復処理に移るための命令

## 条件演算子
```javascript
const score = Number(prompt('Score?'));
const result = score > 80 ? 'A' : 'B';
console.log(result);
```
score > 80 が条件  
それを満たすとき、左側。満たさないとき右側。
最終的に1つの値をなるため、定数や変数に代入して使うことができる。

## 論理演算子
AかつB　A && B
AまたはB A || B
Aではない !A

## スコープ
コード全体で有効なスコープをグローバルスコープ  
{}内で宣言された定数や変数がローカルスコープ  
```javascript
let x = 10;

{
  // let x = 20;
  x = 20;
  console.log(x); // 20
}

console.log(x); // 20
```
```javascript
let x = 10;

{
  let x = 20;
  console.log(x); // 20
}

console.log(x); // 10
```
このように{}で宣言しないとだめ

基礎文法編終了