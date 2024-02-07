
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Grid } from '@mui/material';
import topNews from "@/assets/top-news.png"
import topNews2 from "@/assets/top-news2.png"
import Image from 'next/image';

const LatestNews = () => {
    return (
        <Box className="my-5">
            <Card>
                <CardActionArea>
                    <CardMedia>
                        <Image src={topNews} width={700} alt="top news"></Image>
                    </CardMedia>
                    <CardContent>
                        <p className='w-[120px] text-white bg-red-600 p-1 my-2 rounded'>Technology</p>
                        <Typography gutterBottom variant="h5" component="div">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, blanditiis?
                        </Typography>
                        <Typography gutterBottom variant="body2" component="div">
                          By-lorem ipsum
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Grid className='mt-5' container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={6}>
  <Card>
                <CardActionArea>
                    <CardMedia>
                        <Image src={topNews2} width={700} alt="top news"></Image>
                    </CardMedia>
                    <CardContent>
                        <p className='w-[120px] text-white bg-red-600 p-1 my-2 rounded'>Technology</p>
                        <Typography gutterBottom component="div">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, blanditiis?
                        </Typography>
                        <Typography gutterBottom variant="body2" component="div">
                          By-lorem ipsum
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
  </Grid>
  <Grid item xs={6}>
  <Card>
                <CardActionArea>
                    <CardMedia>
                        <Image src={topNews2} width={700} alt="top news"></Image>
                    </CardMedia>
                    <CardContent>
                        <p className='w-[120px] text-white bg-red-600 p-1 my-2 rounded'>Technology</p>
                        <Typography gutterBottom component="div">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, blanditiis?
                        </Typography>
                        <Typography gutterBottom variant="body2" component="div">
                          By-lorem ipsum
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
  </Grid>
  <Grid item xs={6}>
  <Card>
                <CardActionArea>
                    <CardMedia>
                        <Image src={topNews2} width={700} alt="top news"></Image>
                    </CardMedia>
                    <CardContent>
                        <p className='w-[120px] text-white bg-red-600 p-1 my-2 rounded'>Technology</p>
                        <Typography gutterBottom component="div">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, blanditiis?
                        </Typography>
                        <Typography gutterBottom variant="body2" component="div">
                          By-lorem ipsum
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
  </Grid>
  <Grid item xs={6}>
  <Card>
                <CardActionArea>
                    <CardMedia>
                        <Image src={topNews2} width={700} alt="top news"></Image>
                    </CardMedia>
                    <CardContent>
                        <p className='w-[120px] text-white bg-red-600 p-1 my-2 rounded'>Technology</p>
                        <Typography gutterBottom component="div">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, blanditiis?
                        </Typography>
                        <Typography gutterBottom variant="body2" component="div">
                          By-lorem ipsum
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
  </Grid>
</Grid>
        </Box>
    );
};

export default LatestNews;