import React from 'react';
import { Box, Container, VStack, Heading, Text, Image, Button, useColorModeValue } from "@chakra-ui/react";
import { FaEdit, FaHeart, FaComment } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const BlogPost = ({ title, excerpt, imageUrl }) => {
  const bg = useColorModeValue("gray.100", "gray.700");
  return (
    <Box bg={bg} p={5} borderRadius="md" boxShadow="md" mb={4}>
      <Image src={imageUrl} alt={title} borderRadius="md" mb={3} />
      <Heading as="h3" size="md" mb={2}>{title}</Heading>
      <Text mb={3}>{excerpt}</Text>
      <Button leftIcon={<FaHeart />} mr={2} size="sm">Like</Button>
      <Button leftIcon={<FaComment />} size="sm">Comment</Button>
    </Box>
  );
};

const Index = ({ posts }) => {
  const navigate = useNavigate();
  const headerBg = useColorModeValue("blue.500", "blue.200");
  const headerColor = useColorModeValue("white", "gray.800");

  return (
    <Box>
      <Box bg={headerBg} color={headerColor} py={8} mb={8}>
        <Container maxW="container.xl">
          <Heading as="h1" size="2xl">My Personal Blog</Heading>
          <Text mt={2}>Welcome to my corner of the internet!</Text>
        </Container>
      </Box>
      <Container maxW="container.xl">
        <VStack spacing={8} align="stretch">
          <Button leftIcon={<FaEdit />} colorScheme="green" alignSelf="flex-end" onClick={() => navigate('/new-post')}>
            New Post
          </Button>
          {posts.map((post, index) => (
            <BlogPost 
              key={index}
              title={post.title} 
              excerpt={post.excerpt}
              imageUrl={post.imageUrl}
            />
          ))}
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;