import React from "react";

export interface PracticeProps {
  className?: string;
  style?: React.CSSProperties;
}

const Practice: React.FC<PracticeProps> = (props) => {
  return (
    <div id="div1">this is practice</div>
  )
}

export default Practice;