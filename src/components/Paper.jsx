const Paper = ({ style, children, onClick, onClose }) => {
  return (
    <div
      className={`${style} flex flex-col rounded-2xl px-2`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Paper;
