import React from 'react';
import './ConsultingHome.css';


import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "black"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: "purple",
    backgroundColor: "rgba(130, 0, 120, 0.2)"
  }


}))

export default function Home() {
  const mui = useStyles();
  return (
    <div className="consulting" >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper elevation={0} className={mui.paper}>
            <Grid container spacing={2}>

              <Grid item xs={4}>
                <Paper className={mui.paper}>
                  <h3 className="text-light"> GreysiConsulting LLC</h3>
                </Paper>
              </Grid>

              <Grid item xs={2}>
                <Paper className={mui.paper}>
                  <h4 className="text-light">
                    <a href="./" >Home</a>
                  </h4>
                </Paper>
              </Grid>

              <Grid item xs={2}>
                <Paper className={mui.paper}>
                  <h3 className="text-light"> Test</h3>
                </Paper>
              </Grid>

              <Grid item xs={2}>
                <Paper className={mui.paper}>
                  <h3 className="text-light"> Test</h3>
                </Paper>
              </Grid>

              <Grid item xs={2}>
                <Paper className={mui.paper}>
                  <h3 className="text-light"> Test</h3>
                </Paper>
              </Grid>

            </Grid>
          </Paper>
        </Grid>
      </Grid>

      {/* This is an instance of Building a Grid System for a traditional style website */}
      {/*Use the Commented Grid for the Content to be used. */}
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper elevation={0} className={mui.paper}>
            <Grid container spacing={3}>

              <Grid item xs={2}>
                <Paper elevation={0} className={mui.paper}>

                </Paper>
              </Grid>

              {/* Edit this area where necessary */}
              <Grid item xs={8}>
                <Paper className={mui.paper}>
                  <Typography variant="overline">Card Test</Typography>
                  <Card></Card>
                </Paper>
              </Grid>

              <Grid item xs={2}>
                <Paper elevation={0} className={mui.paper}>

                </Paper>
              </Grid>

            </Grid>
          </Paper>
        </Grid>
      </Grid>

      {/* This is an instance of Building a Grid System for a traditional style website */}
      {/*Use the Commented Grid for the Content to be used. */}
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper elevation={0} className={mui.paper}>
            <Grid container spacing={3}>

              <Grid item xs={2}>
                <Paper elevation={0} className={mui.paper}>

                </Paper>
              </Grid>

              {/* Edit this area where necessary */}
              <Grid item xs={8}>
                <Paper className={mui.paper}>

                </Paper>
              </Grid>

              <Grid item xs={2}>
                <Paper elevation={0} className={mui.paper}>

                </Paper>
              </Grid>

            </Grid>
          </Paper>
        </Grid>
      </Grid>

      {/*This section is specifically for practicing a layout using cards */}
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={mui.paper}>
            <Grid container spacing={3}>

              <Grid item xs={4}>
                <Paper elevation={0} className={mui.paper}>
                  <Card>
                    <CardContent>
                      <Typography color="textSecondary">Hello React</Typography>


                    </CardContent>
                  </Card>
                </Paper>
              </Grid>

              <Grid item xs={4}>
                <Paper elevation={0} className={mui.paper}>
                  <Card>
                    <CardContent>
                      <Typography color="textSecondary">Hello React</Typography>


                    </CardContent>
                  </Card>
                </Paper>
              </Grid>

              <Grid item xs={4}>
                <Paper elevation={0} className={mui.paper}>
                  <Card>
                    <CardContent>
                      <Typography color="textSecondary">Hello React</Typography>


                    </CardContent>
                  </Card>
                </Paper>
              </Grid>


            </Grid>
          </Paper>
        </Grid>
      </Grid>




    </div >

  );
}