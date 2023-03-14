import XMark from "./icons/XMark";

const Paper = ({ style, children, onClick }) => {
  return (
    <div className={`${style} flex flex-col rounded-2xl px-2`} onClick={onClick}>
      <div className="self-end">
        <XMark color="#808080" size="8"/>
      </div>
      {children}
    </div>
  );
};

export default Paper;
