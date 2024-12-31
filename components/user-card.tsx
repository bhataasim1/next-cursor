import Image from "next/image";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

type UserProps = {
  name: string;
  email: string;
  avatar: string;
};

export default function UserCard({ name, email, avatar }: UserProps) {
  return (
    <Card className="w-full max-w-[800] max-h-20">
      <div className="flex justify-between items-center space-x-4 p-4">
        <div className="flex items-center space-x-4">
          <Image
            src={avatar}
            alt={name}
            width={50}
            height={50}
            className="rounded-full"
          />

          <div className="text-lg font-semibold">{name}</div>
        </div>

        <Button>
          <a href={`mailto:${email}`}>Email</a>
        </Button>
      </div>
    </Card>
  )
}