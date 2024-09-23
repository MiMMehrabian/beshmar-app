type Order = "asc" | "desc";

interface EnhancedTableProps {
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Data,
  ) => void;
  order: Order;
  orderBy: string;
  val: any;
  handlechange: any;
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

interface Data {
  id: number;
  code: number;
  date?: string;
  time?: string;
  factorType: number;
  name: string;
  count: number;
  price: string;
  status: number;
  action?: any;
}
