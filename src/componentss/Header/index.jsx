import Tab from "./Tab";

const Header = (props) => {
  return (
    <div>
      <h1 className="title">Product List</h1>
      <Tab setName={props.setName}/>
    </div>
  );
};

export default Header;
