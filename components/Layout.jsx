import { AppBar, Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Head from "next/head";
import React from "react";
import date from "../utils/date";

const datae = date;
export const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>amazonn - ecommerce</title>
      </Head>
      <AppBar position="static" style={{ backgroundColor: "#203040" }}>
        <Toolbar>
          <Typography>amazonn</Typography>
        </Toolbar>
      </AppBar>
      <Container style={{ minHeight: "80vh" }}>{children}</Container>
      <footer
        style={{
          textAlign: "center",
          borderTop: "#fff solid 1px",
          paddingTop: "12px",
        }}
      >
        All Right Reserved. @{datae} Amazonn.
      </footer>
    </div>
  );
};
