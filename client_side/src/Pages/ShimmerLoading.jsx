
import { SimpleGrid, Box, Skeleton, Stack } from "@chakra-ui/react";

const ShimmerLoading = () => {
  return (
    <SimpleGrid columns={4} spacing={6} p={5}>
      {Array.from({ length: 20 }).map((_, index) => (
        <Box key={index} p={4} borderWidth="1px" borderRadius="md" boxShadow="sm">
          <Stack spacing={4}>
      
            <Skeleton height="150px" width="200px" borderRadius="md" />
            
    
            <Skeleton height="20px" width="80%" />
            <Skeleton height="16px" width="60%" />
            
            <Skeleton height="40px" width="100px" borderRadius="full" />
          </Stack>
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default ShimmerLoading;
