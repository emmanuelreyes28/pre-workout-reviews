import { FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="">
        <div className="flex justify-center text-center">
          <p className="text-base font-medium">Emmanuel Reyes &copy; {year}</p>
        </div>
        <div className="flex justify-center text-center py-2">
          <Link href={"https://github.com/emmanuelreyes28/pre-workout-reviews"}>
            <FaGithub className="text-black hover:text-indigo-700" size={24} />
          </Link>
        </div>
      </footer>
    </>
  );
}
