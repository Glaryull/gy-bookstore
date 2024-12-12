import Link from "next/link";
import React from "react";
import Search from "./Search";

export default function Header() {
  const navBar = {
    storeMain: "홈",
    bookList: "도서 목록",
    bookSetting: "도서 정보 편집",
  };
  return (
    <header className="flex flex-col items-center justify-center w-full h-[400px]">
      <nav className=" w-full bg-gray-50 border-b justify-end border-gray-100">
        <ul className="flex text-4xl font-bold text-center text-gray-700 gap-10 p-5">
          <button className="flex w-full items-center justify-center gap-10 p-20 ">
            <Link href={"/"} className=" hover:text-orange-600 ">
              {navBar.storeMain}
            </Link>
          </button>
          <button className="w-full p-20 flex items-center justify-center gap-10">
            <Link href={"./bookList"} className=" hover:text-orange-600">
              {navBar.bookList}
            </Link>
          </button>
          <button className="w-full p-20 flex items-center justify-center gap-10">
            <Link href={"./bookSetting"} className=" hover:text-orange-600 ">
              {navBar.bookSetting}
            </Link>
          </button>
        </ul>
      </nav>
      <Search />
    </header>
  );
}
