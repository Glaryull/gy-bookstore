"use client";

import React, { useState } from "react";
type Book = {
  bookId: string;
  bookName: string;
  author: string;
  publisher: string;
  price: string;
  genre: string | undefined;
};

type Props = {
  bookData: Book[];
};

export default function ClientBookList({ bookData }: Props) {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (book: Book) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedBook(null);
    setIsModalOpen(false);
  };

  return (
    <div className="mt-4">
      {bookData.map((book) => (
        <div
          key={book.bookId}
          onClick={() => openModal(book)}
          className="cursor-pointer"
        >
          <h2 className="text-xl font-semibold">{book.bookName}</h2>
          <h3>저자 : {book.author}</h3>
          <h3>출판사 : {book.publisher}</h3>
          <h3>가격 : {book.price} 원</h3>
          <h3>장르 : {book.genre || "데이터 처리 중 이에요."}</h3>
        </div>
      ))}
      {isModalOpen && selectedBook && (
        <BookViewModal onClose={closeModal}>
          <div>
            <h2 className="text-xl font-semibold">{selectedBook.bookName}</h2>
            <h3>저자 : {selectedBook.author}</h3>
            <h3>출판사 : {selectedBook.publisher}</h3>
            <h3>가격 : {selectedBook.price} 원</h3>
            <h3>장르 : {selectedBook.genre || "데이터 처리 중 이에요."}</h3>
          </div>
        </BookViewModal>
      )}
    </div>
  );
}
