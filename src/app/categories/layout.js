import CategoryList from '@/components/ui/categoryList/CategoryList';
import { Box, Container, Grid } from '@mui/material';
import React from 'react';

const CategoriesLayout = ({children}) => {
    return (
        <Box>
          <Container>
          <Grid container spacing={2}>
        <Grid item xs={3}>
        <CategoryList></CategoryList>
        </Grid>
        <Grid item xs={4}>
        {
            children
        }
        </Grid>
      </Grid>
          </Container>
        </Box>
    );
};

export default CategoriesLayout;