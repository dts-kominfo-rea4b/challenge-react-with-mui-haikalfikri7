// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import {
    Avatar,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Divider,
    Typography,
  } from "@mui/material";
  import React from "react";

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
    // Contact berisi foto, nama, telepon, dan email
    return (
        <>
            <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={data.name} src={data.photo}></Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={data.name}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {data.phone}
              </Typography>
              <br />
              {data.email}
            </React.Fragment>
          }
        ></ListItemText>
      </ListItem>
      <Divider variant="inset" component="li" />
        </>
    );
};

   

export default Contact;
