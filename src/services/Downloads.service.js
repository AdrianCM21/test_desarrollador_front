import { fechaYMDHMS } from "@/utils/FechaActual";
import { utils, writeFile } from "xlsx";

export const downloadCSV = async (datos) => {
  try {
    const headers = Object.keys(datos[0]).join(',');
    const rows = datos.map(row => Object.values(row).join(',')).join('\n');
    const csv = `${headers}\n${rows}`;
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `CVS-Usuarios-${fechaYMDHMS()}.csv`;
    link.click();
  } catch (error) {
    return Promise.reject(error);
  }
}

export const downloadExcel = async (datos) => {
  try {
    const worksheet = utils.json_to_sheet(datos);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    writeFile(workbook, `Excel-Usuarios-${fechaYMDHMS()}.xlsx`);
  } catch (error) {
    return Promise.reject(error);
  }
}