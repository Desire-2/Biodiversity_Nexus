// pages/index.js
import React, { useState } from 'react';
import FileUpload from '../../components/FileUpload';

const IndexPage = () => {
  const [excelData, setExcelData] = useState([]);

  return (
    <div>
      <h1>Data Analysis with Excel</h1>
      <FileUpload setExcelData={setExcelData} />
      {/* Display Excel data or perform further analysis */}
    </div>
  );
};

export default IndexPage;
