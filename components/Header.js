import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="">
        <div className="flex justify-center mx-auto py-8 w-full">
          <Link href={"/"}>
            <h1 className="text-5xl text-center font-bold">
              The Pre-Workout Insider
            </h1>
          </Link>
        </div>
      </div>
    </>
  );
}
