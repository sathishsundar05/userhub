import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { UserProfileType } from "../types";
import { getUserDetail } from "../api";
import UserDetailComponent from "../components/UserDetailComponent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@mui/material/IconButton";
import { useNavigate, useParams } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";

function UserDetailPage() {
  const [userData, setUserData] = useState<UserProfileType>();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data: UserProfileType = await getUserDetail(params.name || "");
        setUserData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  }, [params.name]);

  return (
    <>
      <Container fixed>
        <Box
          p={2}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              paddingTop: "15px",
              textTransform: "capitalize",
            }}
          >
            User Detail
          </Typography>
          <IconButton
            onClick={() => {
              navigate("/");
            }}
          >
            <ArrowBackIcon sx={{ color: "#000" }} />
          </IconButton>
        </Box>
        <Box p={2} sx={{ height: "100vh" }}>
          <Grid
            container
            rowSpacing={4}
            columnSpacing={{ xs: 12, sm: 12, md: 6 }}
          >
            {userData ? (
              <UserDetailComponent
                avatar_url={userData.avatar_url}
                login={userData.login || ""}
                name={userData.name || ""}
                location={userData.location || ""}
                company={userData.company || ""}
                followers={userData.followers || 0}
                following={userData.following || 0}
                public_repos={userData.public_repos}
              />
            ) : (
              <Grid item xs={12} sm={12} md={12}>
                <Skeleton
                  sx={{ bgcolor: "#ececec", width: "100%", height: "300px" }}
                  variant="rectangular"
                />
              </Grid>
            )}
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default UserDetailPage;
