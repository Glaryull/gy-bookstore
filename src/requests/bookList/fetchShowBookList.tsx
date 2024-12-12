type Props = {
  bookId: string;
  bookName: string;
  author: string;
};

type Response = {
  bookId: string;
  bookName: string;
  author: string;
  publisher: string;
  price: string;
  genre:
    | "novel"
    | "essay"
    | "science"
    | "science fiction"
    | "megazine"
    | undefined;
  bookType: "국내도서" | "외국도서" | "eBook";
  sellingQuantity: number;
  inventoryQuantity: number;
  orderQuantity: number;
};

const MOCK_DATA: Response[] = [
  {
    bookId: "1",
    bookName: "소년이 온다",
    author: "한강",
    publisher: "창비",
    price: "13,500",
    genre: undefined,
    bookType: "국내도서",
    sellingQuantity: 100000,
    inventoryQuantity: 1000,
    orderQuantity: 5000,
  },
  {
    bookId: "2",
    bookName: "지구 끝의 온실",
    author: "김초엽",
    publisher: "창비",
    price: "18,000",
    genre: "science fiction", // "science fiction"의 철자 수정
    bookType: "국내도서",
    sellingQuantity: 40000,
    inventoryQuantity: 100,
    orderQuantity: 3000,
  },
];

// 반환 타입을 명확히 정의
export default function fetchShowBookList({
  bookId,
  bookName,
  author,
}: Props): { data: Response[] } {
  const filteringBooks = MOCK_DATA.filter((book) => {
    return (
      (!bookId || book.bookId === bookId) &&
      (!bookName || book.bookName.includes(bookName)) &&
      (!author || book.author.includes(author))
    );
  });

  return { data: filteringBooks };
}
