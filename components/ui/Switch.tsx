"use client";

import { Dispatch, ReactNode, SetStateAction } from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";
import Tooltip from "./Tooltip";
const Switch = ({
  fn,
  trackDimensions,
  thumbDimensions,
  thumbTranslate,
  checked = true,
  disabled = false,
  disabledTooltip,
  className,
}: {
  fn: Dispatch<SetStateAction<boolean>> | (() => void);
  trackDimensions?: string;
  thumbDimensions?: string;
  thumbTranslate?: string;
  checked?: boolean;
  disabled?: boolean;
  disabledTooltip?: string | ReactNode;
  className?: string;
}) => {
  if (disabledTooltip) {
    return (
      <Tooltip content={disabledTooltip}>
        <div className="relative inline-flex h-4 w-8 flex-shrink-0 cursor-not-allowed rounded-full border-2 border-transparent bg-gray-200 radix-state-checked:bg-gray-300">
          <div className="h-3 w-3 transform rounded-full bg-white shadow-lg" />
        </div>
      </Tooltip>
    );
  }

  return (
    <SwitchPrimitive.Root
      checked={checked}
      name="switch"
      onCheckedChange={(checked) => fn(checked)}
      disabled={disabled}
      className={cn(
        "peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-input",
        className,
        trackDimensions
      )}
    >
      <SwitchPrimitive.Thumb
        className={cn(
          "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0",
          thumbDimensions,
          thumbTranslate
        )}
      />
    </SwitchPrimitive.Root>
  );
};

export default Switch;
