"use client";
import { filesData } from "@/files";
import Image from "next/image";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import Link from "next/link";
export default function Home() {
  const { width } = useWindowDimensions();
  return (
    <div
      className="elements"
      style={{
        width: `${width >= 1212 ? "1012px" : width >= 1012 ? "682px" : width >= 882 ? "682px" : width < 882 ? "352px" : "fit-content"}`,
      }}
    >
      <div className="element">
        <Image src={`/iso.png`} alt="iso" width={96} height={96} />
        <div className="program iso">
          <div className="name">ISO Образы</div>
          <Link href={`/iso`}>
            <button className="about">Перейти</button>
          </Link>
        </div>
      </div>
      {filesData.map((item) => {
        return (
          <div className="element" key={item.name}>
            <Image
              src={`/filesScreenshots/${item.name}/favicon.png`}
              alt={item.name}
              width={96}
              height={96}
            />
            <div className="program">
              <div className="name">Название: {item.name}</div>
              <Link href={`files/${item.name}`}>
                <button className="about">Подробно</button>
              </Link>
              <Link href={`/files/${item.file}`}>
                <button className="download">Скачать</button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
