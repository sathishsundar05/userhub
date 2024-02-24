import React from "react";
import { UserProfileChildProp } from "../types/index";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import ListComponent from "./ListComponent";

const UserProfileComponent: React.FC<UserProfileChildProp> = ({
  avatar_url,
  login,
  name,
  location,
  company,
  followers,
  following,
  public_repos,
}) => {
  const navigate = useNavigate();

  return (
    <Grid item xs={12} sm={12} md={12}>
      <Paper
        elevation={0}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyItems: "center",
          textAlign: "center",
          paddingY: "20px",
          borderColor: "#fff",
        }}
        onClick={() => {
          navigate("/userdetail/" + name);
        }}
      >
        <Avatar
          alt={name}
          src={avatar_url}
          sx={{ width: 150, height: 150, margin: "auto" }}
        />
        <Typography
          sx={{
            paddingTop: "15px",
            textTransform: "capitalize",
            fontSize: "1.125rem",
          }}
        >
          {login}
        </Typography>
        <Box
          sx={{
            margin: 'auto'
          }}
        >
          <ListComponent label="Name" text={name}></ListComponent>
          <ListComponent label="Location" text={location}></ListComponent>
          <ListComponent label="Company" text={company}></ListComponent>
          <ListComponent label="Followes" text={followers}></ListComponent>
          <ListComponent label="Following" text={following}></ListComponent>
          <ListComponent
            label="Public Repositories"
            text={public_repos}
          ></ListComponent>
        </Box>
      </Paper>
    </Grid>
  );
};

export default UserProfileComponent;
