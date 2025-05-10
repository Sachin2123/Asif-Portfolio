import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import SchoolIcon from "@mui/icons-material/School";
import RoomIcon from "@mui/icons-material/Room";
import { Button, Grid, Typography, Paper, Box } from "@mui/material";
import { FileUser } from "lucide-react";
import AnimatedBackground from "../../component/AnimatedBackground/AnimatedBackground";

const AboutMe = () => {
  const Icons = [
    {
      link: "https://www.linkedin.com/in/md-asif-ansari-3a7a841aa/",
      IconName: "LinkedIn",
      icons: LinkedInIcon,
    },
    // {
    //   link: "https://github.com/Sachin2123",
    //   IconName: "GitHub",
    //   icons: GitHubIcon,
    // },
    {
      IconName: "Email",
      icons: EmailIcon,
      link: "mailto:ansarimdasif36@gmail.com",
    },
    {
      IconName: "Navi Mumbai",
      icons: RoomIcon,
    },
    {
      link: "https://wa.me/9076183213",
      IconName: "WhatsApp",
      icons: WhatsAppIcon,
    },
  ];

  return (
    <Box sx={{ position: "relative", minHeight: "100vh", mb: 12 }}>
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
        {/* My Self Section */}
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{ mt: 8, px: 2 }}
        >
          <Grid item xs={12} sm={10} md={8} lg={6} xl={5}>
            <Paper
              elevation={8}
              sx={{
                padding: 4,
                textAlign: "center",
                backgroundColor: "rgba(13, 29, 58, 0.8)",
                color: "white",
                borderRadius: "15px",
                width: { md: 1000 },
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  color: "#1976d2",
                  mb: 2,
                  fontWeight: "bold",
                  fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                }}
              >
                Hello! I'm MD ASIF ANSARI
              </Typography>

              <Typography variant="h5" sx={{ color: "white", mb: 4 }}>
                .NET Developer
              </Typography>

              <Grid container spacing={2} justifyContent="center">
                {Icons.map((item, index) => (
                  <Grid item key={index}>
                    <Button
                      variant="outlined"
                      color="primary"
                      startIcon={<item.icons />}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: "white",
                        borderColor: "#1976d2",
                        "&:hover": {
                          backgroundColor: "#1976d2",
                          color: "white",
                        },
                      }}
                    >
                      {item.IconName}
                    </Button>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
        </Grid>

        {/* Professional Summary Section */}
        <Grid item xs={11} sm={10} md={8}>
          <Paper
            elevation={8}
            sx={{
              padding: "20px",
              //   textAlign: "center",
              backgroundColor: "rgba(13, 29, 58, 0.8)",
              //   backdropFilter: "blur(10px)",
              borderRadius: "15px",
              width: { md: 1030 },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                mb: 2,
              }}
            >
              <FileUser color="#1976d2" sx={{ fontSize: "25px", ml: 2 }} />
              <Typography variant="h5" sx={{ color: "white" }}>
                Professional Summary
              </Typography>
            </Box>

            <Typography variant="subtitle1" sx={{ color: "white", ml: 2 }}>
              Results-driven{" "}
              <span style={{ color: "#1976d2", fontWeight: "bold" }}>
                .NET Developer
              </span>{" "}
              with 3 years of experience in building scalable web applications
              using ASP.NET MVC, Web API, and SQL Server. Known for clean code,
              agile delivery, and a strong focus on performance optimization.
              Passionate about learning new technologies and contributing to
              global, cross-functional teams.
            </Typography>
          </Paper>
        </Grid>

        {/* Education Section */}
        <Grid item xs={11} sm={10} md={8}>
          <Paper
            elevation={8}
            sx={{
              padding: "20px",
              backgroundColor: "rgba(13, 29, 58, 0.8)",
              borderRadius: "15px",
              width: { lg: 1030 },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                mb: 2,
              }}
            >
              <SchoolIcon sx={{ color: "#1976d2", fontSize: "25px", ml: 2 }} />
              <Typography variant="h5" sx={{ color: "white" }}>
                Education
              </Typography>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography variant="h5" sx={{ color: "#1976d2", ml: 2 }}>
                B.Tech in Computer Science Engineering{" "}
              </Typography>
              <Typography variant="subtitle1" sx={{ color: "white", ml: 2 }}>
                Gandhi Institute for Technological Advancement (GITA),
                Bhubaneswar{" "}
              </Typography>
              <Typography variant="subtitle1" sx={{ color: "white", ml: 2 }}>
                2017 – 2021
              </Typography>
            </Box>
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 1, mt: 5 }}
            >
              <Typography variant="h5" sx={{ color: "#1976d2", ml: 2 }}>
                Higher Secondary Certificate (HSC) – Science{" "}
              </Typography>
              <Typography variant="subtitle1" sx={{ color: "white", ml: 2 }}>
                Jagdish Prasad Kushwaha College of Competence, Bhandaro
              </Typography>
              <Typography variant="subtitle1" sx={{ color: "white", ml: 2 }}>
                2014 – 2017{" "}
              </Typography>
            </Box>
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 1, mt: 5 }}
            >
              <Typography variant="h5" sx={{ color: "#1976d2", ml: 2 }}>
                Secondary School Certificate (SSC){" "}
              </Typography>
              <Typography variant="subtitle1" sx={{ color: "white", ml: 2 }}>
                Agarwala High School, Tisri
              </Typography>
              <Typography variant="subtitle1" sx={{ color: "white", ml: 2 }}>
                2013 – 2014{" "}
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutMe;
