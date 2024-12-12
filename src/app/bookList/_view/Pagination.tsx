"use client";
import { ArrowLeft2 } from "iconsax-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {
  currentPage: number;
  totalPages: number;
  pageGroupSize: number;
  onPageChange: PageChangeHandler;
  children: React.ReactNode;
};
type PageChangeHandler = (page: number) => void;

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={`mx-auto flex w-full justify-center gap-1 ${className}`}
  />
);
Pagination.disPlayName = "Pagination";

export default async function ListPagination({
  currentPage,
  totalPages,
  pageGroupSize,
  onPageChange,
  children,
}: Props) {
  const currentPageGroup = Math.floor(currentPage / pageGroupSize);
  const pageStart = currentPageGroup * pageGroupSize + 1;
  const pageEnd = Math.min(pageStart + pageGroupSize - 1, totalPages);
  return (
    <div>
      {/*이전페이지 클릭 */}
      <button
        onClick={(e) => {
          e.preventDefault();
          if (currentPageGroup > 0) onPageChange(pageStart - pageGroupSize);
        }}
      >
        <Link
          href="#"
          className={
            currentPageGroup === 0
              ? "pointer-events-none opacity-40"
              : undefined
          }
        >
          <ChevronLeft />
          {/*다음페이지 클릭*/}
        </Link>
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          if (currentPageGroup > 0) onPageChange(pageStart + 1);
        }}
      >
        <Link
          href="#"
          className={
            currentPageGroup === 0
              ? "pointer-events-none opacity-40"
              : undefined
          }
        >
          <ChevronRight />
        </Link>
      </button>
    </div>
  );
}
