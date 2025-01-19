import { useState } from 'react';
import { Box, FormControl, FormLabel, Input, Button, useToast, Text } from '@chakra-ui/react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [gender, setGender] = useState('')
  const toast = useToast()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response = await axios.post('https://myntra-backend-ra9i.onrender.com/user/register', {
        name,
        email,
        password,
        gender,
      });

      console.log(response.data)

      toast({
        title: 'Registration successful!',
        description: 'You have successfully registered. Please log in.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });

      navigate('/login');
    } catch (error) {
      console.error('Error during registration:', error);
      toast({
        title: 'Registration failed.',
        description: error.response?.data?.message || 'Something went wrong.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <>
    
      <Box id='signup'
        maxWidth="410px"
        mx="auto"
        p={10}
        borderWidth={1}
        borderRadius="lg"
        boxShadow="md"
        bg="white"
        mt={8}
        mb={6}
      >
        <form onSubmit={handleSubmit}>
          <FormControl mb={2}>
            <FormLabel htmlFor="name" fontSize="md">
              Name
            </FormLabel>
            <Input
              id="name"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              border="1.5px solid pink"
              borderRadius="5px"

              _placeholder={{ color: "gray.400" }}
              size="md"
            />
          </FormControl>

          <FormControl mb={2}>
            <FormLabel htmlFor="email" fontSize="md">
              Email
            </FormLabel>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}

              _placeholder={{ color: "gray.400" }}
              size="md"
              border="1.5px solid pink"
              borderRadius="5px"
            />
          </FormControl>

          <FormControl mb={2}>
            <FormLabel htmlFor="password" fontSize="md">
              Password
            </FormLabel>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}

              _placeholder={{ color: "gray.400" }}
              size="md"
              border="1.5px solid pink"
              borderRadius="5px"
            />
          </FormControl>

          <FormControl mb={3}>
            <FormLabel htmlFor="gender" fontSize="md">
              Gender
            </FormLabel>
            <Input
              id="gender"
              type="text"
              placeholder="Enter your gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}

              _placeholder={{ color: "gray.400" }}
              size="md"
              border="1.5px solid pink"
              borderRadius="5px"
            />
          </FormControl>

          <Button
            bg={"#FF3F6C"}
            type="submit"
            width="full"
            size="lg"
            mb={4}
          >
            Sign Up
          </Button>

          <Box textAlign="center" mt={4}>
            <Text fontSize="sm" color="gray.500">
              Already have an account?{" "}
              <Link to="/login" style={{ color: "#3182ce", fontWeight: "bold" }}>
                Log In
              </Link>
            </Text>
          </Box>
        </form>
      </Box>
    </>
  );
}

export default SignUp;
