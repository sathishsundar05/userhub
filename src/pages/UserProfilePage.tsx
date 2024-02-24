import { useEffect, useState, useRef } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import UserProfileComponent from "../components/UserProfileComponent";
import { UserProfileType } from "../types";
import { getUserDetails } from "../api";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";

function UserProfilePage() {
  const [users, setUsers] = useState<UserProfileType[]>([]);
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      const fetchUsers = async () => {
        try {
          const data: UserProfileType[] = await getUserDetails();
          setUsers(data);
        } catch (error) {
          console.log(error)
        }
      };

      fetchUsers();
    }
  }, []);

  return (
    <>
      <Container fixed>
        <Box p={2}>
          <Typography
            variant="h5"
            sx={{
              paddingTop: "15px",
              textTransform: "capitalize",
            }}
          >
            User List
          </Typography>
        </Box>
        {users.length > 0 ? (
          <Box p={2} sx={{ height: "100vh" }}>
            <Grid
              container
              rowSpacing={4}
              columnSpacing={{ xs: 12, sm: 12, md: 6 }}
            >
              {users.map((userInfo, index) => (
                <UserProfileComponent
                  url={userInfo.avatar_url}
                  name={userInfo.login}
                  key={index}
                />
              ))}
            </Grid>
          </Box>
        ) : (
          <Box p={2} sx={{ height: "100vh" }}>
            <Grid
              container
              rowSpacing={4}
              columnSpacing={{ xs: 12, sm: 12, md: 6 }}
            >
              <Grid item xs={12} sm={12} md={4}>
                <Skeleton variant="rectangular" width={250} height={170} />
              </Grid>

              <Grid item xs={12} sm={12} md={4}>
                <Skeleton variant="rectangular" width={250} height={170} />
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <Skeleton variant="rectangular" width={250} height={170} />
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <Skeleton variant="rectangular" width={250} height={170} />
              </Grid>

              <Grid item xs={12} sm={12} md={4}>
                <Skeleton variant="rectangular" width={250} height={170} />
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <Skeleton variant="rectangular" width={250} height={170} />
              </Grid>
            </Grid>
          </Box>
        )}
      </Container>
    </>
  );
}

export default UserProfilePage;
