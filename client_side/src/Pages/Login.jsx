import { useState } from 'react';
import { Box, FormControl, FormLabel, Input, Button, useToast, Text,Link } from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'


function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const toast = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    try {
      const response = await axios.post('https://myntra-backend-ra9i.onrender.com/user/login', {
        email,
        password,
      });

      if (response.data.token) {
        localStorage.setItem('token', response.data.token)

        toast({
          title: 'Login successful!',
          description: 'Welcome back!',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });

        
        navigate('/men'); }
    } catch (error) {
      console.error('Error during login:', error)
      toast({
        title: 'Login failed.',
        description: error.response?.data?.message || 'Invalid email or password.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
     
    }
  };

  return (
    <Box
      maxWidth="400px"
      mx="auto"
      p={6}
      borderWidth={1}
      borderRadius="lg"
      boxShadow="md"
      bg="white"
      mt={8}
    >
      <form onSubmit={handleSubmit}>
        <FormControl mb={4}>
          <FormLabel htmlFor="email" fontSize="md">
            Email
          </FormLabel>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            border={"1.5px solid pink"}
            _placeholder={{ color: 'gray.400' }}
            size="md"
          />
        </FormControl>

        <FormControl mb={6}>
          <FormLabel htmlFor="password" fontSize="md">
            Password
          </FormLabel>
          <Input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            border={"1.5px solid pink"}
            _placeholder={{ color: 'gray.400' }}
            size="md"
          />
        </FormControl>

        <Button
          width="full"
          type="submit"
          size="lg"
          mb={4}
          bg={"#FF3F6C"}
        >
          Log In
        </Button>

        <Text textAlign="center" fontSize="sm" color="gray.500">
          Don't have an account?{' '}
          <Link to="/signup">
            <Text as="span" color="#31A2E4" fontWeight="bold">
              Signup
            </Text>
          </Link>
        </Text>
      </form>
    </Box>
  );
}

export default Login;
