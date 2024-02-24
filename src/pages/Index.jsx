import React, { useState } from "react";
import { Box, Button, Container, Heading, Text, Stack, Input, Textarea, useToast, VStack, HStack, Image } from "@chakra-ui/react";
import { FaPaypal, FaYoutube, FaSpotify } from "react-icons/fa";

const Index = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const toast = useToast();

  const handlePurchase = (service) => {
    window.open(`https://www.paypal.com/paypalme/sender.lithuania`, "_blank");
    toast({
      title: "Redirecting to PayPal...",
      description: `You're being redirected to PayPal for purchasing ${service}.`,
      status: "info",
      duration: 5000,
      isClosable: true,
    });
  };

  const handleContact = () => {
    toast({
      title: "Message Sent",
      description: "Thank you for your message, we will get back to you shortly.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    // Reset form
    setEmail("");
    setMessage("");
  };

  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8}>
        <Heading>Welcome to Premium Services</Heading>
        <Text>Choose your premium service and pay easily with PayPal!</Text>

        <Stack direction={["column", "row"]} spacing={4} align="center">
          <Button leftIcon={<FaYoutube />} colorScheme="red" onClick={() => handlePurchase("YouTube Premium")}>
            Buy YouTube Premium
          </Button>
          <Button leftIcon={<FaSpotify />} colorScheme="green" onClick={() => handlePurchase("Spotify Premium")}>
            Buy Spotify Premium
          </Button>
        </Stack>

        <Heading size="md">Need Help?</Heading>
        <Text>Contact our Help Center</Text>
        <Box p={4} borderWidth="1px" borderRadius="lg">
          <VStack spacing={4}>
            <Input placeholder="Your email address" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Textarea placeholder="Your message" value={message} onChange={(e) => setMessage(e.target.value)} />
            <Button colorScheme="blue" onClick={handleContact}>
              Send Message
            </Button>
          </VStack>
        </Box>

        <Heading size="md">Contact Us</Heading>
        <HStack spacing={4}>
          <Image src="https://images.unsplash.com/photo-1556745753-b2904692b3cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHNlcnZpY2V8ZW58MHx8fHwxNzA4Nzg5NzU5fDA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="100px" />
          <Text>If you have any questions or concerns, please reach out to us via email at sender.lithuania@gmail.com</Text>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
