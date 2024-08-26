import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectBranch() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a Branch" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>North or South</SelectLabel>
          <SelectItem value="apple">North</SelectItem>
          <SelectItem value="banana">South</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
