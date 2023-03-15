const BottomNavItems = ({ children }) => {
  return (
    <div className="flex transform items-center rounded-lg bg-white duration-150 hover:scale-150 hover:cursor-pointer md:h-14 md:w-14  lg:h-16 lg:w-16">
      {children}
    </div>
  );
};

export default BottomNavItems;
