import React from "react";
import Pagination from "./_view/Pagination";

// const TABS = [{ labelName: "전체", value: "all" },
//     {labelName:''}
// ];
type Props = {
  params: { bookId: string; bookName: string; author: string };
  serchParams: {};
};

export default async function bookListPage({}: Props) {
  return (
    <div className="container">
      <h1 className="overflow-hidden text-gray-700 font-bold items-center text-center">
        책 목록을 검색할 수 있어요. 제목과 저자 별로 검색을 할 수 있어요.
      </h1>
      <section></section>
    </div>
  );
}
