import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";

type UserProps = {
  name: string;
  email: string;
  avatar: string;
};

export default function UserCard({ name, email, avatar }: UserProps) {
  return (
    <Card className="w-full max-w-[800] max-h-20">
      <CardContent>
        <div className="flex justify-between items-center space-x-4 p-4">
          <div className="flex items-center space-x-4">
            <Image
              src={avatar}
              alt={name}
              width={50}
              height={50}
              className="rounded-full"
            />

            <div>
              <p className="text-lg font-semibold">{name}</p>
              <p className="text-muted-foreground text-sm">{email.toLowerCase()}</p>
            </div>
          </div>

          <Button>
            <Link href={`mailto:${email}`}>Email</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}