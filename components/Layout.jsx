// components/Layout.js

import React from 'react';
import Head from 'next/head';
import Navigation from './Navigation';
import Footer from './Footer';
import Link from 'next/link';

const Layout = ({ children }) => {
    return (
        <div>
            <Head>
                <title>Biodiversity Nexus Blog</title>
                <Link rel="icon" href="/favicon.ico" />
            </Head>
            <Navigation />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
