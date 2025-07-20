// pages/mvp/index.tsx
import React from 'react';
import Navbar from '@/components/Navbar'; // mavjud bo‘lsa
import Head from 'next/head';

export default function MVPPage() {
  return (
    <>
      <Head>
        <title>MVP - SelfCloner</title>
      </Head>
      <Navbar />
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-4">Our MVP</h1>
        <p className="text-lg text-gray-700">
          This is where we showcase the minimum viable product of the SelfCloner project.
        </p>
        {/* You can add images, demo components, or video links */}
      </main>
    </>
  );
}
