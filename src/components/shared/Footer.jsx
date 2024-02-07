import { Box, Button, Container, IconButton, Typography} from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Link from "next/link";


const Footer = () => {
    const navItems = [
        {
        route: 'Home',
        path : '/'
      },
      {
        route: 'Pages',
        path : '/pages'
      },
      {
        route: 'Category',
        path : '/category'
      },
      {
        route: 'News',
        path : '/news'
      },
      {
        route: 'About',
        path : '/about'
      },
      {
        route: 'Contact',
        path : '/contact'
      },
      ];
    return (
        <Box className="bg-black px-2 py-10"  >
            <Container>
            <Box sx={{"& svg": {
            color: "white"
          }}} className="w-full text-center">
        <IconButton>
                <FacebookIcon></FacebookIcon>
          </IconButton>
          <IconButton>
            <InstagramIcon></InstagramIcon>
          </IconButton>
          <IconButton>
            <TwitterIcon></TwitterIcon>
          </IconButton>
          </Box>
          <Box className='w-full text-center'>
            {navItems.map((item) => (
              <Link key={item} href={item.path}>
                <Button className='text-white'>
                  {
                    item.route
                  }
                </Button>
              </Link>
            ))}
          </Box>
          <Typography variant="body2" textAlign="center" color = "gray">
            @2024 CopyRight 
          </Typography>
            </Container>
        </Box>
    );
};

export default Footer;