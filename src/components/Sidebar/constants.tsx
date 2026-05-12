import type { NavLinkItem } from "@/types";

import {
  Coffee,
  ColdDrink,
  Dessert,
  HotDrink,
  IceCream,
  MilkShake,
  Pizza,
} from "../Icons";

export const navLinks: NavLinkItem[] = [
  {
    name: "قهوه",
    slug: "coffee",
    icon: <Coffee />,
  },
  {
    name: "نوشیدنی گرم",
    slug: "warm",
    icon: <HotDrink />,
  },
  {
    name: "نوشیدنی سرد",
    slug: "cold",
    icon: <ColdDrink />,
  },
  {
    name: "شیک",
    slug: "shake",
    icon: <MilkShake />,
  },
  {
    name: "بستنی",
    slug: "ice-cream",
    icon: <IceCream />,
  },
  { name: "اسنک", slug: "snack", icon: <Pizza /> },
  { name: "دسر", slug: "dessert", icon: <Dessert /> },
];
