import Jakote1 from "../img/Jakote/Jak1";
import Jakote2 from "../img/Jakote/Jak2";
const RenderJakote = ({ className }) => {
  return (
    <div className="flex flex-row items-center justify-center">
      <Jakote1 className={className} />
      <Jakote2 className={className} />
    </div>
  );
};

export default RenderJakote;
