import Image from "next/image";

import { listItems } from "./constants";
import MenuItem from "./MenuItem";

const MainMenu = () => {
  return (
    <section aria-label="main-menu" className="flex w-full flex-col gap-14">
      <Image
        height={230}
        width={400}
        alt="coffee-image"
        className="h-[250px] w-full object-cover sm:h-[400px] sm:max-h-[400px]"
        src="/snack.jpg"
        loading="eager"
      />

      <ul className="flex flex-col gap-8 px-10 pb-15 sm:px-14">
        {listItems.map((item) => (
          <li className="" key={item.id}>
            <MenuItem {...item} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MainMenu;
