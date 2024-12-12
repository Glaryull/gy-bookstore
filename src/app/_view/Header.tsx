import Link from "next/link";
import React from "react";

export default function Header() {
  const navBar = {
    storeMain: "홈",
    bookList: "도서 목록",
    bookSetting: "도서 정보 편집",
  };
  return (
    <header className="flex flex-col w-full h-[400px]">
      <nav className=" w-full bg-gray-50 border-b justify-end border-gray-100">
        <ul className="text-4xl font-bold text-center text-gray-700 ">
          <div className="flex gap-10">
            <button className="w-200 p-20">
              <Link href={"/"} className=" hover:text-orange-600 ">
                {navBar.storeMain}
              </Link>
            </button>
            <button className="w-200 p-20">
              <Link href={"./bookList"} className=" hover:text-orange-600">
                {navBar.bookList}
              </Link>
            </button>
            <button className="w-200 p-20">
              <Link href={"./bookSetting"} className=" hover:text-orange-600 ">
                {navBar.bookSetting}
              </Link>
            </button>
          </div>
        </ul>
      </nav>
    </header>
  );
}
