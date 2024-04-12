import { Box, Flex, VStack, Text, Image, Link, Input, Textarea, Button, Container, Heading } from "@chakra-ui/react";
import { FaEnvelope, FaUser, FaImages, FaHome } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      <Flex as="nav" bg="blue.500" color="white" p={4} justifyContent="space-between">
        <Box fontSize="xl" fontWeight="bold">
          Chester Arthur
        </Box>
        <Box>
          <Link href="#home" p={2}>
            <FaHome /> Home
          </Link>
          <Link href="#biography" p={2}>
            <FaUser /> Biography
          </Link>
          <Link href="#gallery" p={2}>
            <FaImages /> Gallery
          </Link>
          <Link href="#contact" p={2}>
            <FaEnvelope /> Contact
          </Link>
        </Box>
      </Flex>

      <Container maxW="container.md" pt={10} id="home">
        <Heading as="h1" size="xl" mb={4}>
          Welcome to Chester Arthur's Site
        </Heading>
        <Text fontSize="lg">Explore the life, gallery, and ways to contact Chester Arthur.</Text>
      </Container>

      <Container maxW="container.md" py={10} id="biography">
        <Heading as="h2" size="lg" mb={4}>
          Biography
        </Heading>
        <Text>Chester Alan Arthur (October 5, 1829 – November 18, 1886) was an American attorney and politician who served as the 21st president of the United States from 1881 to 1885. Arthur was born in Fairfield, Vermont, and studied at Union College. He practiced law in New York City before being appointed by President Ulysses S. Grant as the Collector of the Port of New York, a position he held from 1871 to 1878.</Text>
      </Container>

      <Container maxW="container.md" py={10} id="gallery">
        <Heading as="h2" size="lg" mb={4}>
          Gallery
        </Heading>
        <Flex gap={4}>
          <Image src="https://images.unsplash.com/photo-1580129924992-02eaa9a5509b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxDaGVzdGVyJTIwQXJ0aHVyJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzEyOTU1MDY0fDA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="250px" />
          <Image src="https://images.unsplash.com/photo-1682695798256-28a674122872?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxDaGVzdGVyJTIwQXJ0aHVyJTIwaGlzdG9yaWNhbCUyMGV2ZW50fGVufDB8fHx8MTcxMjk1NTA2NHww&ixlib=rb-4.0.3&q=80&w=1080" boxSize="250px" />
          <Image src="https://images.unsplash.com/photo-1579783928621-7a13d66a62d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxDaGVzdGVyJTIwQXJ0aHVyJTIwcGFpbnRpbmd8ZW58MHx8fHwxNzEyOTU1MDY1fDA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="250px" />
        </Flex>
      </Container>

      <Container maxW="container.md" py={10} id="contact">
        <Heading as="h2" size="lg" mb={4}>
          Contact
        </Heading>
        <VStack spacing={4}>
          <Input placeholder="Your Name" />
          <Input placeholder="Your Email" type="email" />
          <Textarea placeholder="Your Message" />
          <Button colorScheme="blue">Send Message</Button>
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;
