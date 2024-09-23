import { createData } from "@/utils";
// get function to set data
export async function GET() {
  const rows = [
    createData(1, 212121, "نازنین مرادی", 1, 12, "1232323", 1),
    createData(2, 212121, "احمدمحمدی", 1, 12, "1232323", 0),
    createData(3, 212121, "یزدان پاکدل", 1, 12, "1232323", 0),
    createData(4, 212121, "مریم محمدی", 1, 12, "1232323", 0),
    createData(5, 212121, "رضا ابراهیمی", 0, 12, "1232323", 1),
    createData(6, 212121, "سعید ابراهیمی", 1, 12, "1232323", 1),
    createData(7, 212121, "مسعود ابراهیمی", 1, 12, "1232323", 1),
    createData(8, 212121, "احمد ابراهیمی", 1, 12, "1232323", 1),
    createData(9, 212121, "رضا ابراهیمی", 1, 12, "1232323", 1),
    createData(10, 212121, "مهدی ابراهیمی", 1, 12, "1232323", 1),
    createData(11, 212121, "محمد ابراهیمی", 1, 12, "9999", 1),
    createData(12, 212121, "رها ابراهیمی", 1, 12, "1232323", 0),
  ];

  return new Response(JSON.stringify(rows), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
