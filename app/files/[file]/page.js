"use client";
import styles from "./page.module.scss";
import { filesData } from "@/files";
import Image from "next/image";
import Link from "next/link";

const bigSize = ["WinDirStat", "ImHex"];

export default function Page({ params }) {
  const file = filesData.find(
    (item) => item.name === params.file.replaceAll("%20", " "),
  );
  if (!file) {
    return (
      <div className={styles.notFound}>
        <div>
          {params.file.replaceAll("%20", " ")} не найден в списке файлов
        </div>
        <Link href={"/files"}>
          <button>Перейти к файлам</button>
        </Link>
      </div>
    );
  }
  return (
    <div className={styles.file}>
      <div className={styles.element}>
        <Image
          src={`/filesScreenshots/${file.name}/favicon.png`}
          alt={file.name}
          width={128}
          height={128}
        />
        <div className={styles.content}>
          <div>Название: {file.name}</div>
          <div>Описание: {file.description}</div>
          <div>Размер: {file.size}</div>
          <div className={styles.buttons}>
            <Link href={"/files"}>
              <button className={styles.back}>Назад</button>
            </Link>
            <a href={`/files/${file.file}`}>
              <button>Скачать</button>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.screenshots}>
        {file.screenshots.map((item) => {
          return (
            <Image
              height={bigSize.includes(file.name) ? 500 : 300}
              width={bigSize.includes(file.name) ? 700 : 400}
              key={item}
              src={`/filesScreenshots/${file.name}/${item}`}
              alt={item}
            />
          );
        })}
      </div>
    </div>
  );
}
