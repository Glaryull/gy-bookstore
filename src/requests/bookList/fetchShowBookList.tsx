type ListProps = {
  bookId: string;
};

type ListResponse = {
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
const MOCK_DATA = [
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
    price: "18000",
    genre: "science Fiction",
    bookType: "국내도서",
    sellingQuantity: 40000,
    inventoryQuantity: 100,
    orderQuantity: 3000,
  },
];
export default async function fetchShowBookList({ bookId }: ListProps) {
  return { data: MOCK_DATA as ListResponse[] };
}
