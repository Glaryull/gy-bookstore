export default async function Home() {
  return (
    <div className="flex flex-col items-center justify-start w-full h-min">
      <main className="flex flex-col items-start font-extrabold text-3xl justify-center gap-20">
        <h1 className="text-gray-700 font-bold">
          관리자의 도서관리를 도와줘요!
        </h1>
        <h2 className="text-gray-700 font-bold">
          제목과 저자 별로 검색을 할 수 있어요.
        </h2>
        <h2 className="text-gray-700 font-bold">
          책별 판매량을 확인할 수 있어요.
        </h2>
        <h2 className="text-gray-700 font-bold">
          상세 페이지 수정이 가능해요.
        </h2>
        <section className="items-center"></section>
      </main>
    </div>
  );
}
