import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import Image from "next/image";
import news from "@/assets/side-top-news.png"

const Sidebar = () => {
    return (
        <Box className="my-5"> 
            <Card>
                <CardActionArea>
                    <CardMedia>
                        <Image src={news} width={700} alt="top news"></Image>
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
        </Box>
    );
};

export default Sidebar;