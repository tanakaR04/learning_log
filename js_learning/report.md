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

# 20260803
関数編開始

### return
returnを使用するとき
```javascript
{
    function sum(a, b){
        return a + b;
    }

    console.log(sum(300, 700));
}
```
returnを使用しないとき
```javascript
{
    function sum(a, b){
        console.log(a + b);
    }

    sum(300, 700));
}
```
関数の結果を使ってほかの計算をしたい場合、returnを使用する。
returnを使用しないときはreturn undefined;を返していることになる。

### 関数のデフォルト値
仮引数のところであらかじめデフォルト値を設定しておくと、呼び出す時に指定していない場合にデフォルト値を使用する
```javascript
'use strict';

{
  function calculateTotal(price, amount, rate = 1.1) {
    return price * amount * rate;
  }

  console.log(calculateTotal(100, 10));
  console.log(calculateTotal(150, 10));
  console.log(calculateTotal(200, 10));
  console.log(calculateTotal(120, 10, 1.08));
}
```

### 関数のスコープ
関数の引数はその関数の中でのみ参照できる。なので異なる関数ではスコープが異なるため、同じ引数名を使い回すことができる。

###  関数式
```javascript
{
  console.log(double(10));

  // 関数宣言
  function double(num) {
    return num * 2;
  }

  // 関数式
    const double = function(num) {
        return num * 2;
    };
}
```
関数宣言ではどの位置で宣言しても一番最初に宣言したことになる。間数式では先に宣言しないといけない。

### アロー関数
```javascript
{
  // 関数宣言
  // function double(num) {
  //   return num * 2;
  // }

  // アロー関数式
  const double = (num) => {
    return num * 2;
  };

  // const double = num => {
  //   return num * 2;
  // };

  // const double = num => num * 2;

  console.log(double(10));
}
```

### 関数の引数に関数を使う
```javascript
{
  const double = (num) => {
    return num * 2;
  };
  
  const calc = (num, func) => {
    return func(num);
  };

  consolo.log(calc(20, double));//関数名のみでいい

}
```
```javascript
{
  const calc = (num, func) => {
    return func(num);
  };

  console.log(calc(20, (num) => { 
    return num * 2; 
  }));
}
```
アロー関数であれば、定義を引数の部分に書くことができる。

# 20260807
## 配列
```javascript
Array.push(x);
//配列[Array]の末尾にxを追加
Array.pop()
// 配列の末尾を取り除く
Array.unshift(x)
// 配列の先頭にxを追加
Array.shift()
// 先頭を取る
Array.splice(start, n, item1, item2, ...)
// start => 変化する位置のインデックス
// n => 削除する要素の数
// item1, item2, ... => 追加する要素（省略可）


Array.join()
Array.split()
{
  const names = ['Taro', 'Jiro', 'Saburo'];

  // Taro|Jiro|Saburo　と表示したい
  console.log(names.join('|'));

  const names = 'Taro|Jiro|Saburo';
  console.log(names.split('|'));
  // ['Taro', 'Jiro', 'Saburo']
}
```

### map
```javascript
{
  const prices = [100, 150, 200];

  // const pricesWithTax = [];
  // prices.forEach((price) => {
  //   pricesWithTax.push(price * 1.1);
  // });

  const pricesWithTax = prices.map((price) => {
    return price * 1.1;
  });

  console.log(pricesWithTax);
}

{
  const prices = [100, 150, 200];

  // const pricesOver150 = [];
  // prices.forEach((price) => {
  //   if (price >= 150) {
  //     pricesOver150.push(price);
  //   }
  // });

  const pricesOver150 = prices.filter((price) => {
    return price >= 150;
  });

  console.log(pricesOver150);
}
```

### レスト構文とスプレッド構文
```javascript
'use strict';

{
  const scores = [70, 90, 80, 85];
  const [first, ...others] = scores;

  console.log(first);
  console.log(others);
}
/// 70
/// [90, 80, 85]

'use strict';

{
  const moreScores = [77, 88];
  const scores = [70, 90, 80, 85, ...moreScores];
  const [first, ...others] = scores;

  console.log(first);
  console.log(others);
}
// 70
// [90, 80, 85, 77, 88]
```
オブジェクトでも同じように用いれる
# 20260809
##