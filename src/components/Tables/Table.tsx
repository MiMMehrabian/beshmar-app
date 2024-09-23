"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { Button, CircularProgress } from "@mui/material";
import {
  AddFactorSVG,
  DoneSVG,
  EditSVG,
  FailSVG,
  FileSVG,
} from "../common/svgs";
import EnhancedTableHead from "./EnhancedTableHead";
import { getComparator } from "@/utils";
import CustomPaginationActions from "./Pagination";

type Order = "asc" | "desc";

function TableComponent() {
  const [data, setData] = useState<Array<Data>>([]);
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<keyof Data>("id");
  const [page, setPage] = React.useState(0);
  const [loading, setLoading] = useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [searchTerms, setSearchTerms] = useState({
    id: "",
    code: "",
    name: "",
    date: "",
    factorType: "",
    count: "",
    price: "",
    status: "",
    time: "",
  });

  // fetch Data
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const response = await fetch("/api/data");
      const result = await response.json();
      setData(result);
      setLoading(false);
    };

    fetchData();
  }, []);

  // calculate start and end of visibleData
  const start = page * rowsPerPage + 1;
  const end = (page + 1) * rowsPerPage;

  // handle Sort on data
  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data,
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  // handle Search in data
  const handleSearchChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    column: keyof Data,
  ) => {
    setSearchTerms({
      ...searchTerms,
      [column]: event.target.value,
    });
  };

  // handle change page function
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  // handle visile rows number change
  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLSelectElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // hold filtered data
  const filteredRows = data.filter((row) => {
    return (
      row.id.toString().includes(searchTerms.id) &&
      row.code.toString().includes(searchTerms.code) &&
      row.name.includes(searchTerms.name) &&
      row.factorType.toString().includes(searchTerms.factorType) &&
      row.time?.toString().includes(searchTerms.time) &&
      row.date?.toString().includes(searchTerms.date) &&
      row.count.toString().includes(searchTerms.count) &&
      row.status.toString().includes(searchTerms.status) &&
      row.price.includes(searchTerms.price)
    );
  });

  // hold visible rows by filter
  const visibleRows = React.useMemo(
    () =>
      [...filteredRows]
        .sort(getComparator(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [filteredRows, order, orderBy, page, rowsPerPage],
  );

  return (
    <Box
      sx={{ width: "100%" }}
      display={"flex"}
      flexDirection={"column"}
      gap={3}
    >
      <Box display={"flex"} justifyContent={"space-between"}>
        <Button variant="contained" className="!rounded-md !bg-[#578FFF]">
          <Typography
            alignSelf={"end"}
            fontFamily={"vazir"}
            fontWeight={600}
            color="#fff"
            fontSize={14}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={1}
          >
            ایجاد فاکتور
            <AddFactorSVG />
          </Typography>
        </Button>
        <Typography
          alignSelf={"end"}
          fontFamily={"vazir"}
          fontWeight={600}
          color="#040714"
        >
          لیست فاکتورها
        </Typography>
      </Box>
      <Paper
        sx={{ width: "100%" }}
        className="!relative !border !border-[#ECECEC] !shadow-none"
      >
        <TableContainer dir="rtl" className="h-90">
          <Table
            stickyHeader
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={"small"}
          >
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              handlechange={handleSearchChange}
              val={searchTerms}
            />

            <TableBody>
              {visibleRows.map((row, index) => {
                return (
                  <TableRow key={row.id}>
                    <TableCell padding="normal">
                      <Typography
                        fontFamily={"vazir"}
                        color="#040714"
                        fontWeight={400}
                        fontSize={14}
                        textAlign={"center"}
                      >
                        {row.id}
                      </Typography>
                    </TableCell>
                    <TableCell align="right" padding="normal">
                      <Typography
                        fontFamily={"vazir"}
                        color="#040714"
                        fontWeight={400}
                        fontSize={14}
                      >
                        {row.code}
                      </Typography>
                    </TableCell>
                    <TableCell align="right" padding="normal">
                      <Typography
                        fontFamily={"vazir"}
                        color="#578FFF"
                        fontWeight={400}
                        fontSize={14}
                      >
                        {row.name}
                      </Typography>
                    </TableCell>
                    <TableCell align="right" padding="normal">
                      <Typography
                        fontFamily={"vazir"}
                        color="#040714"
                        fontWeight={400}
                        fontSize={14}
                      >
                        {row.time}
                      </Typography>
                      <Typography
                        fontFamily={"vazir"}
                        color="#040714"
                        fontWeight={400}
                        fontSize={14}
                      >
                        {row.date}
                      </Typography>
                    </TableCell>
                    <TableCell align="right" padding="normal">
                      {" "}
                      <Typography
                        fontFamily={"vazir"}
                        color="#040714"
                        fontWeight={400}
                        fontSize={14}
                      >
                        {row.factorType === 1 ? "خرید" : "فروش"}
                      </Typography>
                    </TableCell>
                    <TableCell align="right" padding="normal">
                      {" "}
                      <Typography
                        fontFamily={"vazir"}
                        color="#040714"
                        fontWeight={400}
                        fontSize={14}
                      >
                        {row.count} قلم
                      </Typography>
                    </TableCell>
                    <TableCell align="right" padding="normal">
                      {" "}
                      <Typography
                        fontFamily={"vazir"}
                        color="#040714"
                        fontWeight={400}
                        fontSize={14}
                      >
                        {Intl.NumberFormat().format(parseFloat(row.price))}
                      </Typography>
                    </TableCell>
                    <TableCell align="right" padding="normal">
                      {" "}
                      <Typography
                        fontFamily={"vazir"}
                        color="#040714"
                        fontWeight={400}
                        fontSize={14}
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                      >
                        {row.status === 1 ? <FailSVG /> : <DoneSVG />}
                        {row.status === 1 ? "پرداخت نشده" : "پرداخت شده"}
                      </Typography>
                    </TableCell>
                    <TableCell align="right" padding="normal">
                      <Box display={"flex"} gap={2} alignItems={"center"}>
                        <FileSVG />
                        <EditSVG />
                      </Box>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        {loading && (
          <div className="z[100000] absolute bottom-2 left-0 flex h-90 w-full place-items-center justify-center bg-[#eeeeee70]">
            <CircularProgress size="30px" />
          </div>
        )}

        <Box display={"flex"} justifyContent={"space-between"} pb={1}>
          <CustomPaginationActions
            count={data.length}
            page={page}
            rowsPerPage={rowsPerPage}
            onPageChange={handleChangePage}
          />
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={2}
          >
            <Typography
              align="right"
              fontFamily="vazir"
              fontWeight={400}
              color="#040714"
              fontSize={14}
            >
              نمایش {start} تا {end} از {data.length} محصول
            </Typography>
            <Typography
              align="right"
              fontFamily="vazir"
              fontWeight={400}
              color="#040714"
              fontSize={14}
              className="!px-5"
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={1}
            >
              <select
                className="rounded border border-[#ECECEC] text-sm !text-[#6F6F6F]"
                value={rowsPerPage.toString()}
                onChange={(e) => handleChangeRowsPerPage(e)}
                dir="rtl"
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
              </select>
              ردیف
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}

export default TableComponent;
