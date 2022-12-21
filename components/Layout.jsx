import { AppBar, Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Head from "next/head";
import React from "react";

export const Layout = ({ children }) => {
  let date = new Date();
  date = date.getFullYear();
  return (
    <div>
      <Head>
        <title>amazonn - ecommerce</title>
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography>amazonn</Typography>
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>
      <footer>All Right Reserved. @{date} Amazonn.</footer>
    </div>
  );
};
