/*
  ========================================
  users/not-found.tsx — この階層専用の 404
  ========================================
  学ぶこと:
  - notFound() が呼ばれたとき、近い not-found.tsx が表示される
  - app/users/ 配下にあるので、ユーザー詳細が見つからないときに使われる
  - ファイル名は Next.js の決まり（not-found.tsx 固定）
*/

import Link from "next/link";

export default function UserNotFoundPage() {
  return (
    <>
      <h1 className="text-lg border-b pb-1 mb-1">Error!</h1>
      <p>User not found!</p>
      <p className="mt-4">
        <Link href="/" className="text-blue-500 hover:text-blue-700">
          Go back
        </Link>
      </p>
    </>
  );
}
