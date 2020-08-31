import clsx from "clsx";
import React, {ReactElement, useState} from "react";
import {createStyles, makeStyles, useTheme} from "@material-ui/core/styles";
import {
    AppBar,
    CssBaseline,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography
} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import {ChevronLeft, ChevronRight} from "@material-ui/icons";
import InboxIcon from '@material-ui/icons/MoveToInbox';

const drawerWidth = 240;

const useStyles = makeStyles(theme => createStyles({
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

export default function All(): ReactElement {
    const style = useStyles();
    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);

    return (
        <div className={style.toolbar}>
            <CssBaseline/>
            <AppBar position="fixed" className={clsx(style.appBar, { [style.appBarShift]: open })}>
                <Toolbar>
                    <IconButton
                        color="inherit" aria-label="open drawer"
                        edge="start"
                        onClick={openDrawer}
                        className={clsx(style.menuButton, { [style.hide]: open })}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" noWrap>Mini variant drawer</Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(style.drawer, {
                    [style.drawerOpen]: open,
                    [style.drawerClose]: !open,
                })}
                classes={({
                    paper: clsx({
                        [style.drawerOpen]: open,
                        [style.drawerClose]: !open,
                    }),
                })}
            >
                <div className={style.toolbar}>
                    <IconButton onClick={closeDrawer}>
                        { theme.direction === "rtl"? <ChevronRight/> : <ChevronLeft/> }
                    </IconButton>
                </div>
                <Divider/>
                <List>
                    <ListItem button>
                        <ListItemIcon><InboxIcon/></ListItemIcon>
                        <ListItemText primary={"業務1"}/>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon><InboxIcon/></ListItemIcon>
                        <ListItemText primary={"業務2"}/>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon><InboxIcon/></ListItemIcon>
                        <ListItemText primary={"業務3"}/>
                    </ListItem>
                </List>
                <Divider/>
                <List>
                    <ListItem button>
                        <ListItemIcon><InboxIcon/></ListItemIcon>
                        <ListItemText primary={"設定1"}/>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon><InboxIcon/></ListItemIcon>
                        <ListItemText primary={"設定2"}/>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon><InboxIcon/></ListItemIcon>
                        <ListItemText primary={"設定3"}/>
                    </ListItem>
                </List>
            </Drawer>
            <main className={style.content}>
                <div className={style.toolbar}/>
                <h2>業務名</h2>
                <Typography paragraph>
                    業務
                </Typography>
            </main>
        </div>
    );
}
