/*
  ========================================
  users/[userId]/page.tsx — 動的ルート
  ========================================
  学ぶこと:
  - [userId] フォルダ名 = URL の可変部分
    /users/0 → params.userId === "0"（文字列）
  - Props の型を interface で定義する
  - 存在しない ID なら notFound() で 404 へ
  - @/ は tsconfig のパスエイリアス（app を指すことが多い）
*/

import { users } from "@/app/lib/users";
import Link from "next/link";
import { notFound } from "next/navigation";

// このページが受け取る props の形
// App Router では URL パラメータが params に入る
interface Props {
  params: { userId: string }; // URL 由来なので number ではなく string
}

export default function UserPage(props: Props) {
  // "0" などの文字列 → 数値に変換して配列のインデックスとして使う
  const user = users[Number(props.params.userId)];

  // 範囲外（例: /users/99）なら専用の not-found を表示
  if (user === undefined) {
    notFound();
  }

  return (
    <>
      <h1 className="text-lg border-b pb-1 mb-1">
        {user.name}
      </h1>
      <p>{user.prof}</p>
      <p className="mt-4">
        {/* トップ（/）へ戻る */}
        <Link href="/" className="text-blue-500 hover:text-blue-700">
          Go back
        </Link>
      </p>
    </>
  );
}
