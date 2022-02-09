import styled from "styled-components";

export const Container = styled.div`
  /* background: red; */
  min-height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 30px;
`;

export const Navbar = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const NavbarItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px;
  padding: 10px 30px;
  font-size: 18px;
  border-radius: 10px;
  transition: 0.3s;
  cursor: pointer;
  width: 50%;
  position: relative;

  &:hover::after {
    content: "";
    background: #80df80;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    position: absolute;
    margin-left: -15px;
  }

  &:hover {
    background: #289f28;
    color: #8bdc8b;
  }

  a {
    text-decoration: none;
  }
`;
