import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Restaurant</Typography>
  <p>
    At our restaurant, we believe in crafting unforgettable dining experiences.
    Our team is dedicated to delivering exceptional service and culinary delights
    that leave a lasting impression. With a passion for hospitality and a commitment
    to excellence, we strive to create an atmosphere that is both welcoming and sophisticated.
  </p>
  <br />
  <p>
    We take pride in our diverse menu, which features a blend of traditional and
    contemporary dishes, prepared with the freshest ingredients. Our chefs are
    skilled artisans who infuse each dish with creativity and flavor, ensuring a
    memorable meal every time you visit.
  </p>
  <br />
  <p>
    Customer satisfaction is our top priority, and we are always ready to go the
    extra mile to meet your needs. Whether you're here for a casual lunch, a romantic
    dinner, or a special celebration, we aim to provide an experience that exceeds
    your expectations.
  </p>
  <br />
  <p>
    Join us and indulge in the perfect harmony of taste and ambiance. We look forward
    to serving you and making your time with us truly special.
  </p>
</Box>  
    </Layout>
  );
};

export default About;
