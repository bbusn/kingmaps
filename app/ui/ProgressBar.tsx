/** @format */
import styles from "./ProgressBar.module.css";

// components/ProgressBar.js

const ProgressBar = ({ progress }: { progress: number }) => {
  return (
    <div className="progress">
      <div className="progress-bar" style={{ width: `${progress}% ` }}></div>
      {progress}%
    </div>
  );
};

export default ProgressBar;
