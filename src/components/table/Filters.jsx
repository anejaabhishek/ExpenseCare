import { ChevronDownIcon, ChevronUpIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Button,
  Checkbox,
  Container,
  Flex,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
  Text,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { categories } from "../../pages/Dashboard";
import { useDispatch, useSelector } from "react-redux";
import { filterActions } from "../../store/filter-slice";
import { SlidersHorizontal } from "lucide-react";

const priceRange = [
  { option: "0 - 100", value: 0 },
  { option: "100 - 500", value: 100 },
  { option: "500 - 1000", value: 500 },
  { option: "1000 - 10000", value: 1000 },
  { option: "Above 10000", value: 10000 },
];

export const yearRange = [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023];

export const months = [
  {
    option: "January",
    value: 1,
  },
  {
    option: "February",
    value: 2,
  },
  {
    option: "March",
    value: 3,
  },
  {
    option: "April",
    value: 4,
  },
  {
    option: "May",
    value: 5,
  },
  {
    option: "June",
    value: 6,
  },
  {
    option: "July",
    value: 7,
  },
  {
    option: "August",
    value: 8,
  },
  {
    option: "September",
    value: 9,
  },
  {
    option: "October",
    value: 10,
  },
  {
    option: "November",
    value: 11,
  },
  {
    option: "December",
    value: 12,
  },
];

// const initialState = {
//   category: "",
//   price
// }

function Filters() {
  const dispatch = useDispatch();
  const searchRef = useRef("");
  const [filtersVisibility, setFiltersVisibility] = useState(false);

  const [filterInputs, setFilterInputs] = useState({});

  const categories = useSelector((state) => state.data.categories);

  function searchHandler() {
    console.log(searchRef.current.value);
  }

  return (
    <>
      <FormControl my={"2rem"} maxW={"90%"} mx={"auto"}>
        <Flex justifyContent={"center"}>
          <Button
            my={"1rem"}
            display={{ md: "none" }}
            w={"100%"}
            colorScheme="blue"
            onClick={() => setFiltersVisibility((prev) => !prev)}
          >
            Filter Data{" "}
            {filtersVisibility ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </Button>
        </Flex>
        <Flex
          display={{ base: filtersVisibility ? "flex" : "none", md: "flex" }}
          flexDir={{ base: "column", md: "row" }}
          justifyContent={{ base: "center", md: "space-around" }}
          gap={{ base: 5, md: 10 }}
          border={"solid"}
          borderWidth={"thin"}
          borderRadius={"lg"}
          p={5}
          bg={"lightgray"}
          alignItems={"center"}
        >
          {/* Category Select */}
          {/* <Select
            placeholder="Category"
            w={"225px"}
            variant={"outline"}
            onChange={(e) =>
              dispatch(filterActions.setCategory(e.target.value))
            }
          >
            {categories.map((category) => (
              <option key={category.name} value={category.name}>
                {category.name}
              </option>
            ))}
          </Select> */}
          <Menu>
            <MenuButton
              bgColor={"lightgray"}
              _focus={{ bgColor: "dark" }}
              _hover={{ bgColor: "dark" }}
              _active={{ bgColor: "dark" }}
              variant={"outline"}
              as={Button}
              rightIcon={<ChevronDownIcon />}
              // w={"max-content"}
              w={"225px"}
            >
              Category
            </MenuButton>
            <MenuList bgColor={"lightgray"}>
              {categories.map((category) => (
                <MenuItem
                  _hover={{ bgColor: "blue.600" }}
                  key={category.name}
                  value={category.name}
                  bgColor={"lightgray"}
                  onClick={(e) => console.log(e.target.value)}
                >
                  {category.name}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>

          {/* Price Range Select */}
          {/* <Select
            placeholder="Price Range"
            w={"225px"}
            variant={"outline"}
            onChange={(e) => dispatch(filterActions.setPrice(e.target.value))}
          >
            {priceRange.map((price) => (
              <option key={price.value} value={price.value}>
                {price.option}
              </option>
            ))}
          </Select> */}
          <Menu>
            <MenuButton
              bgColor={"lightgray"}
              _focus={{ bgColor: "dark" }}
              _hover={{ bgColor: "dark" }}
              _active={{ bgColor: "dark" }}
              variant={"outline"}
              as={Button}
              rightIcon={<ChevronDownIcon />}
              // w={"max-content"}
              w={"225px"}
            >
              Price
            </MenuButton>
            <MenuList bgColor={"lightgray"}>
              {priceRange.map((price) => (
                <MenuItem
                  _hover={{ bgColor: "blue.600" }}
                  key={price.value}
                  value={price.value}
                  bgColor={"lightgray"}
                  onClick={(e) => console.log(e.target.value)}
                >
                  {price.value}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>

          {/* Year Select */}
          {/* <Select
            placeholder="Year"
            w={"225px"}
            variant={"outline"}
            onChange={(e) => dispatch(filterActions.setYear(e.target.value))}
          >
            {yearRange.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </Select> */}

          <Menu>
            <MenuButton
              bgColor={"lightgray"}
              _focus={{ bgColor: "dark" }}
              _hover={{ bgColor: "dark" }}
              _active={{ bgColor: "dark" }}
              variant={"outline"}
              as={Button}
              rightIcon={<ChevronDownIcon />}
              // w={"max-content"}
              w={"225px"}
            >
              Year
            </MenuButton>
            <MenuList bgColor={"lightgray"}>
              {yearRange.map((year) => (
                <MenuItem
                  _hover={{ bgColor: "blue.600" }}
                  key={year}
                  value={year}
                  bgColor={"lightgray"}
                  onClick={(e) => console.log(e.target.value)}
                >
                  {year}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>

          {/* Month Select */}
          {/* <Select
            placeholder="Month"
            w={"225px"}
            variant={"outline"}
            onChange={(e) => dispatch(filterActions.setMonth(e.target.value))}
          >
            {months.map((month) => (
              <option key={month.value} value={month.value}>
                {month.option}
              </option>
            ))}
          </Select> */}

          <Menu>
            <MenuButton
              bgColor={"lightgray"}
              _focus={{ bgColor: "dark" }}
              _hover={{ bgColor: "dark" }}
              _active={{ bgColor: "dark" }}
              variant={"outline"}
              as={Button}
              rightIcon={<ChevronDownIcon />}
              // w={"max-content"}
              w={"225px"}
            >
              Month
            </MenuButton>
            <MenuList bgColor={"lightgray"}>
              {months.map((month) => (
                <MenuItem
                  _hover={{ bgColor: "blue.600" }}
                  key={month.option}
                  value={month.option}
                  bgColor={"lightgray"}
                  onClick={(e) => console.log(e.target.value)}
                >
                  {month.option}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>

          <Button colorScheme="pink" maxW={"225px"} px={"8%"}>
            Filter
          </Button>
        </Flex>
      </FormControl>

      <Flex w={"90%"} mx={"auto"} my={"2rem"} justify={"space-between"}>
        {/* Search Input and Button */}
        <Flex>
          <Input
            placeholder="Search Expense Name"
            w={{ base: "150px", md: "250px" }}
            rounded={"none"}
            borderColor={"primary"}
            defaultValue=""
            ref={searchRef}
          />
          <IconButton
            colorScheme="pink"
            rounded={"none"}
            onClick={searchHandler}
          >
            <SearchIcon />
          </IconButton>
        </Flex>

        {/* Category and Date Checkbox */}
        <Flex justifyContent={"center"} gap={2} alignItems={"center"}>
          {/* <Checkbox colorScheme="pink">Show Category and Date</Checkbox> */}

          {/* Sort by Select Menu */}

          <Menu>
            <MenuButton
              bgColor={"lightgray"}
              _focus={{ bgColor: "dark" }}
              _hover={{ bgColor: "dark" }}
              _active={{ bgColor: "dark" }}
              variant={"outline"}
              as={Button}
              rightIcon={<SlidersHorizontal />}
            >
              View
            </MenuButton>
            <MenuList bgColor={"lightgray"}>
              <MenuItem _hover={{ bgColor: "primary" }} bgColor={"lightgray"}>
                Category
              </MenuItem>
              <MenuItem _hover={{ bgColor: "primary" }} bgColor={"lightgray"}>
                Date
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </>

    // Columnfilter
  );
}

export default Filters;