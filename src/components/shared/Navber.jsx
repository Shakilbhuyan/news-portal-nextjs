'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { IconButton, Stack } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Link from 'next/link';
import Header from './Header';


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
  path : '/categories/news?category=all-news'
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

function Navber() {

  return (
<>
<Header></Header> 
<AppBar position="static" className='bg-black'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
         <h1 className='text-red-600 italic'>TodayNews</h1>
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
          <Box>
        <Stack direction="row" sx={{"& svg": {
          color: "white"
        }}}>
        <IconButton>
                <FacebookIcon></FacebookIcon>
          </IconButton>
          <IconButton>
            <InstagramIcon></InstagramIcon>
          </IconButton>
          <IconButton>
            <TwitterIcon></TwitterIcon>
          </IconButton>
        </Stack>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
</>
  );
}
export default Navber;