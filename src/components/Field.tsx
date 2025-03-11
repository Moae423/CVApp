import { CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";

interface Field {
  label?: string;
  type?: string;
  placeholder?: string;
  component?: string;
}
interface FieldsProps {
  fields: Field[];
}

export const Fields = ({ fields }: FieldsProps) => {
  return (
    <div className="">
      <CardContent>
        {fields.map((item) => (
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label className="text-lg font-Satoshi text-EggShell ">
              {item.label}
            </Label>
            {item.component === "Textarea" ? (
              <Textarea
                className="bg-EggShell border-none"
                placeholder="Type your message here."
              />
            ) : (
              <Input
                type={item.type}
                id={item.label}
                placeholder={item.placeholder}
                className="bg-EggShell border-none font-Satoshi"
              />
            )}
          </div>
        ))}
      </CardContent>
    </div>
  );
};
