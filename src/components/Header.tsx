import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  HStack,
  Icon,
  IconButton,
  Image,
  Link as ChakraLink,
  Spacer,
  Text,
  useDisclosure
} from "@chakra-ui/react";
import { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { IoMdCart } from "react-icons/io";
import { RiAdminFill } from "react-icons/ri";
import { Link as RouterLink } from "react-router-dom";
import { useCart } from "../CartContext";

export function Header() {
  const { totalItems, cartList } = useCart();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobileView, setIsMobileView] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsMobileView(true);
    } else {
      setIsMobileView(false);
    }
  };

  window.addEventListener("resize", handleResize);

  return (
    <Container as="header" sx={containerStyle}>
      <Flex as="nav" sx={flexStyle}>
        {/* LOGO */}
        <HStack>
          <ChakraLink as={RouterLink} to="/" sx={linkStyles}>
            <Image src="/images/bobablissiconupdate.png" alt="Logo" sx={logo} />
          </ChakraLink>
          <ChakraLink as={RouterLink} to="/" sx={linkStyles}>
            <Image
              src="/images/bobablisstextlogotest.png"
              alt="Logo"
              sx={logoText}
            />
          </ChakraLink>
        </HStack>
        <Spacer />

        {/* LINKS */}
        <HStack
          spacing="1rem"
          whiteSpace="nowrap"
          display={{ base: "none", md: "flex" }}
        >
          <ChakraLink as={RouterLink} to="/">
            <Icon
              verticalAlign="sub"
              width="1.8em"
              height="1.8em"
              as={AiFillHome}
            />
          </ChakraLink>
          <ChakraLink as={RouterLink} to="/admin">
            <Icon
              verticalAlign="sub"
              width="1.8em"
              height="1.8em"
              as={RiAdminFill}
            />
          </ChakraLink>
          <ChakraLink
            data-cy="cart-link"
            as={RouterLink}
            to="/checkout"
            sx={{
              linkStyles,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Icon
              verticalAlign="sub"
              width="1.8em"
              height="1.8em"
              as={IoMdCart}
            />
            <Text data-cy="cart-items-count-badge">({totalItems})</Text>
          </ChakraLink>
        </HStack>

        {/* HAMBURGER MENU */}
        <IconButton
          aria-label="Hamburger menu"
          variant="ghost"
          icon={<HamburgerIcon />}
          size="lg"
          display={{ base: "flex", md: "none" }}
          onClick={onOpen}
          _hover={{ backgroundColor: "darkPinkButton", color: "white" }}
        />
      </Flex>

      {/* HAMBURGER MENU DRAWER */}
      <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent sx={hamburgerMenuStyling}>
          <DrawerCloseButton />
          <Box py="4">
            <ChakraLink as={RouterLink} to="/" display="block" mx="4" my="2">
              Home
            </ChakraLink>
            <ChakraLink
              as={RouterLink}
              to="/admin"
              display="block"
              mx="4"
              my="2"
            >
              Admin
            </ChakraLink>
          </Box>
        </DrawerContent>
      </Drawer>
    </Container>
  );
}

const containerStyle = {
  position: "fixed",
  zIndex:"2000",
  top:0,
  maxWidth: "100%",
  backgroundColor: "pink",
  color: "lightBrownText",
  height:["4.3rem"]
};

const linkStyles = {
  _hover: {
    color: "white",
  },
};

const flexStyle = {
  p: ".5rem",
  alignItems: "center",
  justifyContent: "center",
  height:["4.3rem"]
};

const logo = {
  width: ["3.5rem"],
};

const logoText = {
  width: ["6rem","6rem","9rem"],
  ml: [".5rem",".5rem"],
};

const hamburgerMenuStyling = {
  color: "lightBrownText",
  backgroundColor: "pink",
};
