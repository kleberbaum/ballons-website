import { Box } from '@chakra-ui/react';

import { FC } from 'react';
import BottomFooter from './BottomFooter';
import SocialIcons from './SocialIcons';
import UpperFooter from './UpperFooter';

interface IFooterProps {}

const Footer: FC<IFooterProps> = () => {
  return (
    <Box  pb="10" bg="black.500" py="60px">
      <UpperFooter />
      <SocialIcons />
      <BottomFooter />
    </Box>
  );
};
export default Footer;
