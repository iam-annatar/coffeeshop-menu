interface ActiveCircleShapeProps {
  isSidebarExtended: boolean;
  indicatorTop: number;
}

const ActiveCircleShape = (props: ActiveCircleShapeProps) => {
  const { isSidebarExtended, indicatorTop } = props;

  return (
    <>
      {!isSidebarExtended ? (
        <div
          aria-label="active-nav-circle"
          className="bg-primary absolute left-[20%] z-[.5] h-30 w-8 -translate-x-full -translate-y-1/2 rounded-l-[50%] transition-all duration-300"
          style={{
            top: indicatorTop,
            boxShadow: "0px 0px 10px 10px rgba(0, 0, 0, 0.1)",
          }}
        />
      ) : null}

      {!isSidebarExtended ? (
        <div
          aria-label="active-nav-circle"
          className="bg-primary absolute left-0 z-[1] h-40 w-full -translate-y-1/2 overflow-hidden shadow-none transition-all duration-300"
          style={{ top: indicatorTop }}
        />
      ) : null}
    </>
  );
};

export default ActiveCircleShape;
