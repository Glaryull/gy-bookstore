import fetchShowBookList from "@/requests/bookList/fetchShowBookList";
import React from "react";

type Props = {
  children: React.ReactNode;
  params: { bookId: string; bookName: string; author: string };
};

export default async function bookSettingPage({ children, params }: Props) {
  const { bookId, bookName, author } = params;
  const { data: bookData } = fetchShowBookList({ bookId, bookName, author });
  return (
    <div>
      <h1 className="overflow-hidden text-gray-700 font-bold items-center text-center">
        도서 관리 및 상세정보 편집을 할 수 있어요.
      </h1>
      {children}
    </div>
  );
}
