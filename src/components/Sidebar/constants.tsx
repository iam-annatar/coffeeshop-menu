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
    name: "بار گرم قهوه",
    slug: "hot-coffee",
    icon: <Coffee />,
  },
  {
    name: "بار سرد قهوه",
    slug: "cold-coffee",
    icon: <ColdDrink />,
  },
  {
    name: "بار گرم",
    slug: "warm",
    icon: <HotDrink />,
  },
  {
    name: "نوشیدنی طبیعی",
    slug: "juice",
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
