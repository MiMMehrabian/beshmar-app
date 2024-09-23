import { createData } from "@/utils";
// get function to set data
export async function GET() {
   const rows = [
    createData(1, 455440, "نازنین مرادی", 1, 12, "12000000", 1),
    createData(2, 455441, "احمدمحمدی", 1, 12, "1320000", 0),
    createData(3, 455442, "یزدان پاکدل", 1, 12, "420000", 0),
    createData(4, 455443, "مریم محمدی", 1, 12, "32030000", 0),
    createData(5, 455444, "رضا ابراهیمی", 0, 12, "231000", 1),
    createData(6, 455445, "سعید ابراهیمی", 1, 12, "8970000", 1),
    createData(7, 455446, "مسعود ابراهیمی", 1, 12, "59690000", 1),
    createData(8, 455447, "احمد ابراهیمی", 1, 12, "54660000", 1),
    createData(9, 455448, "رضا ابراهیمی", 1, 12, "3240000", 1),
    createData(10, 455449, "مهدی ابراهیمی", 1, 12, "800000", 1),
    createData(11, 455450, "محمد ابراهیمی", 1, 12, "999000", 1),
    createData(12, 455451, "رها ابراهیمی", 1, 12, "5069000", 0),
  ];

  return new Response(JSON.stringify(rows), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
