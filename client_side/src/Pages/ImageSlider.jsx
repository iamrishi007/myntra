import { Box, Image, Flex } from "@chakra-ui/react"
import { useState, useEffect } from "react"

const images = [
  'https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2024/DECEMBER/14/aPMu8B2W_4445258dbac64d33b9ee551daf9557fb.png', 'https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2024/DECEMBER/14/BGLBdxOz_4dcc1d8a0f40417caeebbe3df99c793c.png', 'https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2024/DECEMBER/14/nGMqvzVL_84bc70d8587b439c8e3a8e4613e1230e.png',
  'https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2024/DECEMBER/14/9eYV0INJ_db113e314ba947d5aac22d32252d303e.png', 'https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2024/12/17/1c39bcd6-3ac7-4d99-be1f-0a5ff8bac82e1734450134146-image_png_481891967.png', 'https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2024/12/17/1c4d0e53-40d9-4cda-b636-4ae866ffada61734450068213-image_png_1815838412.png', 'https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2024/DECEMBER/14/jm3rOZrT_5047ca596a8b4b61b41cb837ca2a3b83.png',
  'https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2024/DECEMBER/14/7m37tgHq_a95edf53a0544616b231b84486560fe9.png', 'https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2024/DECEMBER/14/9dUbBicH_cb18c676b7d64c75b5ef8870dbcdf2be.png', 'https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2024/DECEMBER/14/MVzmtbFB_cbffe523c72f44778af1561d4b232e6c.png', 'https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2024/12/17/bf541a9e-49ad-4351-89bf-ac2ee33d95651734451313681-image_jpeg442386857.jpg', 'https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2024/12/17/bf541a9e-49ad-4351-89bf-ac2ee33d95651734451313681-image_jpeg442386857.jpg', 'https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2024/DECEMBER/28/H3uJuCql_6e2bb370e239400f8873da272ac1ad53.png',
];

export default function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      m={2}
      w="80%"
      h="350px"
      overflow="hidden"
      mx="auto"
      position="relative"
    >
      <Flex
        boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px"
        w="80%"
        h="90%"
        transform={`translateX(-${currentSlide * 33.33}%)`}
        transition="transform 0.5s ease-in-out"
      >
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            flex="0 0 25%"
            h="350px"
            objectFit="cover"
          />
        ))}
      </Flex>
    </Box>
  );
}
