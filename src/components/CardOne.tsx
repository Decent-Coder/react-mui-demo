import { Button, Card, CardContent, Grid, Grid2, TextField, Typography } from "@mui/material";
import './CardOne.scss';


export const CardOne = () => {
    return (
      <div className="container">
        <Card className="card">
          <CardContent className="card-content">
            <Typography className="card-label" variant="h5" component="div" gutterBottom>
              Speak to one of our experts
            </Typography>
            <Grid container spacing={2} direction="column" justifyContent="center" alignItems="center">
              <Grid item xs={12} className="input-container">
                <TextField fullWidth id="name" label="Name" placeholder="Enter Your Name" required />
              </Grid>
              <Grid item xs={12} className="input-container">
                <TextField fullWidth id="organizationName" label="Organization Name" placeholder="Enter Organization Name" required />
              </Grid>
              <Grid item xs={12} className="input-container">
                <TextField fullWidth id="workEmail" label="Work Email" placeholder="name@company.com" required />
              </Grid>
              <Grid item xs={12} className="input-container">
                <TextField fullWidth id="phoneNumber" label="Phone Number" placeholder="Full Number (including code)" required />
              </Grid>
              <Grid item xs={12} className="input-container">
                <TextField fullWidth id="message" label="Message" placeholder="Write a message" multiline rows={5} />
              </Grid>
              <Grid item xs={12} className="input-container">
                <Button className="primary-button" variant="contained">Submit</Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </div>
    );
  };
  