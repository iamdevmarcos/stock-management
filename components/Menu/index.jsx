import { Container, Navbar, NavbarItem } from "./styles";
import Link from "next/link";

export default function Menu() {
  return (
    <Container>
      <Navbar>
        <Link href="/">
          <NavbarItem>
            <a>Fastbooks</a>
          </NavbarItem>
        </Link>

        <NavbarItem>
          <a>Dashboard</a>
        </NavbarItem>

        <Link href="/accounts">
          <NavbarItem>
            <a>Accounts</a>
          </NavbarItem>
        </Link>

        <NavbarItem>
          <a>Sales</a>
        </NavbarItem>

        <NavbarItem>
          <a>Expenses</a>
        </NavbarItem>

        <NavbarItem>
          <a>Reports</a>
        </NavbarItem>
      </Navbar>
    </Container>
  );
}
