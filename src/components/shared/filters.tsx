import { cn } from "@/lib/utils";
import React from "react";
import { Title } from "./title";


interface Props {
  className?: string;
}

export const Filters: React.FC<React.PropsWithChildren<Props>> = ({
  className,
}) => {
  return (
    <div
      className={cn(
        "",
        className
      )}
    >
        <Title text="Фільтрація" size="sm" className="mb-5 font-bold" />
    </div>
  );
};
