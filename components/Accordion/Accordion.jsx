import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import plusicon from "../../public/media/icons/plusicon.svg";
import minusicon from "../../public/media/icons/minusicon.svg";

import Image from "next/image";

export default function SimpleAccordion({ ques, answ }) {
  const [isOpen, setIsOpen] = React.useState(true);
  const handleClick = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };
  return (
    <div>
      <Accordion
        onChange={handleClick}
        sx={{ width: "100% !important", boxShadow: "0" }}
      >
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ background: "rgb(247, 247, 245)", width: "100%" }}
          expandIcon={
            isOpen ? (
              <Image src={plusicon} alt={plusicon} />
            ) : (
              <Image src={minusicon} alt={minusicon} />
            )
          }
        >
          <Typography>{ques}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{answ}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
