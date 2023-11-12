import Container from "@/components/ui/container";
import MainNav from "@/components/main-nav";
import Link from "next/link";
import getCategories from "@/actions/get-categories";
import NavbarActions from "@/components/navbar-actions";
import Image from "next/image";

export const revalidate = 0;

const Navbar = async () => {
  const categories = await getCategories();
  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Mr._Robot_Logo.svg/1985px-Mr._Robot_Logo.svg.png"
              height={1800}
              width={900}
              alt="MrRobotLogo"
              className="w-[200px] h-[40px]"
            />
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
