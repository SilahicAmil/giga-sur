const BottomNavItems = ({ children }) => {
  return (
    <div className="flex h-16 w-16  transform items-center justify-center rounded-lg bg-red-50 duration-150 hover:scale-125">
      {children}
    </div>
  );
};

export default BottomNavItems;
