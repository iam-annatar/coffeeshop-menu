import type { MenuListItem } from ".";

const MenuItem = (props: MenuListItem) => {
  const { name, price } = props;

  return (
    <div aria-label="menu-item" className="flex items-center gap-3">
      <span
        aria-label="price-tag"
        className="text-brand shrink-0 text-lg font-semibold"
      >
        {price}
      </span>
      <div
        aria-label="connector-line"
        className="border-foreground/10 grow border border-r-0 border-l-0 border-dotted"
      />
      <span
        aria-label="item-name"
        className="text-brand shrink-0 text-lg font-bold"
      >
        {name}
      </span>
    </div>
  );
};

export default MenuItem;
