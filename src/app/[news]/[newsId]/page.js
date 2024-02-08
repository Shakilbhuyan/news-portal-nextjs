import { getSingleNews } from '@/utills/getSingleNews';
import { Avatar, Box, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const NewsDetailsPage = async ({ params }) => {
  const {data: news} = await getSingleNews(params.newsId)
    return (
        <Box className="m-5">
            <Container>
                <Grid container spacing={2}>
                    <Grid item lg={6}>
                        <Image src={news.thumbnail_url} width={800} height={500} alt="image"></Image>
                        <Grid container spacing={2} className='my-2'>
                            <Grid item lg={6}>
                                <Image src={news.thumbnail_url} width={800} height={500} alt="image"></Image>
                            </Grid>
                            <Grid item lg={6}>
                            <Image src={news.thumbnail_url} width={800} height={500} alt="image"></Image>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={6}>
                        <Typography variant='h5'>{news.title}</Typography>
                       <Box sx={{
                        display: 'flex',
                        gap: 3,
                        alignItems: 'center'
                       }}>
                       <Avatar alt="Remy Sharp" src={news.author.img} />
                       <Typography>By-
                        {news.author.name}
                       </Typography>
                       <Typography>-
                        {news.author.published_date}
                       </Typography>
                       </Box>
                       <Typography style={{
                        textAlign: "justify",
                        whiteSpace:"pre-line",
                        margin: "10px 0px",
                        color:"gray"
                       }}>{news.details}</Typography>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
};

export default NewsDetailsPage;