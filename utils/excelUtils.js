// utils/excelUtils.js
import ExcelJS from 'exceljs';

export const readExcelFile = async (filePath) => {
  try {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(filePath);
    const worksheet = workbook.getWorksheet(1);
    const data = [];

    worksheet.eachRow((row, rowNumber) => {
      data.push(row.values);
    });

    return data;
  } catch (error) {
    console.error('Error reading Excel file:', error);
    return []; // Return an empty array or handle the error accordingly
  }
};
