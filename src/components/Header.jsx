import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Button,
  Container,
  Flex,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { Link as RouteLink } from "react-router-dom";

function Header() {
  return (
    <Flex
      py={2}
      px={8}
      justify={"space-between"}
      alignItems={"center"}
      bgColor={"lightgray"}
      position={"sticky"}
      top={0}
      zIndex={"sticky"}
    >
      <Flex>
        <Text fontSize={"3xl"} fontWeight={"bold"} color={"teal.400"}>
          ExpenseCare
        </Text>
      </Flex>
      <Flex
        display={{ base: "none", md: "flex" }}
        gap={10}
        fontSize={"lg"}
        fontWeight={"normal"}
        alignItems={"center"}
      >
        <Link as={RouteLink} to={"/dashboard"}>
          Dashboard
        </Link>
        <Link as={RouteLink} to={"/all-expenses"}>
          All Expenses
        </Link>
        <Link as={RouteLink} to={"/charts"}>
          Charts
        </Link>
        <Menu>
          <MenuButton
            as={Button}
            bg={"inherit"}
            _hover={{ bg: "inherit" }}
            rightIcon={<ChevronDownIcon />}
            fontSize={"large"}
            fontWeight={"semibold"}
          >
            Account
          </MenuButton>
          <MenuList bgColor={"lightgray"}>
            <MenuItem bgColor={"lightgray"}>Profile</MenuItem>
            <MenuItem bgColor={"lightgray"}>Help</MenuItem>
            <MenuItem bgColor={"lightgray"}>Logout</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
      <Flex display={{ md: "none" }}>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="options"
            icon={<HamburgerIcon />}
            color={"text"}
            bgColor={"teal.600"}
          />
          <MenuList bgColor={"lightgray"}>
            <MenuItem bgColor={"lightgray"}>Dashboard</MenuItem>
            <MenuItem bgColor={"lightgray"}>All Expenses</MenuItem>
            <MenuItem bgColor={"lightgray"}>Charts</MenuItem>
            <MenuItem bgColor={"lightgray"}>Account</MenuItem>
            <MenuItem bgColor={"lightgray"}>Logout</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
}

export default Header;