/*
  ========================================
  users.ts — TypeScript の「型」とデータの教科書
  ========================================
  学ぶこと:
  - interface … オブジェクトの形を定義する
  - User[] … User 型の配列
  - export … 他ファイルから import できるように公開する
*/

// ユーザー1人分の「形」を決める
// あとから name を number にしたり、prof を忘れたりすると型エラーになる
interface User {
  id: number;
  name: string;
  prof: string;
}

// users は必ず User の配列である、と TypeScript に伝える
export const users: User[] = [
  { id: 0, name: "Taro", prof: "He is good" },
  { id: 1, name: "jiro", prof: "He is cool" },
  { id: 2, name: "Saburo", prof: "He is smart" },
];
