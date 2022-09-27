import { Image, Text, VStack } from '@chakra-ui/react';
import { FC } from 'react';

interface IBottomFooterProps {}

const BottomFooter: FC<IBottomFooterProps> = () => {
  return (
    <VStack gap="3">
      <Text lineHeight="22px" fontSize="12px" textAlign="center" color="white" maxW="550px" px="4">
        Durch unsere umfangreiche Auswahl, können Sie bei uns von einem einzelnen Ballon bis hin zur
        Festsaal-Dekoration alles bekommen. Ballons schaffen es wie nichts anderes, den Menschen ein
        <Text mx="2" fontSize="20px" color="white" variant="cursive" as="span">
          Lächeln
        </Text>{' '}
        ins Gesicht zu zaubern.
      </Text>
      <Image src="/images/white_logo.png" />
    </VStack>
  );
};
export default BottomFooter;
