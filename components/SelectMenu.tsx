import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import { FC } from "react";

export type SelectMenuType = {
  onValueChange: any;
  defaultValue: string;
};

const SelectMenu: FC<SelectMenuType> = ({ ...props }) => {
  return (
    <Select
      onValueChange={props.onValueChange}
      defaultValue={props.defaultValue}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="select type" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Type</SelectLabel>
          <SelectItem value="asset">Asset</SelectItem>
          <SelectItem value="liability">Liability</SelectItem>
          <SelectItem value="debt">Debt</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectMenu;
