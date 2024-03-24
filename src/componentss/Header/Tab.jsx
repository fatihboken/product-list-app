import { categories } from "../../helper/data";


const Tab = ({setName}) => {

    const handleClick = (item) => {
        setName(item)
        
    }
  return (
    <div>
      <div className="button-wrapper">
        {categories.map((item, index) => (
          <button onClick={() => handleClick(item)} className="button" key={index}>
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tab;
