"use client";
import { isoFiles } from "@/files";
import Image from "next/image";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import Link from "next/link";
import styles from "./page.module.scss";
export default function Home() {
  const { width } = useWindowDimensions();
  return (
    <div>
      <div
        className="activations"
        style={{
          width: `${width >= 1146 ? "942px" : width < 1146 ? "482px" : "fit-content"}`,
        }}
      >
        <div>
          <div>Шаги активации для windows 10/11</div>
          <div>1. Открыть командную строку от имени администратора</div>
          <div>
            2. Вписать поочерёдно следующие команды (Первая для Pro, вторая для
            LTSC):
          </div>
          <p>{'slmgr /ipk "W269N-WFGWX-YVC9B-4J6C9-T83GX"'}</p>
          <p>{'slmgr /ipk "NPPR9-FWDCX-D2C8J-H872K-2YT43"'}</p>
          <p>slmgr /skms kms.digiboy.ir</p>
          <p>slmgr /ato</p>
        </div>
      </div>
      <div
        className="elements"
        style={{
          width: `${width >= 1146 ? "942px" : width < 1146 ? "482px" : "fit-content"}`,
        }}
      >
        <div className={styles.element}>
          <Image src={`/file-explorer.png`} alt="iso" width={96} height={96} />
          <div className={`${styles.program} ${styles.iso}`}>
            <div className={styles.element}>Файлы</div>
            <Link href={`/files`}>
              <button className={styles.about}>Перейти</button>
            </Link>
          </div>
        </div>
        {isoFiles.map((item) => {
          return (
            <div className={styles.element} key={item.name}>
              <Image
                src={`/${item.type}.png`}
                alt={item.type}
                width={96}
                height={96}
              />
              <div className={styles.program}>
                <div className={styles.name}>Название: {item.name}</div>
                <div className={styles.name}>Размер: {item.size}</div>
                <Link href={`/iso/${item.name}`}>
                  <button className={styles.download}>Скачать</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
