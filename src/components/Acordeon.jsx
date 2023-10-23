import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

const Acordeon = () => {
  return (
    <Accordion allowToggle>
      <AccordionItem>
        <h3>
          <AccordionButton className="pb-space-xs">
            <Box as="span" flex="1" textAlign="left">
              We connect our customers with the best?
            </Box>
            <span className="btn" data-bg="blue">
              <AccordionIcon />
            </span>
          </AccordionButton>
        </h3>
        <AccordionPanel pb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem className="mt-space-m">
        <h3>
          <AccordionButton className="pb-space-xs">
            <Box as="span" flex="1" textAlign="left">
              Android research & development rockstar?
            </Box>
            <span className="btn" data-bg="blue">
              <AccordionIcon />
            </span>
          </AccordionButton>
        </h3>
        <AccordionPanel pb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default Acordeon;
