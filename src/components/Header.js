// Kalian bisa menambahkan CSS di src/components/Header.css
// atau langsung tambahkan dengan sx={{}}
import React from 'react';
import { Grid, Typhography} from "@mui/material";
// Header berisi judul dan subtitle
// Judul: Call a Friend
// Subtitle: Your friendly contact app
const Header = () => {
  return (
    <>  
    <Grid item xs={12}>
        <Typhography variant="h3" component="h3" gutterBottom>
            Call a Friend
        </Typhography>
        <Typhography variant="h6" component="h6" gutterBottom>
            Your friendly contact app
        </Typhography>
    </Grid>
    </>
  );
};

export default Header;
