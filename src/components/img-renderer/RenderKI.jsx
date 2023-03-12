import KI1 from "../img/KI/KI1";
import KI2 from "../img/KI/KI2";
import KI3 from "../img/KI/KI3";

const RenderKI = ({className}) => {
  return (
    <div className="flex flex-row items-center justify-center">
      <KI1 className={className}/>
      <KI2 className={className}/>
      <KI3 className={className}/>
    </div>
  );
};

export default RenderKI;
