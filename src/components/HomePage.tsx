import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';

const FirstPageComponent = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if(name === "" || phoneNumber === "" || email === ""){
      return (<Alert severity="error">Fill All Details to access second Page!</Alert>)
    }
    localStorage.setItem("userDetails",JSON.stringify({ name, phoneNumber, email }));
    navigate("/second"); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="column" justifyContent="center" alignItems="center" spacing={2}>
        <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)}/>
        <TextField label="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
        <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <Button type="submit">Submit</Button>
      </Stack>
    </form>
  );
};

export default FirstPageComponent;
