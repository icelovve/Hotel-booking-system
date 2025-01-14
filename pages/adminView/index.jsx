import AdminLayout from '@/pages/components/layouts/AdminLayout'
import Head from 'next/head'
import React from 'react'
import { useEffect, useState } from "react";

const index = () => {   
    return (
        <AdminLayout>
            <Head>
                <title>Admin - Dashboard</title>
                <meta name='description' content='Admin Dashboard Page' />
            </Head>
        </AdminLayout>
    )
}

export default index