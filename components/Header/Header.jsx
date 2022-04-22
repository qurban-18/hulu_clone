import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
  HomeIcon,
  BadgeCheckIcon,
  CollectionIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

const Header = () => {
  const headerItems = [
    { icon: HomeIcon, title: "HOME" },
    { icon: LightningBoltIcon, title: "TRENDING" },
    { icon: BadgeCheckIcon, title: "VERIFIED" },
    { icon: CollectionIcon, title: "COLLECTIONS" },
    { icon: SearchIcon, title: "SEARCH" },
    { icon: UserIcon, title: "ACCOUNT" },
  ];

  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        {headerItems.map((item, index) => (
          <HeaderItem key={item + index} title={item.title} Icon={item.icon} />
        ))}
      </div>
      <Image
        className="object-contain"
        src="https://i.postimg.cc/qMDS9t8g/851-8516462-hulu-logo-on-black.png"
        width={100}
        height={50}
      />
    </header>
  );
};

export default Header;
