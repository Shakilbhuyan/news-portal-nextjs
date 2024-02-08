
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Grid } from '@mui/material';
import topNews from "@/assets/top-news.png"
import topNews2 from "@/assets/top-news2.png"
import Image from 'next/image';
import { getAllNews } from '@/utills/getAllNews';
import Link from 'next/link';

const LatestNews = async() => {
    const {data} = await getAllNews();
    return (
        <Box className="my-5">
            <Link href={`/${data[0].category}/${data[0]._id}`}>
            <Card>
                <CardActionArea>
                    <CardMedia>
                        <Image src={data[0].thumbnail_url} width={700} height={500} alt="top news"></Image>
                    </CardMedia>
                    <CardContent>
                        <p className='w-[120px] text-white bg-red-600 p-1 my-2 rounded'>{data[0].category}</p>
                        <Typography gutterBottom variant="h5" component="div">
                           {data[0].title}
                        </Typography>
                        <Typography gutterBottom variant="body2" component="div">
                          By-{data[0].author.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {
                                data[0].details.length>60 ? data[0].details.slice(0, 60)+".." :   data[0].details
                            }
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            </Link>
            <Grid className='mt-5' container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {
                    data.map(news => <Grid key={news.id} item xs={6}>
                       <Link href={`/${news.category}/${news._id}`}>
                       <Card>
                                      <CardActionArea>
                                      <CardMedia sx={{
                                    "& img" : {
                                        width:'100%',
                                        height: "250px"
                                    }
                                  }}>
                                              <Image src={news.thumbnail_url} width={700} height={100} alt="top news"></Image>
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
                                              {
                                news.details.length>60 ? news.details.slice(0, 60)+".." : news.details
                            }
                                              </Typography>
                                          </CardContent>
                                      </CardActionArea>
                                  </Card>
                       </Link>
                        </Grid>)
                }
  
</Grid>
        </Box>
    );
};

export default LatestNews;