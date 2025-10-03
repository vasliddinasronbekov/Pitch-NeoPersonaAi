// pages/mvp/index.tsx
import React from 'react';
import Navbar from '@/app/Navbar'; // mavjud bo‘lsa
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
        <h1>Hurmatli foydalanuvchi,

Ba’zi texnik nosozliklar va muayyan xatoliklar tufayli ilovamizni hozircha deploy qila olmayapmiz. Buning uchun sizlardan uzr so‘raymiz.

Agar ilovani sinab ko‘rmoqchi bo‘lsangiz, biz bilan bevosita bog‘laning — sizga lokal versiyasini ishga tushirgan holda ip taqdim etamiz. Yoki istasangiz, quyidagi havola orqali repo faylini yuklab olib, o‘z kompyuteringizda test qilishingiz mumkin:
<br/>
<hr/>
<br/>
🔗 [<a href="https://github.com/vasliddinasronbekov/SelfCloner">SelfClone(FullStack NextJs)</a>]
          <br/>
                                                  va 
<br/>
🔗 [<a href="https://github.com/vasliddinasronbekov/NeoPersonaAi/">NeoPersonaAi(CrossPlatform)</a>]
<br/>
<hr/>
<br/>
Yana bir bor uzr so‘raymiz va sizning sabringiz uchun katta rahmat!

Hurmat bilan,
[NeoPersona Ai team]

</h1>
<p>+998 93 404 3024 || <a href="https://t.me/Vasliddin_Asronbekov">Telegram</a></p>
        {/* You can add images, demo components, or video links */}
        &copy AWDS.UZ
      </main>
    </>
  );
}
