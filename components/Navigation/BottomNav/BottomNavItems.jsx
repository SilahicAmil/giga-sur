const BottomNavItems = ({ children }) => {
  return (
    <div className="flex h-16 w-16  transform items-center justify-center rounded-lg bg-white duration-150 hover:scale-125">
      {children}
    </div>
  );
};

export default BottomNavItems;
