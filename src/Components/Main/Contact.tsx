import  { motion } from "framer-motion";
import { Send } from "lucide-react";
import React, { useState } from "react";
import { pageVariants, pageTransition } from "../../utils/pageAnimations";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

//shape of the formData
interface FormData {
  name: string;
  email: string;
  message: string;
}
const Contact = () => {
  const navigate = useNavigate()
  const [formdata, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | { target: { name: string; value: string } },
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = () => {
    alert(JSON.stringify(formdata));
  };
  return (
    <>
      {/* Main Div */}
      <motion.div className=" bg-black/10 backdrop-blur-md min-h-screen flex flex-col gap-10 items-center px-3  pt-[25%] sm:pt-[10%] pb-[5%]  "
       variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={pageTransition}>
        <div className="text-white  pl-7    text-center relative top-1/8 space-y-3 ">
          <h1 className="text-white text-2xl text-primary-font sm:text-3xl md:text-5xl font-bold ">
            Connect With Me !
          </h1>
          <p className="text-white/60 text-sm sm:text-1xl md:text-xl ">
            If Your Willing to Collaborate with Me Don't Hesitate
          </p>
        </div>
        {/* Form Div */}
        <div className="flex flex-col w-full sm:max-w-[50%] border border-gray-600 rounded-sm">
          <div className="p-5 space-y-2">
            <h1 className="text-white text-xl sm:text-xl">
              Just Reach Me Out..!!
            </h1>
            <p className="text-white/60 text-sm  ">
              Fill the Below Form , i will Get Connect with You as soon as
              Possible
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col  p-5 gap-10">
            <div className="flex flex-col sm:flex-row gap-10">
               <TextField
              name="name"
              value={formdata.name}
              onChange={handleChange}
              fullWidth
              required
              label="Name"
              InputProps={{
                sx: {
                  color: "white",
                },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "rgba(255,255,255,0.4)",
                  },
                  "&:hover fieldset": {
                    borderColor: "white",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "white", // sky-400
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "white",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "white",
                },
                 '& input:-webkit-autofill': {
      WebkitBoxShadow: '0 0 0 1000px #000 inset',
      WebkitTextFillColor: 'white',
      caretColor: 'white',
    },
              }}
            />
            <TextField
              name="email"
              value={formdata.email}
              onChange={handleChange}
              fullWidth
              required
              label="Email"
              InputProps={{
                sx: {
                  color: "white",
                },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "rgba(255,255,255,0.4)",
                  },
                  "&:hover fieldset": {
                    borderColor: "white",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "white", // sky-400
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "white",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "white",
                },
                 '& input:-webkit-autofill': {
      WebkitBoxShadow: '0 0 0 1000px #000 inset',
      WebkitTextFillColor: 'white',
      caretColor: 'white',
    },
              }}
            />
            </div>
           
            <TextField
              name="message"
              value={formdata.message}
              onChange={handleChange}
              fullWidth
              multiline
              required
              minRows={3}
              maxRows={8}
              label="Message"
              InputProps={{
                sx: {
                  color: "white",
                },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "rgba(255,255,255,0.4)",
                  },
                  "&:hover fieldset": {
                    borderColor: "white",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "white", // sky-400
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "white",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "white",
                },
                 '& input:-webkit-autofill': {
      WebkitBoxShadow: '0 0 0 1000px #000 inset',
      WebkitTextFillColor: 'white',
      caretColor: 'white',
    },
              }}
            />
            <div className="flex justify-between">
               <Button
  variant="contained"
  disabled={!formdata.name || !formdata.email || !formdata.message}
  onClick={handleSubmit}
  className={`rounded-sm! text-transform-none! ${
    !formdata.name || !formdata.email || !formdata.message
      ? "bg-white/10! text-white/30! border border-white/10! " 
      : "bg-white! text-black! hover:bg-white/90!"           
  }`}
  sx={{ textTransform: "none" }}
  endIcon={<Send className="h-4! animate-bounce"/>}
>
  Connect
</Button>
               <Button className="bg-white! rounded-sm! text-black!"
                sx={{textTransform:'none'}}
               variant="contained" 
               onClick={() => navigate("/")}>Cancel</Button>
            </div>
          </form>
        </div>
      </motion.div>
    </>
  );
};

export default Contact;
