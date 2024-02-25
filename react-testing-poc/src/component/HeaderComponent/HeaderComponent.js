import { Box, Button, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Menu, MenuItem } from "@material-ui/core";
import React,{useState} from "react";
import "./HeaderComponent.css";
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import GitHubIcon from '@material-ui/icons/GitHub';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const HeaderComponent = () => {
    const history = useHistory();
    const [anchor, setAnchor] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleCloseMenu = () => {
        setAnchorEl(null);
    }
    const openCategories = (e) => {
        setAnchorEl(e.currentTarget);
    }

    const getGitRepoList = () => {
        handleCloseMenu()
        history.push("/git-repos");
    }

    const handleLogout = () => {
        history.push("/auth")
    }
    return(
        <Box width={"100%"} height={60} m={0} pl={1} pr={2} className="header-wrapper" display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
            <MenuIcon style={{cursor:"pointer"}} onClick={()=>setAnchor(true)}/>
            <Drawer anchor="left" open={anchor} onClose={()=>setAnchor(false)} >
                <Box width={250}>
                    <List>
                        <ListItem>
                            <ListItemIcon><HomeIcon /></ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItem>
                        <ListItem onClick ={()=> history.push("/about")}>
                            <ListItemIcon><InfoIcon /></ListItemIcon>
                            <ListItemText primary="About" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon><RecentActorsIcon /></ListItemIcon>
                            <ListItemText primary="Contact Us" />
                        </ListItem>
                    </List>
                    <Divider />
                    <List>
                        <ListItem className="list-item" onClick={()=> history.push("/git-repos")}>
                            <ListItemIcon><GitHubIcon /></ListItemIcon>
                            <ListItemText primary="Github user search" />
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
            <div>
                <Button endIcon={<ArrowDropDownIcon />} style={{textTransform:"none"}} onClick={openCategories}>Categories</Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleCloseMenu}
                    className="mt-4 "
                >
                    <MenuItem className="menu-items mb-2" onClick={handleCloseMenu}>Username</MenuItem>
                    <MenuItem className="menu-items mb-2" onClick={handleCloseMenu}>Repository</MenuItem>
                    <MenuItem className="menu-items mb-2" onClick={handleCloseMenu}>Language</MenuItem>
                    <MenuItem className="menu-items" onClick={getGitRepoList}>Git User Search</MenuItem>
                </Menu>
                <Button endIcon={<ExitToAppIcon color="secondary" />} style={{textTransform:"none"}} onClick={handleLogout}>Logout</Button>
            </div>
        </Box>
    )
}
export default HeaderComponent;