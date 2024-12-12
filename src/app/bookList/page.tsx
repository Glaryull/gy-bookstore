import React from "react";
import Pagination from "./_view/Pagination";

type Props = {
  params: {};
};

export default async function bookListPage({}: Props) {
  function pageChangeHandler(page: number): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="container">
      <h1 className="overflow-hidden text-gray-700 font-bold items-center text-center">
        책 목록을 검색할 수 있어요. 제목과 저자 별로 검색을 할 수 있어요.
      </h1>
      <section></section>
      <Pagination
        currentPage={1}
        totalPages={10}
        pageGroupSize={24}
        onPageChange={pageChangeHandler}
        children={undefined}
      />
    </div>
  );
}
