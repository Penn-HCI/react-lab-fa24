import {
    Box,
    Button,
    ButtonGroup,
    Flex,
    IconButton,
    useBreakpointValue,
  } from "@chakra-ui/react";
  import { useNavigate } from "react-router-dom";
  import { Menu } from "react-feather";


const Navbar = () => {
    const isDesktop = useBreakpointValue({
        base: true,
        sm: false,
        md: true,
        lg: true,
      });
      const navigate = useNavigate();
    
      return (
        <Box as="nav" bg="bg-surface" boxShadow="sm" p={4}>
    <Flex align="center" width="100%"> {/* Ensure the content is vertically centered and takes full width */}
    <img
        src="hci.png"
        width="70px"
        alt="Logo"
        style={{ marginLeft: "30px" }}
        onClick={() => navigate('/react-lab-fa24')}
      />
      {isDesktop ? (
        <Flex justify="flex-start" flex="1" marginLeft="30px"> {/* Align buttons to the left */}
          <ButtonGroup variant="link" spacing="8">
            <Button key="Home" onClick={() => navigate('/react-lab-fa24')} variant="ghost">Home</Button>
            <Button key="Design" onClick={() => navigate('/react-lab-fa24/design')} variant="ghost">Design</Button>
          </ButtonGroup>
        </Flex>
      ) : (
        <IconButton 
          alignSelf="center"
          marginLeft="auto"
          marginRight="10px"
          variant="ghost"
          icon={<Menu fontSize="1.25rem" />} 
          aria-label="Open Menu"
        />
      )}
    </Flex>
  </Box>
      );
    }
    
  export default Navbar;