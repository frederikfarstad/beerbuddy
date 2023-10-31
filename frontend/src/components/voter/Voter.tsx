import { CaretDownFilled, CaretUpFilled } from "@ant-design/icons";
import { Button } from "antd";
import styles from "./Voter.module.css";

const Voter = () => {
  const upvote = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    event.preventDefault();
    console.log("upvote");
  };

  const downvote = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    event.preventDefault();
    console.log("downvote");
  };

  return (
    <div className={styles.wrapper}>
      <Button
        type="primary"
        icon={<CaretUpFilled />}
        onClick={upvote}
        aria-label="Upvote this beer"
      />
      <p className={styles.count}>321</p>
      <Button
        type="primary"
        icon={<CaretDownFilled />}
        onClick={downvote}
        aria-label="Downvote this beer"
      />
    </div>
  );
};
export default Voter;
