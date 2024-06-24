import React, { useState } from 'react';
import { Box, Container, VStack, Heading, FormControl, FormLabel, Input, Textarea, Button, useToast, useColorModeValue } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';

const NewPost = ({ addPost }) => {
  const bg = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("gray.800", "white");
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const navigate = useNavigate();
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && excerpt && imageUrl) {
      addPost({ title, excerpt, imageUrl });
      toast({
        title: "Post created.",
        description: "Your new blog post has been added successfully.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      navigate('/');
    } else {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box bg={bg} color={color} minHeight="100vh">
      <Container maxW="container.md" py={8}>
        <VStack spacing={8} align="stretch">
          <Heading as="h1" size="xl">Create New Blog Post</Heading>
          <form onSubmit={handleSubmit}>
            <VStack spacing={4}>
              <FormControl isRequired>
                <FormLabel>Title</FormLabel>
                <Input 
                  type="text" 
                  value={title} 
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter post title"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Excerpt</FormLabel>
                <Textarea 
                  value={excerpt} 
                  onChange={(e) => setExcerpt(e.target.value)}
                  placeholder="Enter post excerpt"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Image URL</FormLabel>
                <Input 
                  type="url" 
                  value={imageUrl} 
                  onChange={(e) => setImageUrl(e.target.value)}
                  placeholder="Enter image URL"
                />
              </FormControl>
              <Button type="submit" colorScheme="blue">Create Post</Button>
            </VStack>
          </form>
        </VStack>
      </Container>
    </Box>
  );
};

export default NewPost;