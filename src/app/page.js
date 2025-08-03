import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="grid grid-rows-[auto_1fr_auto] min-h-screen"> {/*  grid-rows-[20px_1fr_20px] */}
        <Image
          src="/ellipse1.svg"
          alt="ellipse1"
          width={400}
          height={300}
          className="w-50 sm:w-60 md:w-80 lg:w-[400px] h-auto"
        />
        <main className="items-center justify-items-center p-8 pb-20 gap-16">
          <h1>Interactive Dashboard</h1>
          <h2>working in progress</h2>
        </main>
        <footer className="row-start-3">
        <div className="flex flex-wrap justify-between items-end w-full">
          <a href="https://itscarine.com" className="underline p-4">
            itscarine.com
          </a>
          <Image
            src="/ellipse2.svg"
            alt="ellipse2"
            width={400}
            height={300}
            className="w-40 sm:w-60 md:w-80 lg:w-[400px] h-auto"
          />
        </div>
        </footer>
      </div>
    </>
  );
}