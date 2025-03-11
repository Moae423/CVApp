import { Fields } from "@/components/Field";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import formData from "@/data/formData";

const Resume = () => {
  return (
    <div className="bg-gradient-to-t from-[#FFE688] to-[#F0EBD8] min-h-screen">
      <h1 className="text-RichBlack text-4xl font-bold text-center py-4 font-Erode">
        Resume Builder
      </h1>
      <div className="flex items-center justify-center flex-col flex-wrap gap-3 py-3 ">
        {formData.map((item) => (
          <Card key={item.id} className="bg-DarkBlue   w-sm md:w-md lg:w-xl">
            <CardHeader>
              <CardTitle className="text-3xl text-center font-Erode text-EggShell">
                {item.title}
              </CardTitle>
              <Fields fields={item.field} />
            </CardHeader>
          </Card>
        ))}
        <Button
          type="submit"
          className="text-xl p-6 cursor-pointer bg-[#3E5C76] text-EggShell hover:text-RichBlack border-2 border-DarkBlue  hover:bg-EggShell font-Erode font-semibold hover:scale-105 transition duration-300"
        >
          Download My Cv
        </Button>
      </div>
    </div>
  );
};
export default Resume;
