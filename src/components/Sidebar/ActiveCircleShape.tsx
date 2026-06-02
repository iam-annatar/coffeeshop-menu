const ActiveCircleShape = () => {
  return (
    <>
      <div
        aria-label="active-nav-circle"
        className="bg-primary absolute left-[20%] z-[1] h-30 w-8 -translate-x-full -translate-y-1/2 rounded-l-[50%] transition-all duration-300"
        style={{
          // top: indicatorTop,
          boxShadow: "0px 0px 12px 12px rgba(0, 0, 0, 0.2)",
        }}
      />

      <div
        aria-label="active-nav-circle"
        className="bg-primary absolute left-0 z-[2] h-40 w-full -translate-y-1/2 overflow-hidden shadow-none transition-all duration-300"
        // style={{ top: indicatorTop }}
      />
    </>
  );
};

export default ActiveCircleShape;
