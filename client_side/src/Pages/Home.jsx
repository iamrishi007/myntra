import { Box, Image, Spacer } from "@chakra-ui/react"
import { Grid, Flex } from '@chakra-ui/react'
import ImageSlider from "./ImageSlider"
import { useEffect, useState } from "react"
import axios from "axios"
import '../index.css'
import Footer from "./Footer"
function Home() {
     const [data, setdata] = useState([])

     const fetchdata = async () => {
          try {
               const response = await axios({
                    url: "https://myntra-backend-ra9i.onrender.com/api/category/products",
                    method: "GET",
               });
               setdata(response.data)
               console.log(response.data);
          } catch (error) {
               console.error('Error fetching data:', error.message)
               if (error.response) {
                    console.error('Status:', error.response.status)
                    console.error('Data:', error.response.data)
               }
          }
     };




     useEffect(() => {
          fetchdata();
     }, [])


     return (
          <>
               <Box p={2} m={3} boxShadow="rgba(0, 0, 0, 0.05) 0px 0px 0px 1px">
                    <Box width="85%" m={"auto"}>
                         <Image src="Screenshot 2025-01-16 190112.png" alt="Screenshot" />
                    </Box>
               </Box>

               <Flex
                    m="auto"
                    alignItems="center"
                    justify="center"
                    w="95%"
                    gap={4}

               >
                    <Box>
                         <Image src="https://assets.myntassets.com/w_326,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/12/kK059JIu_a31dc002a98d4900b4e79c624c7556e1.png" />
                    </Box>
                    <Box>
                         <Image src="https://assets.myntassets.com/w_326,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/12/LjcGKuOd_1e645450e21844d9b998e64ccdeb9d1e.png" />
                    </Box>
                    <Box>
                         <Image src="https://assets.myntassets.com/w_326,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/12/8l7LcFED_feee6f7a4f5f44348a7dc66ab76666ba.png" />
                    </Box>
               </Flex>

               <Flex>
                    <Box >
                         <Image src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/1/UskhTCue_6dc2919021c148c28a2d1df36dfaf8af.jpg" />
                    </Box>
               </Flex>
               <Flex justify="center" align="center" w="100%" >
                    <Grid
                         templateColumns="repeat(1, 1fr)"
                         w="90%"
                         m="auto"
                    >
                         <Box display="flex" justifyContent="center" alignItems="center">
                              <Image h="60%"
                                   src="https://assets.myntassets.com/w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/QmLuHLur_e2fa5970f9994be49654dc00711ed727.jpg"
                                   maxW="100%"

                              />
                              <Image h="60%" src="https://assets.myntassets.com/w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/QmLuHLur_e2fa5970f9994be49654dc00711ed727.jpg" />
                         </Box>
                         <Box display="flex" justifyContent="center" alignItems="center">
                              <Image h="85%"
                                   src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/11/3OiTbrsX_db00a4b8bb714efd956ec6339048e6f0.jpg"
                                   maxW="100%"

                              />
                         </Box>
                    </Grid>
               </Flex>

               <Spacer />
               <Box>
                    <ImageSlider />
               </Box>
               <Spacer />
               <Flex w="90%" m="auto">
                    <Box>
                         <Image src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/11/fn1avydK_9837e0b576384390acc9607b89ed5bfc.jpg" />
                    </Box>
               </Flex>
               <Spacer />
               <div id="category">

                    {data.map((products, ind) => (
                         <div className="grid-item" key={ind}>
                              <img src={products.image} />
                         </div>
                    ))}
               </div>
               <Spacer />
               <Flex w="85%" margin="5px auto">
                    <Box >
                         <Image src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/10/4tpZM1rH_ae791a255c4d4ae5a7bf8b9a469b4144.jpg" />
                    </Box>
               </Flex>
               <Spacer />
               <Footer />
          </>
     )
}

export default Home