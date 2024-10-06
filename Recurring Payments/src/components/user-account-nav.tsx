import { DropdownMenu } from "./ui/dropdown-menu";

interface UserAccountNavProps extends React.HTMLAttributes<HTMLDivElement> {
  user: {
    name: string;
    email: string;
    image: string | null;
  };
}

export function UserAccountNav({ user }: UserAccountNavProps) {
  return <DropdownMenu></DropdownMenu>;
}
