import Link from "next/link";
import { ArrowLeft } from "./components/icons";

export default function Footer() {
  return (
    <footer className="bg-[#F2F7FF]">
      <div className=" mx-auto max-w-[1440px] py-14 border-b">
        <div className="grid grid-cols-3 items-end">
          <h2 className="text-black text-7xl font-medium">
            Let’s <br /> work <br />
            together
          </h2>
          <div className="flex items-center gap-8">
            <ArrowLeft />
            <h2 className="text-[#2F80ED]">aribidoolusegun@gmail.com</h2>
          </div>
          <h4 className="text-black text-base">
            Do you have an interesting project? I’ll love to hear from you.
            Reach out and let’s create something amazing together.
          </h4>
        </div>
        <div className="flex justify-between border-t border-[#556070] mt-10 pt-4">
          <h2 className="text-[#5A6474]">Copyright @ 2025 Olusegun Aribido</h2>
          <ul className="text-black flex items-center gap-6">
            <li>
              <Link
                className="border-b"
                href="https://www.linkedin.com/in/olusegun-aribido/"
              >
                LinkedIn
              </Link>
            </li>
            <li>
              <Link className="border-b" href="https://x.com/kadunaconnect">
                Twitter
              </Link>
            </li>
            <li>
              <Link
                className="border-b"
                href="https://medium.com/@olusegunaribido"
              >
                Medium
              </Link>
            </li>
            <li>
              <Link
                className="border-b"
                href="https://dribbble.com/segunaribido"
              >
                Dribble
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
