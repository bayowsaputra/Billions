const Paper = ({ style, children }) => {
  return (
    <div className={`${style} w-96 rounded-2xl`}>
      {children}
    </div>
  );
};

export default Paper;
