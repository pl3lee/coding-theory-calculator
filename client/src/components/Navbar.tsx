"use client";
import { Drawer } from "@mui/material";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import Link from "next/link";

const drawerWidth = 240;

const decode = [
  {
    name: "Hamming Code Decoding",
    path: "/decode-hamming",
  },
  {
    name: "Syndrome Decoding",
    path: "/decode-syndrome",
  },
  {
    name: "C24 Decoding",
    path: "/decode-c24",
  },
];

const calculate = [
  {
    name: "Calculate Hamming Distance",
    path: "/calculate-hamming-distance",
  },
  {
    name: "Calculate Weight (Words)",
    path: "/calculate-weight-words",
  },
  {
    name: "Calculate Weight (Generator Matrix)",
    path: "/calculate-weight-gm",
  },
];

// const generate = [
//   {
//     name: "Generate Syndrome Coset Table",
//     path: "/generate-syndrome-coset-table",
//   },
// ];

const NavList = () => {
  return (
    <>
      <List>
        {decode.map((item, index) => (
          <ListItem key={item.name}>
            <Link href={item.path}>
              <ListItemText primary={item.name} />
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {calculate.map((item, index) => (
          <ListItem key={item.name}>
            <Link href={item.path}>
              <ListItemText primary={item.name} />
            </Link>
          </ListItem>
        ))}
      </List>
      {/* <Divider />
      <List>
        {generate.map((item, index) => (
          <ListItem key={item.name}>
            <Link href={item.path}>
              <ListItemText primary={item.name} />
            </Link>
          </ListItem>
        ))}
      </List> */}
    </>
  );
};

const Navbar = () => {
  return (
    <div className="">
      <NavbarSmall />
      <NavbarLarge />
    </div>
  );
};

const NavbarSmall = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full flex justify-between p-3 lg:hidden">
      <Link href="/">
        <h1 className="text-3xl font-bold">Calculator</h1>
      </Link>
      <button onClick={() => setOpen(!open)}>
        <BiMenu fontSize="2rem" />
      </button>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        open={open}
        variant="temporary"
        anchor="left"
        className="lg:hidden"
        onClick={() => setOpen(!open)}
      >
        <NavList />
      </Drawer>
    </div>
  );
};

const NavbarLarge = () => {
  return (
    <div className="hidden lg:block mr-3 h-full w-[30vw] max-w-[300px]">
      <Toolbar disableGutters className="pl-3">
        <Link href="/">
          <h1 className="text-3xl font-bold">Calculators</h1>
        </Link>
      </Toolbar>
      <NavList />
    </div>
  );
};

export default Navbar;
