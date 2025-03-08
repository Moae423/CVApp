import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Resume = () => {
  return (
    <div className="bg-gradient-to-t from-[#FFE688] to-[#F0EBD8] min-h-screen">
      <h1 className="text-RichBlack text-4xl font-bold text-center py-4 font-Erode">
        Resume Builder
      </h1>
      <Card className="w-md mx-auto bg-DarkBlue">
        <CardHeader>
          <CardTitle className="text-EggShell text-2xl font-Erode">
            Profile Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4 text-white">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name" className="font-Satoshi text-lg">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  className="bg-EggShell text-RichBlack"
                  placeholder="What's Your Name"
                />
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
      )
    </div>
  );
};
export default Resume;
