import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function InputWithButton() {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="number" placeholder="Enter number" />
      <Button type="submit" className="bg-white text-black">
        Reserve
      </Button>
    </div>
  );
}
