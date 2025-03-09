import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Resume = () => {
  return (
    <div className="bg-gradient-to-t from-[#FFE688] to-[#F0EBD8] min-h-screen">
      <h1 className="text-RichBlack text-4xl font-bold text-center py-4 font-Erode">
        Resume Builder
      </h1>
      <Card className="w-md m-3 bg-DarkBlue">
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
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name" className="font-Satoshi text-lg">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  className="bg-EggShell text-RichBlack"
                  placeholder="What's Your Phone Number"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name" className="font-Satoshi text-lg">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  className="bg-EggShell text-RichBlack"
                  placeholder="What's Your Email"
                />
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name" className="font-Satoshi text-lg">
                  LinkedIn
                </Label>
                <Input
                  id="linkedin"
                  name="linkedin"
                  className="bg-EggShell text-RichBlack"
                  placeholder="What's Your Linkedin"
                />
              </div>
              <div className="grid w-full gap-1.5">
                <Label htmlFor="message">Your message</Label>
                <Textarea
                  placeholder="Type your message here"
                  className="bg-EggShell text-RichBlack"
                  id="message"
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
