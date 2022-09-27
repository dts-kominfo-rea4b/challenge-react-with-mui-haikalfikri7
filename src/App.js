import { Card, Grid, List } from "@mui/material";
import React, { useState } from "react";
import "./App.css";
import Contact from "./components/Contact";
import ContactForm from "./components/ContactForm";
import Header from "./components/Header";
// Uncomment untuk memuat daftar kontak
import contactsJSON from "./data/contacts.json";
// import contactsJSON from './data/contacts.json';
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  const [listContact, setcontact] = useState(contactsJSON);
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm
  

  const addContact = (data) => {
    const newContact = [...listContact, data];
    setcontact(newContact);
  };

  return (
    <div className="App">
       <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={4}>
          <Card variant="outlined">
            <ContactForm addContact={addContact} />
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card variant="outlined">
            {listContact.map((item, index) => {
              return (
                <List sx={{ width: "100%", maxWidth: 360 }} key={index}>
                  <Contact data={item} />
                </List>
              );
            })}
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
