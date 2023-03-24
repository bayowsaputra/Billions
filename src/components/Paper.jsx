
const Paper = ({ style, children, onClick, onClose }) => {
  return (
    <div
      className={`${style} flex flex-col rounded-2xl px-2`}
      onClick={onClick}
    >
      {/* <div
        className="self-end z-10"
        onClick={() => {
          onClose;
          console.log("xmark clicked");
        }}
      >
        <XMark color="#808080" size="8" />
      </div> */}
      {children}
    </div>
  );
};

export default Paper;
