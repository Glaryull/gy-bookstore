// src/app/bookSetting/page.tsx
import fetchShowBookList from "@/requests/bookList/fetchShowBookList";
import React from "react";
import BookViewModal from "./_view/BookViewModal";

type Props = {
  params: { bookId: string; bookName: string; author: string };
};

export default async function BookSettingPage({ params }: Props) {
  const { bookId, bookName, author } = params;
  const { data: bookData } = await fetchShowBookList({
    bookId,
    bookName,
    author,
  });

  return (
    <div>
      <h1 className="overflow-hidden text-gray-700 text-2xl font-bold items-center text-center">
        도서 관리 및 상세정보 편집을 할 수 있어요.
      </h1>
      {bookData && bookData.length > 0 ? (
        <BookViewModal bookData={bookData} />
      ) : (
        <p>도서 정보를 찾을 수 없습니다.</p>
      )}
    </div>
  );
}
