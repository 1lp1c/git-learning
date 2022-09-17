import styles from "./SearchField.module.scss";
import {BsSearch} from "react-icons/bs";

const Searchfield = () => {
  return (
    <label className={styles.field}>
      <BsSearch/>
      <div>
        <input type="text" placeholder="Enter search term..." />
      </div>
    </label>
  );
};

export default Searchfield;
