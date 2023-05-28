import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Box, Typography } from "@mui/material";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <Box>Loading ...</Box>;
  }

  return (
    isAuthenticated && (
      <Box>
        <Box
          component="img"
          src={user.picture}
          alt={user.name}
          sx={{ borderRadius: "50%", height: "40px", width: "40px" }}
        />
        {/* <Typography>{user.name}</Typography>
        <Typography>{user.email}</Typography> */}
      </Box>
    )
  );
};

export default Profile;
