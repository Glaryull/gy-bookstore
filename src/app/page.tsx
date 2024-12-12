import { Book1 } from "iconsax-react";

export default async function Home() {
  return (
    <div className="flex items-center justify-center w-full">
      <main className="flex flex-row items-start gap-15 p-10">
        <Book1
          variant="Bold"
          size={200}
          color="#ea580c"
          className="flex items-center self-center"
        />
        <section className="flex p-10 flex-col gap-10 font-extrabold text-3xl">
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
            도서 별 상세 페이지 수정이 가능해요.
          </h2>
        </section>
      </main>
    </div>
  );
}
