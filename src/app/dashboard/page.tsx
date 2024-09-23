import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import TableComponent from "@/components/Tables/Table";

export const metadata: Metadata = {
  title: "بشمار | داشبورد",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <TableComponent />
      </DefaultLayout>
    </>
  );
}
