// import classes from "./AppTabs.module.scss";
import cn from "classnames";
import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabPanel from "./components/TabPanel";

const AppTabs = ({
  children,
  className,
  isProgramPage = false,
  border = false,
}) => {
  const classNames = cn(
    className,
    isProgramPage ? "programPage" : "tabsBox",
    border ? "border" : null
  );
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box className={classNames}>
      <Tabs value={value} onChange={handleChange}>
        {children?.map((item, index) => (
          <Tab key={index} label={item.props.label} />
        ))}
      </Tabs>

      {children?.map((item, index) => (
        <TabPanel key={index} value={value} index={index}>
          {item}
        </TabPanel>
      ))}
    </Box>
  );
};

export default AppTabs;
