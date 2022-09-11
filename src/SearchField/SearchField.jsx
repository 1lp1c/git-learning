import styles from "./SearchField.module.scss";
import { BsSearch } from "react-icons/bs";

const Searchfield = () => {
  return (
    <div className={styles.field}>
      <BsSearch color="#424242" />
      <div>
        <input type="text" placeholder="Enter search term..." />
      </div>
    </div>
  );
};

export default Searchfield;
