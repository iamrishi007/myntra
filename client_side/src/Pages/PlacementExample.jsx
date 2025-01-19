import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Center,
  Spacer
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import LogoutButton from "./LogoutButton";

function PlacementExample({ isOpen, onClose }) {
  const [placement, setPlacement] = React.useState("right");

  return (
    <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader borderBottomWidth="1px"></DrawerHeader>
        <DrawerBody>
          <b>Welcome</b>
          <div>
            <Center>To access account and manage orders</Center>
            <Button fontSize={"13"} fontWeight={"bold"} color="#FF3F6C" mt={4}>
              <Link to="/signup">LOGIN/SIGNUP</Link>
            </Button>
            <Spacer />
            <br />
            <div style={{fontSize:"13.5px"}}>
              <a href="/wishlist"> <b>Orders</b></a>
              <br />

              <a href="/wishlist"><b>Wishlist</b></a>
              <br />

              <a><b>Gift Cards</b></a>
              <br />

              <a><b>Cupons</b></a>
            </div>
            <div>
              <LogoutButton />
            </div>
          </div>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

export default PlacementExample;
