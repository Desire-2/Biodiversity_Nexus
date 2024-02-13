// Layout.js
import React from 'react';
import TableOfContents from '../pages/courses/excel/TableOfContents';
import Content from '../pages/courses/excel/Content';

const Layout = () => {
  return (
    <div style={{ display: 'flex' }}>
      <TableOfContents />
      <Content />
    </div>
  );
};

export default Layout;
