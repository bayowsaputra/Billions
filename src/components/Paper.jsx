const Paper = ({ color, children }) => {
  return (
    <div className={`${color} max-w-7xl item mr-4 rounded-2xl`}>
      {children}
    </div>
  );
};

export default Paper;
