import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Menu,
  MenuItem,
  IconButton,
  InputBase,
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
  Search as SearchIcon,
  Close,
  ExpandMore,
  ExpandLess,
} from "@mui/icons-material";
import { useState } from "react";
import { styled, alpha, useTheme } from "@mui/material/styles";
import SearchModal from "./SearchModal";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
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
  const isCompanyActive = () => {
    return location.pathname === "/about" || location.pathname === "/careers";
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

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    border: "1px solid rgb(178, 175, 175)",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    width: "100%",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

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
          button
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
          button
          onClick={() => {
            navigate("/franchise");
            setDrawerOpen(false);
          }}
        >
          <ListItemText
            primary="Franchise"
            sx={{
              color: isActiveRoute("/franchise") ? "#129349" : "inherit",
              fontWeight: isActiveRoute("/franchise") ? "600" : "normal",
            }}
          />
        </ListItem>
        <ListItem button>
          <ListItemText
            primary="Products"
            sx={{
              color: isActiveRoute("/products") ? "#129349" : "inherit",
              fontWeight: isActiveRoute("/products") ? "600" : "normal",
            }}
            onClick={() => {
                navigate("/products");
                setDrawerOpen(false);
              }}
          />
        </ListItem>

        <ListItem button onClick={toggleCompanyMenu}>
          <ListItemText
            primary="Company"
            sx={{
              color: isCompanyActive() ? "#129349" : "inherit",
              fontWeight: isCompanyActive() ? "600" : "normal",
            }}
          />
          {companyOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

        <Collapse in={companyOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              button
              sx={{ pl: 4 }}
              onClick={() => {
                navigate("/about");
                setDrawerOpen(false);
              }}
            >
              <ListItemText
                primary="About Us"
                sx={{
                  color: isActiveRoute("/about") ? "#129349" : "inherit",
                  fontWeight: isActiveRoute("/about") ? "600" : "normal",
                }}
              />
            </ListItem>
            <ListItem
              button
              sx={{ pl: 4 }}
              onClick={() => {
                navigate("/careers");
                setDrawerOpen(false);
              }}
            >
              <ListItemText
                primary="Team"
                sx={{
                  color: isActiveRoute("/careers") ? "#129349" : "inherit",
                  fontWeight: isActiveRoute("/careers") ? "600" : "normal",
                }}
              />
            </ListItem>
          </List>
        </Collapse>

        <ListItem button>
          <ListItemText
            primary="Contact&nbsp;Us"
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
        <ListItem button>
          <ListItemText primary="Pay&nbsp;Now" sx={{ fontWeight: "bold" }} />
        </ListItem>
      </List>

      <Box sx={{ mt: 2, px: 2 }}>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
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
        <Box>
          <img
            src="/logo.png"
            alt="Logo"
            className="scale-150"
            style={{ height: "48px" }}
          />
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
              sx={getButtonStyle(isActiveRoute("/franchise"))}
              onClick={() => navigate("/franchise")}
            >
              Franchise
            </Button>
            <Button
              color="inherit"
              sx={getButtonStyle(isActiveRoute("/products"))}
              onClick={() => navigate("/products")}
            >
              Products
            </Button>

            {/* Dropdown for "Company" */}
            <Button
              color="inherit"
              endIcon={<ArrowDropDown />}
              onClick={handleMenuOpen}
              sx={getButtonStyle(isCompanyActive())}
            >
              Company
            </Button>
            <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
              <MenuItem
                onClick={() => {
                  navigate("/about");
                  handleMenuClose();
                }}
                sx={{
                  color: isActiveRoute("/about") ? "#129349" : "inherit",
                  fontWeight: isActiveRoute("/about") ? "600" : "normal",
                }}
              >
                About Us
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

            <Button
              color="inherit"
              sx={getButtonStyle(isActiveRoute("/contact"))}
              onClick={() => navigate("/contact")}
            >
              Contact&nbsp;Us
            </Button>
            <Button
              className="text-gray-950"
              color="inherit"
              variant="outlined"
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
            </Button>
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
