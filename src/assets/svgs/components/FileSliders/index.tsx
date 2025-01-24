import React from 'react';

type Props = {
  className?: string;
};

const FileSliders: React.FC<Props> = ({
  className,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
    >
      {/* Add the SVG path here */}
    </svg>
  );
};

export default FileSliders;
