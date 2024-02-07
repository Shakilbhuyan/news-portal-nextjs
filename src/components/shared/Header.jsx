'use client'
import { Box, Container, Typography } from "@mui/material";
import moment from 'moment';
import { useEffect, useState } from "react";


const Header = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      setIsMounted(true);
    }, []);
  
    if (!isMounted) {
      return null; // Prevent rendering on the server
    }
    return (
        <Box>
            <Container className="w-full text-center my-4">
                <h1 className="text-3xl font-semibold text-red-600 italic">TodayNews</h1>
                <Typography variant="body2" textAlign="center" color="gray">
                    News for Todays Update
                </Typography>
                <Typography variant="body2" textAlign="center" color="gray">
                    {
                        moment().format('MMMM Do YYYY, h:mm:ss a')
                    }
                </Typography>
            </Container>
        </Box>
    );
};

export default Header;