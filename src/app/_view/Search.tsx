"use client";
import Link from "next/link";
import { MouseEventHandler, useState, ChangeEventHandler } from "react";

type Props = {
  children?: React.ReactNode;
};
const BOOK_DATA = [
  { nameData: "채식주의자", authorData: "한강" },
  { nameData: "작별하지않는다", authorData: "한강" },
  { nameData: "서랍에 저녁을 넣어 두었다", authorData: "한강" },
  { nameData: "소년이 온다", authorData: "한강" },
  { nameData: "흰", authorData: "한강" },
  { nameData: "트렌드 코리아 2025", authorData: "김난도" },
  { nameData: "모순", authorData: "양귀자" },
  { nameData: "트럼프 2.0 시대", authorData: "박종훈" },
  { nameData: "넥서스", authorData: "유발 하라리" },
];

export default function Search({ children }: Props) {
  const [result, setResult] = useState("");
  const [search, setSearch] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(BOOK_DATA);

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.currentTarget;
    setSearch(value);
    setFilteredBooks(
      BOOK_DATA.filter(
        (book) =>
          book.nameData.includes(value) || book.authorData.includes(value)
      )
    );
  };
  const onAddResultClick: MouseEventHandler<HTMLLIElement> = (e) => {
    const { textContent } = e.currentTarget;
    setResult(textContent as string);
    setSearch("");
    setFilteredBooks(BOOK_DATA); // 초기화
  };

  return (
    <main className="flex container items-center justify-center p-10">
      <section className=" relative flex w-full items-center mx-20 rounded-lg border-orange-600 border-4">
        <input
          className="w-full focus:outline-none rounded-lg h-30 text-2xl font-medium bg-white p-2"
          type="search"
          onChange={onChange}
          value={search}
          placeholder="제목이나 저자를 검색해 주세요!"
        />
        {search && filteredBooks.length > 0 && (
          <ul className="absolute bg-white border border-gray-300 rounded z-10">
            {filteredBooks.map((book, idx) => (
              <li
                key={idx}
                onClick={onAddResultClick}
                style={{ cursor: "pointer" }}
                className="text-lg font-medium flex-col p-2 hover:bg-orange-100"
              >
                <Link href={""}>
                  {book.nameData} [{book.authorData}]
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
      <div className="text-2xl font-medium">{children}</div>
    </main>
  );
}
