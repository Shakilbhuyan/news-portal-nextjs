import LatestNews from "@/components/ui/LatestNews/LatestNews";
import Sidebar from "@/components/ui/LatestNews/Sidebar/Sidebar";
import { Grid } from "@mui/material";

const Homepage = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <LatestNews></LatestNews>
        </Grid>
        <Grid item xs={4}>
          <Sidebar></Sidebar>
        </Grid>
      </Grid>
    </div>
  );
};

export default Homepage;