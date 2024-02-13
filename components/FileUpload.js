// components/FileUpload.js
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { readExcelFile } from '../utils/excelUtils'; // Make sure to have this utility function ready

const FileUpload = ({ setExcelData }) => {
  const onDrop = useCallback(async (acceptedFiles) => {
    const file = acceptedFiles[0];
    const data = await readExcelFile(file.path);
    setExcelData(data);
  }, [setExcelData]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className="dropzone">
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop an Excel file here, or click to select a file</p>
      }
    </div>
  );
};

export default FileUpload;
