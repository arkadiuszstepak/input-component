import "./Menu.scss";

const Menu = () => {
  return (
    <div className="Menu">
      <div className="Title">
        <div className="TitleFirst">Dev</div>
        <div>challenges.io</div>
      </div>
      <div className="Element">Colors</div>
      <div className="Element">Typography</div>
      <div className="Element">Spaces</div>
      <div className="Element">Buttons</div>
      <div className="Element Active">Inputs</div>
      <div className="Element">Grid</div>
    </div>
  );
};

export default Menu;
