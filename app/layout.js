import "./globals.scss";
import CustomBody from "@/modules/CustomBody/CustomBody";

export const metadata = {
  title: "FCloud",
  description: "Полезные программы/Файлы",
  openGraph: {
    title: "FCloud",
    description: "Полезные программы/Файлы",
    siteName: "OB1LAB",
    locale: "ru_RU",
    type: "website",
    images: "https://fcloud.ob1lab.ru/favicon.png",
    url: "https://fcloud.ob1lab.ru",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#ff00ff",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <CustomBody>{children}</CustomBody>
    </html>
  );
}
