import { Box, Flex, Heading, Text, Stack, Image, Link, Icon } from "@chakra-ui/react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg="gray.100" color="gray.700" p={10} w="98%" margin="10px auto">
    
      <Flex justify="space-between" flexWrap="wrap" mb={10}>
       
        <Box minW="200px" mb={6}>
          <Heading size="sm" mb={1}>ONLINE SHOPPING</Heading>
          <Stack spacing={1}>
            <Text>Men</Text>
            <Text>Women</Text>
            <Text>Kids</Text>
            <Text>Home & Living</Text>
            <Text>Beauty</Text>
            <Text>Gift Cards</Text>
            <Text>Myntra Insider</Text>
          </Stack>
        </Box>

        
        <Box minW="200px" mb={6}>
          <Heading size="sm" mb={4}>CUSTOMER POLICIES</Heading>
          <Stack spacing={2}>
            <Text>Contact Us</Text>
            <Text>FAQ</Text>
            <Text>T&C</Text>
            <Text>Terms Of Use</Text>
            <Text>Track Orders</Text>
            <Text>Shipping</Text>
            <Text>Cancellation</Text>
            <Text>Returns</Text>
            <Text>Privacy Policy</Text>
            <Text>Grievance Redressal</Text>
          </Stack>
        </Box>

        <Box minW="200px" mb={6}>
          <Heading size="sm" mb={4}>USEFUL LINKS</Heading>
          <Stack spacing={2}>
            <Text>Blog</Text>
            <Text>Careers</Text>
            <Text>Site Map</Text>
            <Text>Corporate Information</Text>
            <Text>Whitehat</Text>
            <Text>Cleartrip</Text>
          </Stack>
        </Box>

      
        <Box minW="300px" mb={6}>
          <Heading size="sm" mb={4}>EXPERIENCE MYNTRA APP ON MOBILE</Heading>
          <Flex gap={4} mb={4} w="500px">
            <Image 
              src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png"
              alt="Google Play"
              boxSize="110px"
            />
            <Image
              src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png"
              alt="App Store"
              width="120px"
              boxSize="110px"
            />
          </Flex>
          <Heading size="sm" mb={2}>KEEP IN TOUCH</Heading>
          <Flex gap={4}>
            <Link href="#" isExternal><Icon as={FaFacebookF} boxSize={5} /></Link>
            <Link href="#" isExternal><Icon as={FaTwitter} boxSize={5} /></Link>
            <Link href="#" isExternal><Icon as={FaYoutube} boxSize={5} /></Link>
            <Link href="#" isExternal><Icon as={FaInstagram} boxSize={5} /></Link>
          </Flex>
        </Box>

        <Box minW="200px" mb={6}>
          <Box mb={4}>
            <Heading size="sm" mb={2}>100% ORIGINAL</Heading>
            <Text>Guarantee for all products at myntra.com</Text>
          </Box>
          <Box>
            <Heading size="sm" mb={2}>Return within 14 days</Heading>
            <Text>of receiving your order</Text>
          </Box>
        </Box>
      </Flex>

 
      <Box borderTop="1px" borderColor="gray.300" pt={6} mb={6}>
        <Heading size="sm" mb={4}>POPULAR SEARCHES</Heading>
        <Text>
          Makeup | Dresses For Girls | T-Shirts | Sandals | Handbags | Blazers
          For Men | Sports Shoes | Watches | Bags | More...
        </Text>
      </Box>


      <Flex justify="space-between" flexWrap="wrap" fontSize="sm" borderTop="1px" borderColor="gray.300" pt={4}>
        <Text>
          In case of any concern, <Link color="pink.500">Contact Us</Link>
        </Text>
        <Text>© 2025 www.myntra.com. All rights reserved.</Text>
        <Text>A Flipkart company</Text>
      </Flex>
    </Box>
  );
};

export default Footer;
