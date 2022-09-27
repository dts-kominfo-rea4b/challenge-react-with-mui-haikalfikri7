// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card
import { Button, FormControl, TextField } from "@mui/material";

const ContactForm = ({addContact}) => {
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada

    const handleSubmit = () => {
        const name = document.querySelector("#name");
        const phone = document.querySelector("#phone");
        const email = document.querySelector("#email");
        const photo = document.querySelector("#photo");
        const formData = {
          name: name.value,
          phone: phone.value,
          email: email.value,
          photo: photo.value,
        };
        name.value = "";
        phone.value = "";
        email.value = "";
        photo.value = "";
    
        console.log(formData);
    
        addContact(formData);
      };


      

    return (
        <FormControl>
      <TextField
        label="Name"
        name="name"
        id="name"
        type="text"
        sx={{ m: 1, width: "25ch" }}
        variant="standard"
      />
      <TextField
        label="Phone"
        name="phone"
        type="text"
        id="phone"
        sx={{ m: 1, width: "25ch" }}
        variant="standard"
      />
      <TextField
        label="Email"
        name="email"
        id="email"
        type="email"
        sx={{ m: 1, width: "25ch" }}
        variant="standard"
      />
      <TextField
        label="Photo"
        name="photo"
        type="text"
        id="photo"
        sx={{ m: 1, width: "25ch" }}
        variant="standard"
      />

      <Button variant="contained" onClick={handleSubmit}>
        Add New
      </Button>
    </FormControl>
    );
}

export default ContactForm;