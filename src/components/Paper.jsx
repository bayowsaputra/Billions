const Paper = ({ style, children, onClick }) => {
  return (
    <div className={`${style}  rounded-2xl`} onClick={onClick}>
      {children}
    </div>
  );
};

export default Paper;
