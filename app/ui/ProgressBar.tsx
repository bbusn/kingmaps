/** @format */
import styles from "./ProgressBar.module.css";

// components/ProgressBar.js

const ProgressBar = ({ progress }: { progress: number }) => {
  return (
    <div className="style.progress">
      <div
        className="style.progress-bar"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
