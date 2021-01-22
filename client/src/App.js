import {makeStyles} from "@material-ui/core/styles";
import {CssBaseline,Container,Grid,AppBar,Toolbar,Typography,Button,IconButton} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/MenuBook";
import PenIcon from "@material-ui/icons/Create";
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Redirect,
} from "react-router-dom";

import PostsList from "./components/PostsList";
import PostDetails from "./components/PostDetails";


const useStyles = makeStyles((theme) => ({
   root: {
      flexGrow: 1,
   },
   menuButton: {
      marginRight: theme.spacing(2),
   },
   title: {
      flexGrow: 1,
   },
   container: {
      marginTop: theme.spacing(3),
   },
}));

const App=()=>{
   const classes=useStyles();
  return (
      <>
      <CssBaseline/>
      <Container maxWidth='lg'>
        <AppBar position='static' color='inherit' elevation={0}>
           <Toolbar>
              <IconButton
                 edge="start"
                 className={classes.menuButton}
                 color="inherit"
                 aria-label="menu"
              >
                 <MenuIcon />
              </IconButton>

              <Typography
                 variant="h6"
                 color="secondary"
                 className={classes.title}
              >
                 <a href="http://localhost:3000/posts">Blogify</a>
              </Typography>

              <Button
                 color="primary"
                 variant="outlined"
                 startIcon={<PenIcon />}
                 //onClick={handleOpen}
              >
                 Yeni Yazı
              </Button>
           </Toolbar>
        </AppBar>
         <Grid container className={classes.container}>
            <Grid item xs={12}>
               <Router>
                  <Switch>
                     <Route exact path="/posts" component={PostsList} />
                     <Route exact path="/posts/:id" component={PostDetails} />
                  </Switch>
                  <Redirect from="/" to="/posts" />
               </Router>
            </Grid>
         </Grid>
      </Container>
      </>
  );
}

export default App;
