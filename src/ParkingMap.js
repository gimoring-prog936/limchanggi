import React from "react";
import { Grid } from "@material-ui/core";

const ParkingMap = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={6} sm={4} md={3} style={{ backgroundColor: "#c8c8c8", height: 80 }}>
        1번 자리
      </Grid>
      <Grid item xs={6} sm={4} md={3} style={{ backgroundColor: "#c8c8c8", height: 80 }}>
        2번 자리
        <div style={{ backgroundColor: "white", height: "100%" }}></div>
      </Grid>
      <Grid item xs={6} sm={4} md={3} style={{ backgroundColor: "#c8c8c8", height: 80 }}>
        3번 자리
      </Grid>
      <Grid item xs={6} sm={4} md={3} style={{ backgroundColor: "#c8c8c8", height: 80 }}>
        4번 자리
      </Grid>
      <Grid item xs={6} sm={4} md={3} style={{ backgroundColor: "#c8c8c8", height: 80 }}>
        5번 자리
      </Grid>
      <Grid item xs={6} sm={4} md={3} style={{ backgroundColor: "#c8c8c8", height: 80 }}>
        6번 자리
      </Grid>
      <Grid item xs={6} sm={4} md={3} style={{ backgroundColor: "#c8c8c8", height: 80 }}>
        7번 자리
        <div style={{ backgroundColor: "white", height: "100%" }}></div>
      </Grid>
      <Grid item xs={6} sm={4} md={3} style={{ backgroundColor: "#c8c8c8", height: 80 }}>
        8번 자리
      </Grid>
      <Grid item xs={6} sm={4} md={3} style={{ backgroundColor: "#c8c8c8", height: 80 }}>
        9번 자리
      </Grid>
    </Grid>
  );
};

export default ParkingMap;
