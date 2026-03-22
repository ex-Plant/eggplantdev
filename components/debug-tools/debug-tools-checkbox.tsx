"use client";

import { forwardRef } from "react";

type DebugToolsCheckboxPropsT = {
  toggleFunc: () => void;
  currentVal: boolean;
  label: string;
};

export const DebugToolsCheckbox = forwardRef<HTMLInputElement, DebugToolsCheckboxPropsT>((props, ref) => {
  const { toggleFunc, currentVal, label } = props;
  return (
    <div className={`text-12 mt-4 flex items-center justify-between gap-2 text-black`}>
      <p>{label}</p>
      <input ref={ref} type="checkbox" onChange={() => toggleFunc()} checked={currentVal} />
    </div>
  );
});

DebugToolsCheckbox.displayName = "DebugToolsCheckbox";
