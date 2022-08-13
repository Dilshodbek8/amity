import { Link, Typography } from "@mui/material";

function Crumb({ text, href, last = false }) {
  if (last) {
    return (
      <Typography
        sx={{
          textTransform: "capitalize",
        }}
      >
        {text}
      </Typography>
    );
  }

  return (
    <Link
      style={{ color: "#002B49" }}
      underline="hover"
      href={href}
      sx={{
        textTransform: "capitalize",
      }}
    >
      {text}
    </Link>
  );
}

export default Crumb;
