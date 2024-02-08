import { getAllCategories } from "@/utills/getAllCategories";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import Link from "next/link";


const CategoryList = async() => {
    const {data:allCategoeies} = await getAllCategories();
    return (
        <Box>
            <Typography variant="h6">Categories</Typography>
            <Divider/>
            <Stack>
                {
                    allCategoeies.map(category =>
                        <Button variant="outlined" key={category.id}>
                                 <Link href={`/categories/news?category=${category.title.toLowerCase()}`}>  {category.title}</Link>
                        </Button>
                    )
                }
            </Stack>
        </Box>
    );
};

export default CategoryList;