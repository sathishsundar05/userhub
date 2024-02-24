import React from "react";
import { UserProfileProps } from "../types/index";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";

const UserProfile: React.FC<UserProfileProps> = ({ url, name }) => {
  const navigate = useNavigate();

  return (
    <Grid item xs={12} sm={12} md={4}>
      <Paper
        elevation={0}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyItems: "center",
          textAlign: "center",
          paddingY: "20px",
          borderRadius: "5px",
          border: 1,
          borderColor: "#d3d3d3",
          "&:hover": { backgroundColor: "#f3f3f3", cursor: "pointer" },
        }}
        onClick={() => {
          navigate("/userdetail/" + name);
        }}
      >
        <Avatar
          alt={name}
          src={url}
          sx={{ width: 80, height: 80, margin: "auto" }}
        />
        <Typography
          sx={{
            paddingTop: "15px",
            textTransform: "capitalize",
            fontSize: "1.125rem",
          }}
        >
          {name}
        </Typography>
      </Paper>
    </Grid>
  );
};

export default UserProfile;
