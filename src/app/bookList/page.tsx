import React from "react";

type Props = {};

export default function bookListPage({}: Props) {
  return (
    <div>
      <h1 className="overflow-hidden text-gray-700 font-bold items-center text-center">
        책 목록을 검색할 수 있어요. 제목과 저자 별로 검색을 할 수 있어요.
      </h1>
    </div>
  );
}
