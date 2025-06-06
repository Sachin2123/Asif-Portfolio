import React from "react";
import { Grid, Typography, Paper, Box, Divider } from "@mui/material";
import ComputerIcon from "@mui/icons-material/Computer";
import AnimatedBackground from "../../component/AnimatedBackground/AnimatedBackground";

const Skills = () => {
  const Skills = [
    { backend: "ASP.NET MVC" },
    { backend: "ASP.NET Web API" },
    { backend: "C#" },
    { backend: "Entity Framework" },
    { backend: "LINQ" },
    { frontend: "jQuery" },
    { database: "Microsoft SQL Server" },
    { database: "SQL Queries" },
    { database: "Stored Procedures" },
    { tools: "Visual Studio" },
    { tools: "Postman" },
    { tools: "Azure DevOps" },
    { version: "Git" },
    { version: "Bitbucket" },
    { testing: "xUnit" },
    { testing: "NUnit" },
  ];
  return (
    <Box sx={{ position: "relative", minHeight: "100vh" }}>
      {/* Animated Background */}
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
        {/* Skills Section */}
        <Grid item xs={11} sm={10} md={8}>
          <Paper
            elevation={8}
            sx={{
              padding: "20px",
              backgroundColor: "rgba(13, 29, 58, 0.8)",
              borderRadius: "15px",
              mb: 14,
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
              <ComputerIcon sx={{ color: "#1976d2", fontSize: "25px" }} />
              <Typography variant="h5" sx={{ color: "white" }}>
                Skills
              </Typography>
            </Box>

            {[
              "Frontend",
              "Backend",
              "Tools",
              "Version",
              "Database",
              "Testing",
            ].map((category) => (
              <Grid
                container
                key={category}
                spacing={2}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "10px",
                  marginTop: "5px",
                }}
              >
                <Divider />

                <Typography
                  sx={{
                    ml: 4,
                    color: "#1976d2",
                    fontSize: "25px",
                    mt: 1,
                  }}
                >
                  {category}
                </Typography>

                {Skills.filter((item) => item[category.toLowerCase()]).map(
                  (item, index) => (
                    <Box
                      item
                      key={index}
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography
                        sx={{
                          ml: 4,
                          color: "white",
                        }}
                      >
                        {item[category.toLowerCase()]}
                      </Typography>

                      <Typography
                        sx={{
                          mr: 3,
                          color: "white",
                          mb: 1,
                        }}
                      >
                        {(category === "Frontend" &&
                          item[category.toLowerCase()] === "Next JS") ||
                        (category === "Tools" &&
                          (item[category.toLowerCase()] === "Github" ||
                            item[category.toLowerCase()] === "Netlify")) ||
                        (category === "Backend" &&
                          (item[category.toLowerCase()] === "Node JS" ||
                            item[category.toLowerCase()] === "Express JS"))
                          ? "Advance"
                          : category === "Frontend" ||
                            category === "Backend" ||
                            category === "Tools" ||
                            category === "Testing" ||
                            category === "Version" ||
                            category === "Database"
                          ? "Advanced"
                          : "Beginner"}
                      </Typography>
                    </Box>
                  )
                )}
              </Grid>
            ))}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Skills;
