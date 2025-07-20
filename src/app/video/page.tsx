// pages/video/index.tsx
import React from 'react';
import Navbar from '@/app/Navbar'; // mavjud bo‘lsa
import Head from 'next/head';

export default function VideoPage() {
  return (
    <>
      <Head>
        <title>Video Presentation - SelfCloner</title>
      </Head>
      <Navbar />
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-4">Video Presentation</h1>
        <p className="text-lg text-gray-700">
          Watch the official SelfCloner video submission below:
        </p>
        <div className="mt-6">
          <iframe
            className="w-full aspect-video rounded-xl shadow-xl"
            src="https://www.youtube.com/embed/56723s"
            title="SelfCloner Video"
            allowFullScreen
          ></iframe>
        </div>
      </main>
    </>
  );
}
