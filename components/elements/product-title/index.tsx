import React from "react";

interface Props {
  title: string;
}

export const ProductTitle: React.FC<Props> = ({ title }) => {
  return <h1 className="text-gray-900 text-3xl font-semibold mb-2">{title}</h1>;
};
