import firstImg from "../../../assets/portfolio/aii/page1.png";
const Aii1 = ({ className = { className } }) => {
  return (
    <img
      src={firstImg}
      alt="firstImageAii"
      className={className}
      height="40px"
      width="28px"
    />
  );
};

export default Aii1;
