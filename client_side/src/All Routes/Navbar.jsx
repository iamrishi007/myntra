
import {
  Box,
  Flex,
  Input,
  Image,
  Container,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { HamburgerIcon, Search2Icon } from "@chakra-ui/icons";
import { AiOutlineUser } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { PiHandbag } from "react-icons/pi";
import PlacementExample from "../Pages/PlacementExample";

const navLinks = [
  { to: "/", label: "" },
  { to: "/men", label: "MEN" },
  { to: "/women", label: "WOMEN" },
  { to: "/kids", label: "KIDS" },
  { to: "/living", label: "HOME & LIVING" },
  { to: "/beauty", label: "BEAUTY" },
  { to: "/studio", label: "STUDIO", isNew: true },
];

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isPlacementOpen,
    onOpen: onPlacementOpen,
    onClose: onPlacementClose,
  } = useDisclosure();
  const { isOpen: isModalOpen, onOpen: onModalOpen, onClose: onModalClose } = useDisclosure();

  const handleProfileClick = () => {
    onPlacementOpen();
  };

  return (
    <Box bg="white" borderBottom="1px solid #e0e0e0">
      <Container maxW="90%" mx="auto">
        <Flex as="nav" align="center" justify="space-between" py={4}>
          <Link to="/">
            <Image
              paddingLeft={4}
              h="50px"
              src="https://cdn.iconscout.com/icon/free/png-256/free-myntra-logo-icon-download-in-svg-png-gif-file-formats--shopping-brand-online-application-app-mobile-indian-companies-pack-logos-icons-2249158.png?f=webp&w=256"
              alt="Myntra Logo"
            />
          </Link>
          <Flex display={{ base: "none", md: "flex" }} gap={10}>
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to}>
                <Box fontWeight="620" fontSize="14px" _hover={{ textDecoration: "underline", textDecorationColor: "#FF3F6C", textDecorationThickness: "4.5px" }}>
                  {link.label}
                  {link.isNew && (
                    <Box
                      as="span"
                      fontSize="10px"
                      fontWeight="bold"
                      color="red.400"
                      position="absolute"
                      top="-8px"
                      right="-22px"
                    >
                      NEW
                    </Box>
                  )}
                </Box>
              </Link>
            ))}
          </Flex>
          <Flex align="center" gap={3} maxW="450px" w="full" display={{ base: "none", md: "flex" }}>
            <InputGroup pr={2} width="100%">
              <InputLeftElement pointerEvents="none">
                <Search2Icon color="gray.500" />
              </InputLeftElement>
              <Input
                h={10}
                borderRadius={5}
                placeholder="Search for products, brands and more"
                fontSize="14px"
                variant="unstyled"
                border="0.5px solid grey"
                bg={"#F5F5F6"}
              />
            </InputGroup>
          </Flex>
          <Flex fontWeight={500} align="center" gap={6} color="gray.600" display={{ base: "none", md: "flex" }}>
            <Box alignItems="center" gap={3} onClick={handleProfileClick}>
              <AiOutlineUser size={20} />
              <Box fontSize="12px" _hover={{ cursor: "pointer" }}>Profile</Box>
            </Box>
            <Box alignItems="center" gap={3}>
              <CiHeart size={20} />
              <Box fontSize="12px"><Link to={"/wishlist"}>Wishlist</Link></Box>
            </Box>
            <Box alignItems="center" gap={3}>
              <PiHandbag size={20} />
              <Box fontSize="12px">Bag</Box>
            </Box>
          </Flex>
          <IconButton icon={<HamburgerIcon />} aria-label="Open menu" display={{ base: "flex", md: "none" }} onClick={onOpen} />
        </Flex>
      </Container>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to} onClick={onClose}>
                <Box fontWeight="500" fontSize="16px" mb={4} _hover={{ textDecoration: "underline" }}>
                  {link.label}
                </Box>
              </Link>
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Modal isOpen={isModalOpen} onClose={onModalClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sign Up / Login</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input placeholder="Email" mb={4} />
            <Input placeholder="Password" mb={4} type="password" />
            <Button colorScheme="blue" w="full">Login</Button>
            <Box mt={4} textAlign="center">
              Don't have an account? <Link to={"/signup"}>Sign Up</Link>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={onModalClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {isPlacementOpen && <PlacementExample isOpen={isPlacementOpen} onClose={onPlacementClose} />}
    </Box>
  );
}

export default Navbar;
