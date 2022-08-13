import cn from "classnames";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Row from "./components/Row";
import { useTranslation } from "next-i18next";

const CareerTable = ({ className, rows }) => {
  const { t } = useTranslation();

  const classNames = cn(className, "career__table");
  return (
    <div className={classNames}>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell>{t("POSITION")}</TableCell>
              <TableCell align="right">{t("DEADLINE")}</TableCell>
              <TableCell align="right">{t("CONTRACT TYPE")}</TableCell>
              <TableCell align="right">{t("JOB DESCRIPTION")}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows?.map((row, i) => (
              <Row key={i} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CareerTable;
