const isoFiles = [
  {
    name: "Windows 10.iso",
    size: "4.32 ГБайт",
    type: "windows",
  },
  {
    name: "Windows 11.iso",
    size: "4.32 ГБайт",
    type: "windows",
  },
  {
    name: "windows 11 LTSC.iso",
    size: "4.12 ГБайт",
    type: "windows",
  },
  {
    name: "proxmox 8.1-2.iso",
    size: "1.2 ГБайт",
    type: "linux",
  },
  {
    name: "archlinux 2022.07.01.iso",
    size: "795 МБайт",
    type: "linux",
  },
  {
    name: "debian 12.5.0.iso",
    size: "629 МБайт",
    type: "linux",
  },
  {
    name: "kali-linux 2019.2 desktop.iso",
    size: "3.12 ГБайт",
    type: "linux",
  },
  {
    name: "lubuntu 22.04.2 desktop.iso",
    size: "2.65 ГБайт",
    type: "linux",
  },
  {
    name: "manjaro 23.0.2 gnome desktop.iso",
    size: "3.51 ГБайт",
    type: "linux",
  },
  {
    name: "ubuntu 20.04.4 live server.iso",
    size: "1.24 ГБайт",
    type: "linux",
  },
  {
    name: "ubuntu 22.04.2 gnome desktop.iso",
    size: "4.58 ГБайт",
    type: "linux",
  },
];

const filesData = [
  {
    name: "Office 2016",
    description:
      "Программы office, такие как: Word, Excel, Access, PowerPoint, OneNote и Publisher.",
    screenshots: [],
    size: "948 МБайт",
    type: "ISO образ",
    file: "office.iso",
  },
  {
    name: "Ventoy",
    description:
      'Создание мультизагрузочной флешки. На первый взгляд, аналог Rufus или других подобный программ, НО. Очень большое НО, просто выбираем нужную флешку, нажимаем на "старт" (Все данные с флешки удалятся), ждём несколько секунд и ВСЁ. Флешка отформатируется, после чего просто закидываем на неё образы прямо в ISO формате, можно также менять им название/Удалять без какого-либо гемора.\nP.S - Одна из самых лучших программ, что когда-либо использовал. Как про неё узнал - заказал флешку на 64 гига и закинул все образы, теперь с ними больше не мучаюсь + освободились 2-3 флешки.',
    screenshots: ["1.png", "2.png"],
    size: "15.8 МБайт",
    type: "Портативный",
    file: "Ventoy portable.zip",
  },
  {
    name: "WinDirStat",
    description:
      "Отображение какие файлы забивают место на дисках + сразу их сортирует. Не раз меня выручало, когда заканчивалось место, запускал, смотрел что не нужно и удалял.",
    screenshots: ["1.png"],
    size: "630 КБайт",
    type: "Установщик",
    file: "WinDirStat setup.exe",
  },
  {
    name: "LockHunter",
    description:
      "Удаляет файл, который заблокирован системой (Открыт какой-то программой/Процессом). Можно также посмотреть что именно блокирует удалить файл/Папку и снять блокировку.",
    screenshots: ["1.png", "2.png", "3.png", "4.png"],
    size: "3.21 МБайт",
    type: "Установщик",
    file: "LockHunter setup.exe",
  },
  {
    name: "CrystalDiskMark",
    description:
      "Измерения скорости чтения и записи на различные типы накопителей, такие как жесткие диски, SSD и флеш-накопители.",
    screenshots: ["1.webp"],
    size: "3.24 МБайт",
    type: "Портативный",
    file: "CrystalDiskMark portable.zip",
  },
  {
    name: "SuperF4",
    description:
      "Закрывает любую программу и сразу с правами администратора, из-за чего при каждом запуске система будет окно с подтверждением запуска.\nP.S - Хоть у самого установлено, но ещё ни разу не использовал.",
    screenshots: [],
    size: "137 КБайт",
    type: "Установщик",
    file: "SuperF4 setup.exe",
  },
  {
    name: "ImHex",
    description:
      "Редактор бинарных файлов. Использовал один раз, чтобы крякнуть Sublime Text.",
    screenshots: ["1.png"],
    size: "204 МБайт",
    type: "Портативный",
    file: "ImHex portable.zip",
  },
];

export { filesData, isoFiles };
