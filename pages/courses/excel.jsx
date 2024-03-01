// pages/courses/excel.js
import React, { useEffect, useState } from 'react';
import { readExcelFile } from '../../utils/excelUtils';
import Layout from '../components/excelLayout';

const ExcelCoursePage = () => {
  const [excelData, setExcelData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExcelData = async () => {
      const filePath = './Book1.xlsx';
      const data = await readExcelFile(filePath);
      if (data !== null) {
        setExcelData(data);
      }
      setLoading(false);
    };

    fetchExcelData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (excelData === null) {
    return <div>Error: Unable to load Excel data</div>;
  }

  return (
    <div>
      <h2>Excel Course Page</h2>
      {excelData.length > 0 ? (
        <table>
          <thead>
            <tr>
              {excelData[0].map((cell, index) => (
                <th key={index}>{cell}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {excelData.slice(1).map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>No data found in Excel file</div>
      )}
      <Layout />
    </div>
  );
};
export default ExcelCoursePage;

