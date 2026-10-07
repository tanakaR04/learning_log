/*
  ========================================
  page.tsx — トップページ（/）
  ========================================
  学ぶこと:
  - app/page.tsx = ルート URL「/」のページ
  - map でリストを作る（ReactTodoApp と同じ）
  - next/link の Link でクライアント遷移（フルリロードしない）
  - key はリストの各要素に必須
*/

import Link from "next/link";
import { users } from "./lib/users";

export default function Home() {
  // users 配列 → <li> の配列へ変換
  const userItems = users.map((user) => {
    return (
      <li key={user.id}>
        {/*
          href={`/users/${user.id}`}
          → /users/0, /users/1, /users/2 のような動的ルートへ
          （対応ファイル: app/users/[userId]/page.tsx）
        */}
        <Link
          href={`/users/${user.id}`}
          className="text-blue-500 hover:text-blue-700"
        >
          {user.name}
        </Link>
      </li>
    );
  });

  return (
    <>
      {/*
        Tailwind の例:
        text-lg = 大きめの文字
        border-b = 下線
        list-disc = 箇条書きの点
      */}
      <h1 className="text-lg border-b pb-1 mb-1">Users</h1>
      <ul className="list-disc ml-4">{userItems}</ul>
    </>
  );
}
