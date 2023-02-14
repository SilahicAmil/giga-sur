const BottomNavItems = ({ children }) => {
  return (
    <div className="flex h-16 w-16 transform items-center rounded-lg bg-white duration-150 hover:scale-150 hover:cursor-pointer">
      {children}
    </div>
  );
};

export default BottomNavItems;
