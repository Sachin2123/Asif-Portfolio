import React from "react";
import ComputerIcon from "@mui/icons-material/Computer";
import { Grid, Typography, Paper, Box } from "@mui/material";
import { FolderClosed, Calculator } from "lucide-react";
import AnimatedBackground from "../../component/AnimatedBackground/AnimatedBackground";

const Projects = () => {
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
        {/* Project Section */}
        <Grid item xs={11} sm={10} md={8}>
          <Paper
            elevation={8}
            sx={{
              padding: "20px",
              //   textAlign: "center",
              backgroundColor: "rgba(13, 29, 58, 0.8)",
              //   backdropFilter: "blur(10px)",
              borderRadius: "15px",
              mb: 15,
              width: { lg: 1030 },
              mt: 8,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                ml: 2,
                mb: 2,
              }}
            >
              <FolderClosed color="#1976d2" sx={{ fontSize: "25px", ml: 2 }} />
              <Typography variant="h5" sx={{ color: "white" }}>
                Projects
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                ml: 2,
                mb: 2,
              }}
            >
              <ComputerIcon
                sx={{ color: "#1976d2", fontSize: "25px", ml: 0 }}
              />
              <Typography variant="h6" sx={{ color: "#1976d2", ml: 0 }}>
                Beehive Software Services Pvt. Ltd., Mumbai | HRMS Domain{" "}
              </Typography>
            </Box>

            <Typography variant="subtitle1" sx={{ color: "white", ml: 2 }}>
              Developed and deployed 10+ ASP.NET MVC modules, improving HRMS
              efficiency by 20%.
            </Typography>
            <Typography variant="subtitle1" sx={{ color: "white", ml: 2 }}>
              Automated HR tasks such as leave tracking and payroll, reducing
              manual input by 25%.
            </Typography>
            <Typography variant="subtitle1" sx={{ color: "white", ml: 2 }}>
              Enhanced code quality with peer reviews and comprehensive unit
              testing.
            </Typography>
            <Typography variant="subtitle1" sx={{ color: "white", ml: 2 }}>
              Worked closely with QA to achieve a 95% first-pass success rate.
            </Typography>
            <Typography variant="subtitle1" sx={{ color: "white", ml: 2 }}>
              Mentored junior developers to promote best practices.
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                ml: 2,
                mb: 2,
                mt: 3,
              }}
            >
              <Calculator color="#1976d2" sx={{ fontSize: "25px", ml: 0 }} />
              <Typography variant="h6" sx={{ color: "#1976d2", ml: 0 }}>
                Xangars Infratech Pvt. Ltd., Navi Mumbai | Insurance Domain{" "}
              </Typography>
            </Box>

            <Typography variant="subtitle1" sx={{ color: "white", ml: 2 }}>
              Developed and optimized 5+ ASP.NET Web Forms applications,
              boosting performance by 18%.
            </Typography>
            <Typography variant="subtitle1" sx={{ color: "white", ml: 2 }}>
              Troubleshot and resolved 50+ client-reported issues, enhancing
              system reliability.
            </Typography>
            <Typography variant="subtitle1" sx={{ color: "white", ml: 2 }}>
              Integrated third-party APIs to enhance application functionality.
            </Typography>
            <Typography variant="subtitle1" sx={{ color: "white", ml: 2 }}>
              Delivered high-quality code under tight deadlines using Agile
              methodologies.{" "}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Projects;
