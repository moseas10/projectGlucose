import React from "react";

const sizeClasses = {
  txtAvenirLTStdBlack3036: "font-avenirltstd font-extrabold",
  txtAvenirLTStdBlack2024: "font-avenirltstd font-extrabold",
  txtAvenirLTStdBook2024: "font-avenirltstd font-normal",
  txtAvenirLTStdRoman1518: "font-avenirltstd font-normal",
  txtAvenirLTStdBook1518: "font-avenirltstd font-normal",
  txtSFProTextBold2024: "font-bold font-sfprotext",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
