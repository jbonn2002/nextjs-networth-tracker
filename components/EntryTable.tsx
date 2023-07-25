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

interface User {
  id: number;
  name: string;
  type: string;
  description: string;
  value: number;
}

const EntryTable = ({ users }: { users: User[] }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Type</TableHeaderCell>
          <TableHeaderCell>Description</TableHeaderCell>
          <TableHeaderCell>Value</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>
              <Text>{user.type}</Text>
            </TableCell>
            <TableCell>
              <Text>{user.description}</Text>
            </TableCell>
            <TableCell>
              <Text>
                <Currency price={user.value} />
              </Text>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default EntryTable;
