import React from "react";

interface Props {
  children: React.ReactNode;
  styles?: string;
  props?: any;
}

const SectionContainer = ({ children, styles, props }: Props) => {
  return (
    <section
      className={`container px-5 my-20 md:px-20 ${styles ? styles : ""}`}
      {...props}
    >
      {children}
    </section>
  );
};

export default SectionContainer;
