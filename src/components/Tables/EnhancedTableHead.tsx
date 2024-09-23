import {
  Box,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Typography,
} from "@mui/material";
import { SearchSVG } from "../common/svgs";

const headCells: readonly HeadCell[] = [
  {
    id: "id",
    numeric: true,
    disablePadding: true,
    label: "ردیف",
  },
  {
    id: "code",
    numeric: true,
    disablePadding: true,
    label: "شماره فاکتور",
  },
  {
    id: "name",
    numeric: true,
    disablePadding: true,
    label: "نام طرف حساب",
  },
  {
    id: "date",
    numeric: true,
    disablePadding: true,
    label: "تاریخ فاکتور",
  },
  {
    id: "factorType",
    numeric: true,
    disablePadding: true,
    label: "نوع فاکتور",
  },
  {
    id: "count",
    numeric: true,
    disablePadding: true,
    label: "اقلام",
  },
  {
    id: "price",
    numeric: true,
    disablePadding: true,
    label: "مبلغ فاکتور (تومان)",
  },
  {
    id: "status",
    numeric: true,
    disablePadding: true,
    label: "وضعیت پرداخت",
  },
  {
    id: "action",
    numeric: true,
    disablePadding: true,
    label: "عملیات",
  },
];

export default function EnhancedTableHead(props: EnhancedTableProps) {
  const { order, orderBy, onRequestSort, handlechange, val } = props;

  const createSortHandler =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };
  return (
    <>
      <TableHead>
        <TableRow>
          {headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
              align={headCell.numeric ? "right" : "left"}
              sortDirection={orderBy === headCell.id ? order : false}
              style={{ borderBottom: "1px solid #ECECEC" }}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={createSortHandler(headCell.id)}
                dir="ltr"
              >
                <Typography
                  color="#7F7F7F"
                  fontSize={14}
                  fontWeight={500}
                  fontFamily={"vazir"}
                  whiteSpace={"nowrap"}
                >
                  {headCell.label}
                </Typography>
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            sortDirection={orderBy === headCell.id ? order : false}
            style={{ borderBottom: "1px solid #ECECEC" }}
          >
            {headCell.id !== "action" &&
              headCell.id !== "factorType" &&
              headCell.id !== "status" && (
                <Box
                  display={"flex"}
                  justifyContent={"start"}
                  justifyItems={"start"}
                  alignItems={"start"}
                  alignContent={"start"}
                  position={"relative"}
                >
                  <SearchSVG />
                  <input
                    type="text"
                    className="w-full pr-6 font-vazir outline-none"
                    value={val[headCell.id]}
                    onChange={(e) => handlechange(e, headCell.id)}
                    placeholder={`جستجو`}
                  />
                </Box>
              )}
            {headCell.id == "status" && (
              <Box
                display={"flex"}
                justifyContent={"start"}
                justifyItems={"start"}
                alignItems={"start"}
                alignContent={"start"}
                position={"relative"}
              >
                <select
                  onChange={(e) => {
                    handlechange(e, headCell.id);
                  }}
                  defaultValue={2}
                  className="!border-none !font-vazir !text-sm !text-[#C6C6C6] !shadow-none !outline-none"
                >
                  <option value={2} disabled>
                    انتخاب کنید
                  </option>
                  <option value={0}>پرداخت شده</option>
                  <option value={1}>پرداخت نشده</option>
                </select>
              </Box>
            )}
            {headCell.id == "factorType" && (
              <Box
                display={"flex"}
                justifyContent={"start"}
                justifyItems={"start"}
                alignItems={"start"}
                alignContent={"start"}
                position={"relative"}
              >
                <select
                  defaultValue={2}
                  className=" !border-none !font-vazir !text-sm !text-[#C6C6C6] !shadow-none !outline-none"
                  onChange={(e) => {
                    handlechange(e, headCell.id);
                  }}
                >
                  <option value={2} disabled>
                    انتخاب کنید
                  </option>
                  <option value={0}>فروش</option>
                  <option value={1}>خرید</option>
                </select>
              </Box>
            )}
            {headCell.id == "action" && (
              <Box
                display={"flex"}
                justifyContent={"start"}
                justifyItems={"start"}
                alignItems={"start"}
                alignContent={"start"}
                position={"relative"}
              >
                <span
                  defaultValue={2}
                  className="!border-none !font-vazir !text-sm !text-[#C6C6C6] opacity-0 !shadow-none !outline-none"
                >
                  s
                </span>
              </Box>
            )}
          </TableCell>
        ))}
      </TableRow>
    </>
  );
}
