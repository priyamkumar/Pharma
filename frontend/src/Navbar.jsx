import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Menu,
  MenuItem,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  Collapse,
} from "@mui/material";
import {
  ArrowDropDown,
  Menu as MenuIcon,
  Close,
  ExpandMore,
  ExpandLess,
} from "@mui/icons-material";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import SearchModal from "./SearchModal";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(1450));
  const navigate = useNavigate();
  const location = useLocation();

  // State for desktop dropdown menu
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  // State for mobile drawer
  const [drawerOpen, setDrawerOpen] = useState(false);

  // State for company submenu in mobile view
  const [companyOpen, setCompanyOpen] = useState(false);

  // Helper function to check if a route is active
  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  // Helper function to check if company routes are active
  const isResourceActive = () => {
    return (
      location.pathname === "/blogs" ||
      location.pathname === "/careers" ||
      location.pathname === "/profit-margin-calculator"
    );
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const toggleCompanyMenu = () => {
    setCompanyOpen(!companyOpen);
  };

  // Adding noWrap style for buttons with multiple words
  const noWrapButtonStyle = {
    textTransform: "none",
    fontSize: "1rem",
    whiteSpace: "nowrap",
  };

  // Active button style
  const getButtonStyle = (isActive) => ({
    ...noWrapButtonStyle,
    color: isActive ? "#129349" : "inherit",
    fontWeight: isActive ? "600" : "normal",
  });

  const mobileDrawerContent = (
    <Box sx={{ width: 250, padding: 2 }} role="presentation">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <img src="/logo.png" alt="Logo" style={{ height: "40px" }} />
        <IconButton onClick={toggleDrawer(false)}>
          <Close />
        </IconButton>
      </Box>

      <List className="cursor-pointer">
        <ListItem
          onClick={() => {
            navigate("/");
            setDrawerOpen(false);
          }}
        >
          <ListItemText
            primary="Home"
            sx={{
              color: isActiveRoute("/") ? "#129349" : "inherit",
              fontWeight: isActiveRoute("/") ? "600" : "normal",
            }}
          />
        </ListItem>

        <ListItem
          sx={{
            color: isActiveRoute("/about") ? "#129349" : "inherit",
            fontWeight: isActiveRoute("/about") ? "600" : "normal",
          }}
          onClick={() => {
            navigate("/about");
            setDrawerOpen(false);
          }}
        >
          <ListItemText
            primary="About"
            sx={{
              color: isActiveRoute("/about") ? "#129349" : "inherit",
              fontWeight: isActiveRoute("/about") ? "600" : "normal",
            }}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Products"
            sx={{
              color: isActiveRoute("/pharma-products") ? "#129349" : "inherit",
              fontWeight: isActiveRoute("/pharma-products") ? "600" : "normal",
            }}
            onClick={() => {
              navigate("/pharma-products");
              setDrawerOpen(false);
            }}
          />
        </ListItem>
        <ListItem
          onClick={() => {
            navigate("/pcd-pharma-franchise");
            setDrawerOpen(false);
          }}
        >
          <ListItemText
            primary="Franchise"
            sx={{
              color: isActiveRoute("/pcd-pharma-franchise")
                ? "#129349"
                : "inherit",
              fontWeight: isActiveRoute("/pcd-pharma-franchise")
                ? "600"
                : "normal",
            }}
          />
        </ListItem>
        <ListItem
          onClick={() => {
            navigate("/third-party-manufacturing");
            setDrawerOpen(false);
          }}
        >
          <ListItemText
            primary="Manufacturing"
            sx={{
              color: isActiveRoute("/third-party-manufacturing")
                ? "#129349"
                : "inherit",
              fontWeight: isActiveRoute("/third-party-manufacturing")
                ? "600"
                : "normal",
            }}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Contact"
            sx={{
              color: isActiveRoute("/contact") ? "#129349" : "inherit",
              fontWeight: isActiveRoute("/contact") ? "600" : "normal",
            }}
            onClick={() => {
              navigate("/contact");
              setDrawerOpen(false);
            }}
          />
        </ListItem>
        <ListItem onClick={toggleCompanyMenu}>
          <ListItemText
            primary="Resource"
            sx={{
              color: isResourceActive() ? "#129349" : "inherit",
              fontWeight: isResourceActive() ? "600" : "normal",
            }}
          />
          {companyOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

        <Collapse in={companyOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              sx={{ pl: 4 }}
              onClick={() => {
                navigate("/blogs");
                setDrawerOpen(false);
              }}
            >
              <ListItemText
                primary="Blogs"
                sx={{
                  color: isActiveRoute("/blogs") ? "#129349" : "inherit",
                  fontWeight: isActiveRoute("/blogs") ? "600" : "normal",
                }}
              />
            </ListItem>
            <ListItem
              sx={{ pl: 4 }}
              onClick={() => {
                navigate("/profit-margin-calculator");
                setDrawerOpen(false);
              }}
            >
              <ListItemText
                primary="Calculator"
                sx={{
                  color: isActiveRoute("/profit-margin-calculator") ? "#129349" : "inherit",
                  fontWeight: isActiveRoute("/profit-margin-calculator") ? "600" : "normal",
                }}
              />
            </ListItem>
            <ListItem
              sx={{ pl: 4 }}
              onClick={() => {
                navigate("/careers");
                setDrawerOpen(false);
              }}
            >
              <ListItemText
                primary="Careers"
                sx={{
                  color: isActiveRoute("/careers") ? "#129349" : "inherit",
                  fontWeight: isActiveRoute("/careers") ? "600" : "normal",
                }}
              />
            </ListItem>
          </List>
        </Collapse>

        {/* <ListItem
          component="a"
          href="https://payments-test.cashfree.com/forms/suave-healthcare"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ListItemText primary="Pay Now" sx={{ fontWeight: "bold" }} />
        </ListItem> */}
      </List>

      <Box sx={{ mt: 2, px: 2 }}>
        <SearchModal />
      </Box>
    </Box>
  );

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "white", color: "black", boxShadow: "none" }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Logo */}
        <Box className="cursor-pointer" onClick={() => navigate("/")}>
          <img src="/logo.png" alt="Logo" className="w-40" />
        </Box>

        {/* Mobile menu icon */}
        {isMobile ? (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        ) : (
          /* Desktop navigation */
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <Button
              color="inherit"
              sx={getButtonStyle(isActiveRoute("/"))}
              onClick={() => navigate("/")}
            >
              Home
            </Button>
            <Button
              color="inherit"
              sx={getButtonStyle(isActiveRoute("/about"))}
              onClick={() => navigate("/about")}
            >
              About
            </Button>
            <Button
              color="inherit"
              sx={getButtonStyle(isActiveRoute("/pharma-products"))}
              onClick={() => navigate("/pharma-products")}
            >
              Products
            </Button>
            <Button
              color="inherit"
              sx={getButtonStyle(isActiveRoute("/pcd-pharma-franchise"))}
              onClick={() => navigate("/pcd-pharma-franchise")}
            >
              Franchise
            </Button>
            <Button
              color="inherit"
              sx={getButtonStyle(isActiveRoute("/third-party-manufacturing"))}
              onClick={() => navigate("/third-party-manufacturing")}
            >
              Manufacturing
            </Button>
            <Button
              color="inherit"
              sx={getButtonStyle(isActiveRoute("/contact"))}
              onClick={() => navigate("/contact")}
            >
              Contact
            </Button>
            {/* Dropdown for "Company" */}
            <Button
              color="inherit"
              endIcon={<ArrowDropDown />}
              onClick={handleMenuOpen}
              sx={getButtonStyle(isResourceActive())}
            >
              Resource
            </Button>
            <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
              <MenuItem
                onClick={() => {
                  navigate("/blogs");
                  handleMenuClose();
                }}
                sx={{
                  color: isActiveRoute("/blogs") ? "#129349" : "inherit",
                  fontWeight: isActiveRoute("/blogs") ? "600" : "normal",
                }}
              >
                Blogs
              </MenuItem>
              <MenuItem
                onClick={() => {
                  navigate("/profit-margin-calculator");
                  handleMenuClose();
                }}
                sx={{
                  color: isActiveRoute("/profit-margin-calculator")
                    ? "#129349"
                    : "inherit",
                  fontWeight: isActiveRoute("/profit-margin-calculator")
                    ? "600"
                    : "normal",
                }}
              >
                Calculator
              </MenuItem>
              <MenuItem
                onClick={() => {
                  navigate("/careers");
                  handleMenuClose();
                }}
                sx={{
                  color: isActiveRoute("/careers") ? "#129349" : "inherit",
                  fontWeight: isActiveRoute("/careers") ? "600" : "normal",
                }}
              >
                Careers
              </MenuItem>
            </Menu>

            {/* <Button
              color="inherit"
              variant="outlined"
              href="https://payments-test.cashfree.com/forms/suave-healthcare"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                ...noWrapButtonStyle,
                borderColor: "primary.main",
                backgroundColor: "#129349",
                color: "white",
                "&:hover": {
                  backgroundColor: "#015c30",
                  borderColor: "primary.main",
                },
              }}
            >
              Pay&nbsp;Now
            </Button> */}
            <SearchModal />
          </Box>
        )}
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        {mobileDrawerContent}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
