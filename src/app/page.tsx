"use client";

import { useState, useRef } from "react";
import Navbar from "./Navbar";


export default function ElevatorPage() {
  const [lang, setLang] = useState<"uz" | "en">("uz");
  const [currentWordIndex, setCurrentWordIndex] = useState<number | null>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const texts = {
    uz: `NeoPersona – Prezident Tech Award Uchun Speach Ssenariy
 Kirish
Assalamu alaykum, hurmatli hakamlar, aziz tinglovchilar! Tasavvur qiling — siz hozir
uchrashuvdasiz. Lekin, bu yerda yo‘qsiz. Biroq sizning ovozingiz, yuz ifodangiz, hattoki
o‘ylash uslubingiz — bu yerda. U sizning NeoPersona kloningiz.
 Muammo
Bugungi tezkor dunyoda har joyda o‘zimiz bo‘la olmaymiz. Biz bandmiz — darsda,
ishlarda, safarda, ba’zida esa ruhiy holda yo‘qmiz. Ammo inson o‘rnini hech narsa bosa
olmaydi, to'g'rimi?
 Yechim
Shu sababli biz NeoPersona’ni yaratdik – bu sizning sun’iy ongli, real vaqtli raqamli
kloningiz. NeoPersona: - Sizning ovoz ohangingizni klonlaydi - Yuzingiz va mimikangizni
jonlantiradi - Siz kabi fikr yuritadi va eslaydi Va eng muhimi — siz bo‘lmaganingizda ham
sizni ifodalaydi.
 Texnologiyasi
Ilova Web, Android va iOS uchun tayyorlangan. Foydalanuvchi: 1. Ovozini yozadi 2.
Surat/video yuklaydi 3. O‘z odatlari haqida javob beradi Keyin esa — klon o‘rganadi,
gapiradi, reagirlaydi va xotirasini rivojlantiradi. Bularning barchasi: - ElevenLabs va D-ID
kabi AI xizmatlar - WebSocket asosida real vaqtli chat - Shifrlangan xotira bilan amalga
oshadi.
 Foyda va Kelajak
NeoPersona: -  Siz o‘rniga uchrashuvga qatnashadi -  Esdaliklaringizni eslaydi - 
Shaxsiy AI yordamchi bo‘ladi -  O‘zingizga maslahatchi sifatida xizmat qiladi Kelajakda
esa kloningiz boshqa klonlar bilan gaplashadi, qaror qabul qiladi va sizning AI vakilingizga
aylanadi.
 Yakun
🧠 Muhim eslatma – SelfCloner loyihasi haqida
Hurmatli hakamlar!
Sizga kichik, ammo muhim bir eslatmani taqdim etmoqchimiz. Hozirgi kunda sunʼiy intellekt (AI) texnologiyalari jadal rivojlanmoqda. Biroq, siz ham yaxshi bilasizki, bunday yirik texnologik loyihalarni 0$ balans bilan to‘liq yakunlash deyarli imkonsizdir.
SelfCloner — bu insonning ovozi, yuzi, odatlari va fikrlash tarziga asoslangan raqamli “egizak”ini yaratishga qaratilgan keng qamrovli loyiha. Bugungi kunga kelib, loyiha asosiy funksiyalari tayyorlangan bo‘lsa-da, ayrim qismlarini vaqtincha mavjud pullik AI xizmatlari yordamida ishga tushirishga majbur bo‘lmoqdamiz.
Bizning asl niyatimiz — hech bir tashqi servisga bog‘liq bo‘lmagan, to‘liq mahalliy texnologiyalarga asoslangan, O‘zbekistonning o‘ziga xos:

AI modeli,

TTS (matndan ovozga aylantirish),

FaceClone (yuz raqamlashtirish),

VoiceClone (ovoz kloni),

va MindCloner (fikr modeli)
kabi tizimlarini nol (0) dan o‘zimiz ishlab chiqishdir.

Bu loyiha nafaqat texnologik jihatdan, balki O‘zbekistonning AI sohasidagi mustaqilligini taʼminlash yo‘lida ham muhim qadamlardan biri bo‘ladi.
NeoPersona bu shunchaki texnologiya emas — bu sizning raqamli uzviyligingiz. Bugungi
tanlovda biz siz bilan bu kelajakni boshlashni istaymiz. Va esda tuting: “Siz yo‘q
bo‘ganingizda, NeoPersona bor.” Rahmat!`,
    en: `(English Version)\n

 Introduction

Hello esteemed judges, respected audience.

Imagine this — you are attending a meeting right now.

But... you're not actually there.

Yet, your voice, your face, even your thinking style — is present.

That is your NeoPersona clone.

 The Problem

In today's fast-paced world, we can’t always be everywhere.

We’re busy — in school, at work, in travel, or sometimes, we’re just mentally exhausted.

But no technology has ever been able to fully replace a human, right?

 The Solution

That’s why we built NeoPersona —

Your real-time, AI-powered digital twin.

NeoPersona:

Clones your voice with your exact tone and emotion

Animates your face with natural gestures

Thinks like you, remembers like you

And most importantly — represents you when you’re not there

 The Technology

The app works across Web, Android, and iOS.

The user simply:

Records their voice

Uploads photos or videos

Answers a few questions about their habits and behavior

Then the clone learns, talks, reacts, and grows its memory.

All powered by:

AI tools like ElevenLabs, D-ID, and custom LLMs

Real-time chat via WebSocket

Encrypted, secure memory storage

 Impact & The Future

NeoPersona can:

Attend meetings on your behalf

Recall your memories when you forget

Become your personal AI assistant

Act as your decision-making advisor

And in the near future, your clone will:

Talk to other clones

Collaborate

Make decisions

And become your AI ambassador

 Conclusion

🧠 Important Note – About the SelfCloner Project
Dear Judges,

We would like to respectfully remind you of an important point. Today, AI technologies are rapidly advancing, but as you well know, it is nearly impossible to fully develop such a complex, high-level project with a $0 budget.

SelfCloner is an ambitious project aimed at creating a real-time digital “twin” of a person — replicating their voice, face, behavior, and thinking patterns. While the core functionalities of our project have already been developed, we have been forced to rely on third-party paid AI services for some advanced features due to current financial constraints.

However, our ultimate goal is to build everything independently, without relying on any external tools or platforms. We envision the creation of:

Our own AI model,

A locally developed TTS (Text-to-Speech) system,

FaceClone for facial replication,

VoiceClone for voice duplication,

And a fully native MindCloner for simulating cognitive behavior —
all entirely developed within Uzbekistan.

We strongly believe this vision will not only demonstrate our technical capability, but also contribute to Uzbekistan's independence and leadership in the AI industry.

NeoPersona is not just a technology —

It is your digital continuity.

Today, we invite you to start the future with us.

And remember:

"When you're not there… NeoPersona is."

Thank you!`,
  };

  const selectedText = texts[lang];
  const words = selectedText.split(/\s+/);

  const speakText = () => {
    // Stop if already speaking
    if (isSpeaking) {
      speechSynthesis.cancel();
      setIsSpeaking(false);
      setCurrentWordIndex(null);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(selectedText);
    utterance.lang = lang === "uz" ? "uz-UZ" : "en-US";
    utterance.rate = 1;
    setIsSpeaking(true);

    utterance.onboundary = (event) => {
      if (event.name === "word" || event.charIndex !== undefined) {
        const { charIndex } = event;
        const textUpToChar = selectedText.substring(0, charIndex);
        const index = textUpToChar.trim().split(/\s+/).length - 1;
        setCurrentWordIndex(index);

        // Scroll current word into view
        const el = wordRefs.current[index];
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }
    };

    utterance.onend = () => {
      setIsSpeaking(false);
      setCurrentWordIndex(null);
    };

    speechSynthesis.speak(utterance);
  };

  return (

    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white px-4 py-12 flex items-center justify-center font-sans">
      <Navbar />

      <div className="max-w-5xl w-full grid md:grid-cols-3 gap-6 items-stretch">
        {/* Chap panel */}
        <div className="md:col-span-1 border-r border-white/10 pr-6 flex flex-col justify-center items-start text-left">
          <div className="w-full text-left mb-8">
            <h1 className="text-4xl font-bold mb-2">NeoPersona</h1>
            <p className="text-lg font-medium text-blue-400">Elevator Pitch</p>
          </div>

          <div className="flex-grow flex flex-col items-start  w-full">
  <button
    onClick={speakText}
    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-medium"
  >
    {isSpeaking
      ? lang === "uz"
        ? "⏹ To‘xtatish"
        : "⏹ Stop"
      : lang === "uz"
      ? "🚀 Ovozda o‘qish"
      : "🚀 Speak It Aloud"}
  </button>

  {/* 🔻 Kichik ogohlantirish */}
  <p className="text-xs text-yellow-400 mt-2">
    {lang === "uz"
      ? "⚠️ Biroz kuting, boshlanish sekin bo'lishi mumkin."
      : "⚠️ Please wait, speech may start slowly."}
  </p>
</div>
        </div>

        {/* O‘ng panel */}
        <div className="md:col-span-2">
          {/* Til tablari */}
          <div className="flex space-x-2 mb-4">
            <button
              onClick={() => setLang("en")}
              className={`px-4 py-2 rounded-t-md font-medium ${
                lang === "en"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              English
            </button>
            <button
              onClick={() => setLang("uz")}
              className={`px-4 py-2 rounded-t-md font-medium ${
                lang === "uz"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              O‘zbekcha
            </button>
          </div>

          {/* Highlight matn */}
          <div className="bg-white/5 p-6 rounded-md shadow-inner backdrop-blur-md text-lg leading-relaxed max-h-[50vh] overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-transparent">
            {words.map((word, index) => (
              <span
                key={index}
                ref={(el) => {
  wordRefs.current[index] = el;
}}
                className={`transition-all duration-100 ${
                  index === currentWordIndex
                    ? "bg-blue-500 text-white px-1 rounded"
                    : ""
                }`}
              >
                {word + " "}
              </span>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
