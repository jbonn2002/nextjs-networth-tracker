import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text,
} from "@tremor/react";
import Currency from "./Currency";
import { db } from "@/lib/db";
import { getAuthSession } from "@/lib/auth";

const EntryTable = async () => {
  const session = await getAuthSession();

  const items = await db.item.findMany({
    where: {
      creatorId: session?.user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Type</TableHeaderCell>
          <TableHeaderCell>Description</TableHeaderCell>
          <TableHeaderCell>Value</TableHeaderCell>
          <TableHeaderCell>Date created</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {items.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.name}</TableCell>
            <TableCell>
              <Text>{item.type}</Text>
            </TableCell>
            <TableCell>
              <Text>{item.description}</Text>
            </TableCell>
            <TableCell>
              <Text>
                <Currency price={+item.value} />
              </Text>
            </TableCell>
            <TableCell>
              <Text>{item.createdAt.toLocaleString()}</Text>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default EntryTable;
