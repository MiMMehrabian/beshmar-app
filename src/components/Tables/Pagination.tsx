import React from "react";
import { Button, IconButton, Typography } from "@mui/material";

export default function CustomPaginationActions(props: {
  count: any;
  page: any;
  rowsPerPage: any;
  onPageChange: any;
}) {
  const { count, page, rowsPerPage, onPageChange } = props;
  // calculate page counts
  const pageCount = Math.ceil(count / rowsPerPage);

  // handle prev/next page button
  const handlePageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    newPage: number,
  ) => {
    onPageChange(event, newPage);
  };

  return (
    <div dir="ltr" className="flex place-items-center justify-center md:justify-between px-5">
      <Typography
        className="!min-w-min pr-3 !text-sm !text-[#040714]"
        fontFamily={"vazir"}
      >
        از {pageCount.toLocaleString("fa-IR", { useGrouping: false })} صفحه
      </Typography>
      <IconButton
        onClick={(event) => handlePageButtonClick(event, page - 1)}
        className="!min-w-min !text-sm !text-[#040714]"
        disabled={page === 0}
      >
        قبلی
      </IconButton>
      {Array.from(Array(pageCount).keys()).map((number) => (
        <Button
          key={number}
          onClick={(event) => handlePageButtonClick(event, number)}
          variant={number === page ? "contained" : "outlined"}
          style={{ margin: "0 4px" }}
          className={`${number === page ? "!bg-[#EEEEEE]" : "!bg-white"} !min-w-min !border-[#ECECEC] !text-sm !text-[#6F6F6F] !shadow-none`}
          size="small"
        >
         <span className="font-vazir"> {(number + 1).toLocaleString("fa-IR", { useGrouping: false })}</span>
        </Button>
      ))}
      <IconButton
        className="!min-w-min !text-sm !text-[#040714]"
        onClick={(event) => handlePageButtonClick(event, page + 1)}
        disabled={page >= pageCount - 1}
      >
        بعدی
      </IconButton>
    </div>
  );
}
