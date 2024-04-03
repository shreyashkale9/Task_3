import React from "react";
import { Box, Card, Typography, Badge } from "@mui/material";
import DescriptionSharpIcon from "@mui/icons-material/DescriptionSharp";
import StarBorderPurple500SharpIcon from "@mui/icons-material/StarBorderPurple500Sharp";
import MoreHorizSharpIcon from "@mui/icons-material/MoreHorizSharp";

const ApplicationCard = () => {
  return (
    <Card
      variant="outlined"
      sx={{
        backgroundColor: "#f3e5f5",
        display: "flex",
        flexDirection: "row",
        marginTop: "5px",
        marginLeft: "100px",
        marginRight: "200px",
        position: "relative",
        borderRadius: "15px",
      }}
    >
      {/* For tag overlay */}
      <Badge
        color="primary"
        badgeContent="Revert Back"
        overlap="rectangular"
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        style={{ minWidth: "80px", borderRadius: "0px" }}
        sx={{
          position: "absolute",
          top: 15,
          left: 40,
          zIndex: 1,
          borderRadius: "0px",
          padding: "4px",
          backgroundColor: "#f3e5f5",
          color: "white",
        }}
      />

      <Badge
        color="error"
        badgeContent="Urgent"
        overlap="rectangular"
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        sx={{
          position: "absolute",
          top: 40,
          left: 27,
          zIndex: 1,
          padding: "4px",
          backgroundColor: "#f3e5f5",
          color: "white",
        }}
      />
      <Box sx={{ padding: "20px", display: "flex", height: "30px" }}>
        <DescriptionSharpIcon
          color="primary"
          sx={{ height: "120px", width: "80px" }}
        />
      </Box>
      <Box sx={{ padding: "20px", flex: 1 }}>
        <Box sx={{ display: "flex" }}>
          <Typography color="#f06292" variant="h5" gutterBottom>
            Subject :
          </Typography>
          <Typography variant="h5" gutterBottom>
            &nbsp; Permission to bring new instructions for Entc laboratory
          </Typography>
        </Box>
        <Box sx={{ display: "flex " }}>
          <Typography color="#f06292" variant="h6">
            From :
          </Typography>
          <Typography variant="h6">&nbsp; Prof.M.R.Pande</Typography>
        </Box>
        <Box sx={{ display: "flex " }}>
          <Typography color="#f06292" variant="h6">
            Date :
          </Typography>
          <Typography variant="h6">&nbsp; 27/09/2023</Typography>
        </Box>
        <Box sx={{ display: "flex " }}>
          <Typography color="#f06292" variant="h6">
            Application Id :{" "}
          </Typography>
          <Typography variant="h6">&nbsp; 111910114</Typography>
        </Box>
      </Box>
      <Box sx={{ marginRight: "10px", padding: "10px" }}>
        <Box sx={{ paddingLeft: "82px" }}>
          <StarBorderPurple500SharpIcon
            fontSize="large"
            sx={{ marginRight: "10px" }}
          />
          <MoreHorizSharpIcon fontSize="large" />
        </Box>
        <Box sx={{ marginTop: "50px" }}>
          <Box sx={{ display: "flex" }}>
            <Typography color="#f06292" variant="h6">
              Revise :{" "}
            </Typography>
            <Typography variant="h6"> &nbsp; 2 days</Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Typography color="#f06292" variant="h6">
              Pending :{" "}
            </Typography>
            <Typography variant="h6"> &nbsp; 2 days</Typography>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default ApplicationCard;
