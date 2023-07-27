import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";

import { RouterOutputs } from "@acme/api";

type DiaryType = RouterOutputs["diary"]["all"][number];

export const DiaryCard: React.FC<{ diary: DiaryType }> = ({ diary }) => {
  const { title, content, createdAt } = diary;
  return (
    <Card
      bgColor="black"
      width={"80"}
      borderStyle={"inset"}
      borderWidth={"thin"}
    >
      <CardHeader>
        <Heading
          size="md"
          textOverflow={"ellipsis"}
          whiteSpace={"nowrap"}
          overflow={"hidden"}
        >
          {title}
        </Heading>
      </CardHeader>

      <Stack divider={<StackDivider />} spacing="4" />

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Text pt="2" fontSize="sm" textAlign={"end"}>
              {createdAt.toLocaleDateString()}
            </Text>
          </Box>
          <Box>
            <Text
              pt="2"
              fontSize="sm"
              overflow={"hidden"}
              whiteSpace={"pre-wrap"}
              maxH={"200px"}
            >
              {content}
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default DiaryCard;
