import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";

const SelectMenu = () => {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a type" />
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
