import React from "react";
import { Grid, Typography, Paper, Box } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import AnimatedBackground from "../../component/AnimatedBackground/AnimatedBackground";

const Experience = () => {
  return (
    <Box sx={{ position: "relative", minHeight: "100vh" }}>
      <AnimatedBackground />

      <Grid
        container
        spacing={5}
        sx={{
          position: "relative",
          zIndex: 1,
          marginTop: "50px",
          justifyContent: "center",
          minHeight: "calc(100vh - 50px)",
        }}
      >
        {/* Professional Experience Section */}
        <Grid item xs={11} sm={10} md={8}>
          <Paper
            elevation={8}
            sx={{
              padding: "20px",
              //   textAlign: "center",
              backgroundColor: "rgba(13, 29, 58, 0.8)",
              //   backdropFilter: "blur(10px)",
              borderRadius: "15px",
              width: { lg: 1030 },
              mt: 8,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                // justifyContent: "center",
                ml: 2,
                mb: 2,
              }}
            >
              <WorkIcon sx={{ color: "#1976d2", fontSize: "25px" }} />
              <Typography variant="h5" sx={{ color: "white" }}>
                Professional Experience
              </Typography>
            </Box>

            <Box sx={{ display: "flex", gap: 1, flexDirection: "column" }}>
              <Typography variant="h6" sx={{ color: "#1976d2", ml: 2 }}>
                Software Engineer
              </Typography>
              <Typography variant="subtitle1" sx={{ color: "white", ml: 2 }}>
                Beehive Software Pvt. Ltd. (Mumbai) | HRMS Domain
              </Typography>
              <Typography variant="subtitle2" sx={{ color: "white", ml: 2 }}>
                July 2023 - Present
              </Typography>
            </Box>

            <Box
              sx={{ display: "flex", gap: 1, flexDirection: "column", mt: 4 }}
            >
              <Typography variant="h6" sx={{ color: "#1976d2", ml: 2 }}>
                .Net Developer
              </Typography>
              <Typography variant="subtitle1" sx={{ color: "white", ml: 2 }}>
                Xangars Infratech Pvt. Ltd., Navi Mumbai | Insurance Domain{" "}
              </Typography>
              <Typography variant="subtitle2" sx={{ color: "white", ml: 2 }}>
                April 2022 – May 2023
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Experience;
