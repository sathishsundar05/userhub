import { useEffect, useState, useRef } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import UserProfileComponent from "../components/UserProfileComponent";
import InputComponent from "../components/InputComponent";
import { UserProfileType } from "../types";
import { getUserDetails } from "../api";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import { Button } from "@mui/material";

function UserProfilePage() {
  const [users, setUsers] = useState<UserProfileType[]>([]);
  const isMounted = useRef(false);
  const [username, setUsername] = useState<string>('');
  const [userLocation, setuserLocation] = useState<string>('');

  const fetchUsers = async (by?: string, username?: string, location?: string) => {
    
    try {
      const data: UserProfileType[] = await getUserDetails(by, username, location);
      setUsers(data);
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      fetchUsers();
    }
  }, []);

  const handleSearch = () => { 
    if(username.length > 0 && userLocation.length > 0) {
      fetchUsers('both', username, userLocation)
    } else if(username.length > 0) {
      fetchUsers('name', username, '')
    }
    else if(userLocation.length > 0) {
      fetchUsers('location', '', userLocation)
    } else {
      fetchUsers();
    } 
  };

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
        <Box p={2}>
          <InputComponent placeholder="User Name" value={username} onInputUpdated={(v) => setUsername(v.target.value)}></InputComponent>
          <InputComponent placeholder="User Location" value={userLocation} onInputUpdated={(v) => setuserLocation(v.target.value)}></InputComponent>
          <Button variant="contained" onClick={handleSearch}>Submit</Button>
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
