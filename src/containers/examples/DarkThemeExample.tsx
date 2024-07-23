import Image from 'next/image';
import { Calendar, Ticket } from '@phosphor-icons/react';
import { Stack, Chip, Text, Flex, Button, Card, fr } from '@prismane/core';
import { useMediaQuery } from '@prismane/core/hooks';

const DarkThemeExample = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <Card direction="column" gap={fr(6)} w="fit-content">
      <Flex gap={fr(6)} direction={isMobile ? 'column-reverse' : 'row'}>
        <Stack>
          <Flex gap={fr(2)} align="center">
            <Chip size="sm">Activities</Chip>
            <Chip size="sm" color="teal">
              Baroque
            </Chip>
          </Flex>
          <Text
            fw="semibold"
            fs="lg"
            cl={(theme) =>
              theme.mode === 'dark' ? ['base', 100] : ['base', 900]
            }
          >
            Schonbrunn Palace
          </Text>
          <Flex
            gap={fr(2)}
            align="center"
            cl={(theme) =>
              theme.mode === 'dark' ? ['base', 400] : ['base', 700]
            }
          >
            <Calendar size={18} /> 16 Dec 24 •
            <Ticket size={18} /> 4 tickets
          </Flex>
          <Flex mt={isMobile ? fr(4) : 'auto'} gap={fr(2)} align="center">
            <Button h="100%" full>
              See More
            </Button>
          </Flex>
        </Stack>
        <Flex
          w={isMobile ? fr(64) : fr(40)}
          h={isMobile ? fr(64) : fr(40)}
          br="md"
          pos="relative"
          of="hidden"
        >
          <Image
            objectFit="cover"
            src="/example_images/schonbrunn.jpg"
            alt="Schonbrunn Palace"
            fill
          />
        </Flex>
      </Flex>
    </Card>
  );
};

export const DarkThemeExampleSource = `
import Image from "next/image";
import { Calendar, Ticket } from "@phosphor-icons/react";
import { Stack, Chip, Text, Flex, Button, Card, fr } from "@prismane/core";
import { useMediaQuery } from "@prismane/core/hooks";

const DarkThemeExample = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Card direction="column" gap={fr(6)} w="fit-content">
      <Flex gap={fr(6)} direction={isMobile ? "column-reverse" : "row"}>
        <Stack>
          <Flex gap={fr(2)} align="center">
            <Chip size="sm">Activities</Chip>
            <Chip size="sm" color="teal">
              Baroque
            </Chip>
          </Flex>
          <Text
            fw="semibold"
            fs="lg"
            cl={(theme) =>
              theme.mode === "dark" ? ["base", 100] : ["base", 900]
            }
          >
            Schonbrunn Palace
          </Text>
          <Flex
            gap={fr(2)}
            align="center"
            cl={(theme) =>
              theme.mode === "dark" ? ["base", 400] : ["base", 700]
            }
          >
            <Calendar size={18} /> 16 Dec 24 •
            <Ticket size={18} /> 4 tickets
          </Flex>
          <Flex mt={isMobile ? fr(4) : "auto"} gap={fr(2)} align="center">
            <Button h="100%" full>
              See More
            </Button>
          </Flex>
        </Stack>
        <Flex
          w={isMobile ? fr(64) : fr(40)}
          h={isMobile ? fr(64) : fr(40)}
          br="md"
          pos="relative"
          of="hidden"
        >
          <Image
            objectFit="cover"
            src="/example_images/schonbrunn.jpg"
            alt="Schonbrunn Palace"
            fill
          />
        </Flex>
      </Flex>
    </Card>
  );
};
`;

export default DarkThemeExample;
