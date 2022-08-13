import Box from "@mui/material/Box";

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      style={{ width: "100%" }}
      role="tabpanel"
      hidden={value !== index}
      {...other}
    >
      {value === index && (
        <Box>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

export default TabPanel;
