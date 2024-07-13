"use client";
import Link from "next/link";
export default function Home() {
  return (
    <div className="fcloud">
      <div>
        FCloud - Псевдо облако (Написанное за пару часов), в котом я храню
        полезные, на свой взгляд, программы, ISO-образы и команды для активации
        винды
      </div>
      <div className="fbuttons">
        <Link href="/files">
          <button>Файлы</button>
        </Link>
        <Link href="/iso">
          <button>ISO образы</button>
        </Link>
      </div>
    </div>
  );
}
