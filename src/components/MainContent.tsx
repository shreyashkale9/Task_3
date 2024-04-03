import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import CalendarMonthSharpIcon from "@mui/icons-material/CalendarMonthSharp";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ApplicationCard from "./ApplicationCard";
import Typography from "@mui/material/Typography";
// import Link from "next/link";
import { useRouter } from "next/navigation";

const Documents = [
  {
    name: "All Documents",
    quantity: 74,
  },
  {
    name: "Completed",
    quantity: 25,
  },
  {
    name: "Pending",
    quantity: 20,
  },
  {
    name: "Rejected",
    quantity: 15,
  },
  {
    name: "Favourites",
    quantity: 15,
  },
  {
    name: "My Sign",
    quantity: 89,
  },
];

const MainContent = () => {
  const router = useRouter();

  return (
    <Box
      sx={{
        // width: "full",
        backgroundColor: "#FFFFFF",
        // borderRadius: "5px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <Box sx={{ display: "flex" }}>
          {Documents.map((data) => (
            <Button
              key={data.name}
              variant="contained"
              style={{
                fontWeight: "bold",
                padding: "5px 20px",
                marginRight: "10px",
                color: "#000000",
                backgroundColor: "#ffffff",
                textTransform: "none",
              }}
            >
              {data.name} {data.quantity}
            </Button>
          ))}
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Button
            variant="text"
            sx={{
              marginRight: "20px",
              "&:hover": { backgroundColor: "#ffffff" },
            }}
          >
            <CalendarMonthSharpIcon fontSize="large" />
          </Button>
          <Button
            variant="contained"
            style={{
              color: "#000000",
              backgroundColor: "#e1bee7",
              borderRadius: "10px",
              fontWeight: "bold",
              textTransform: "none",
            }}
          >
            Raise Request
          </Button>
        </Box>
      </Box>
      {/* Content of the main component */}
      <Box>
        {/* <Link href="/createdocument"> */}
        <Button
          variant="contained"
          startIcon={<AddCircleIcon />}
          style={{
            marginLeft: "100px",
            marginTop: "25px",
            marginRight: "20px",
            color: "#ffffff",
            backgroundColor: "#4a148c",
            borderRadius: "3px",
            fontWeight: "bold",
            textTransform: "none",
          }}
          onClick={() => router.push("/createdocument")}
        >
          New Document
        </Button>
        {/* </Link> */}
        <TextField
          variant="outlined"
          placeholder="Search..."
          size="small"
          style={{
            width: "450px",
            marginTop: "25px",
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Box>
        <Typography
          sx={{
            marginLeft: "100px",
            marginTop: "30px",
          }}
          variant="h6"
        >
          27 Sept 2023
        </Typography>
      </Box>
      <Box>
        <ApplicationCard />
        <ApplicationCard />
      </Box>
      <Box>
        <Typography
          sx={{
            marginLeft: "100px",
            marginTop: "30px",
          }}
          variant="h6"
        >
          25 Sept 2023
        </Typography>
      </Box>
      <Box>
        <ApplicationCard />
      </Box>
    </Box>
  );
};

export default MainContent;
