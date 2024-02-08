import { getCategoryNews } from '@/utills/getCategoryNews';
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const DaynamicNewPage = async({searchParams}) => {
    const {data} = await getCategoryNews(searchParams.category)
    return (
        <div className='my-5'>
            <h1 className='font-bold'>{searchParams.category}</h1>
            <Grid className='mt-5' container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {
            data.map(news =>     <Grid key={news.id} item xs={6}>
               <Link href={`/${news.category}/${news._id}`}>
               <Card >
                              <CardActionArea>
                                  <CardMedia sx={{
                                    "& img" : {
                                        width:'100%',
                                        height: "250px"
                                    }
                                  }}>
                                      <Image src={news.thumbnail_url} height={100} width={700} alt="top news"></Image>
                                  </CardMedia>
                                  <CardContent>
                                      <p className='w-[120px] text-white bg-red-600 p-1 my-2 rounded'>{news.category}</p>
                                      <Typography gutterBottom component="div">
                                          {news.title}
                                      </Typography>
                                      <Typography gutterBottom variant="body2" component="div">
                                        By-{news.author.name}
                                      </Typography>
                                      <Typography variant="body2" color="text.secondary">
                                         {news.details.length >200? news.details.slice(0, 200)+"..." : news.details}
                                      </Typography>
                                  </CardContent>
                              </CardActionArea>
                          </Card>
               </Link>
                </Grid>)
        }
  </Grid>
        </div>
    );
};

export default  DaynamicNewPage;