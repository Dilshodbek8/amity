import cn from "classnames";
import { Select, FormControl } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

const InputSelect = ({ className, options, ...props }) => {
  const classNames = cn(className);

  return (
    <div className={classNames}>
      <FormControl fullWidth>
        <Select
          sx={{
            backgroundColor: "#F4F4F8",
            "& fieldset": { borderRadius: "0" },
          }}
          {...props}
        >
          {options.map((option, idx) => (
            <MenuItem key={idx} value={option.val}>
              {option.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default InputSelect;
