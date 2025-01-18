import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Card className="max-w-[340px] min-h-[233px]">
        <CardHeader className="flex items-center space-x-4 flex-row ">
          <Avatar>
            <AvatarImage
              src="/assets/profile-thumbnail.png"
              alt="Profile Picture"
              className="w-12 h-12"
            />
          </Avatar>
          <div className="flex flex-col">
            <CardTitle className="font-semibold text-xl leading-7">
              Sarah Dole
            </CardTitle>
            <CardDescription>@sarahdole</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="pt-4">
          <p className="text-lg text-gray-700">
            I&apos;ve been searching for high-quality abstract images for my
            design projects, and I&apos;m thrilled to have found this platform.
            The variety and depth of creativity are astounding!
          </p>
        </CardContent>
      </Card>
    </main>
  );
}
