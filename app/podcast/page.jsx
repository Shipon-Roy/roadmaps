"use client";
import React, { useState } from "react";
import Container from "../../components/ui/Container";

const videos = [
  {
    name: "Stop Wasting Time: How to Prioritize Tasks and Get Things Done | Time Management Webinar in Bangla",
    description:
      "Stop Wasting Time: How to Prioritize Tasks and Get Things Done | Time Management Webinar in Bangla In this Bangla webinar on time management, you'll learn how to prioritize tasks and get things done efficiently. We'll discuss the dangers of multitasking, back tasking, and switch tasking, and teach you how to overcome them. You'll also learn about the three principles of productivity - space, mind, and time - and how to apply them to your daily life. We'll cover time budgeting, time blocking, and using Google Calendar to manage your schedule. By the end of the webinar, you'll have the tools and strategies you need to stop wasting time and become more productive in your personal and professional life.",
    videoUrl: "https://www.youtube.com/embed/66d8tGXg3Sw?si=B7m2HFSLh7u_Gr94",
  },
  {
    name: "Sudipta Kar: Applied Scientist at Amazon on Campus, Research and Mental health | Splendid Minds",
    description:
      "সুদীপ্ত ভাই, এমাজন এলেক্সার এ আই সায়েন্টিস্ট, অনেক বছর ধরে কাজ করছেন ন্যাচারাল ল্যাঙ্গুয়েজ প্রোসেসিং, মেশিন লার্নিং এসব নিয়ে। আমার পডকাস্টটা কিছুটা তার 'মন বসেনা পড়ার টেবিলে' পডকাস্ট থেকে ইন্সপায়ারড। ভাই বেশ খোলামেলা ভাবেই ক্যাম্পাস লাইফের বিভিন্ন সমস্যা, সম্ভাবনা, কিছু খুবই এক্সক্লুসিভ টিপস এন্ড ট্রিক্স শেয়ার করেছেন যেটা যারা গবেষণা করতে চায় তাদের জন্য অনেক বেশি কাজে লাগবে। এখন যারা ইউনিভার্সিটিতে পড়ছে, বিশেষ করে ইঞ্জিনিয়ারিং নিয়ে, এই এপিসোডটা তাদের জন্য! ",
    videoUrl: "https://www.youtube.com/embed/3v0rqnWxewk?si=TohbKMJvM_7tdpLV",
  },
  {
    name: "Fake Motivation | CSE, Non-CSE and Software Engineering",
    description: "Fake Motivation | CSE, Non-CSE and Software Engineering",
    videoUrl: "https://www.youtube.com/embed/OBJkmkzm6sc?si=twgPUYATSpwi2EoD",
  },
  {
    name: "Web Development in AI Era - Sumon Molla Selim X Jhankar Mahbub",
    description:
      "AI কি ডেভেলপারদের জব খেয়ে দিবে? 🤔 AI এর এই রেইসে ওয়েব ডেভেলপমেন্ট বা প্রোগ্রামিং এর ভবিষ্যৎ কী?  এই সব বিষয়ে খোলামেলা আলাচনা করতে আজ রাত ৮ টায় আমাদের সাথে লাইভে থাকবেন  সিনিয়র সফটওয়্যার ইঞ্জিনিয়ার Sumon Molla Selim ভাই। ভাইয়া দেশে-বিদেশে বিভিন্ন জব রুলে, বিভিন্ন টেকনোলজি  নিয়ে ১ যুগেরও বেশি সময় ধরে কাজ করছেন। ভাইয়ার সেই অভিজ্ঞতা থেকে আমরা প্রতিটি বিষয় বিস্তারিত জানবো।",
    videoUrl: "https://www.youtube.com/embed/IgIpKN-YPrI?si=RaX6WdYXHjKnFesV",
  },
  {
    name: "মাত্র ৮ ঘণ্টায় মেট্রোরেলের মোবাইল অ্যাপ",
    description:
      "এই পর্বে কথা বলেছি একজন অভিজ্ঞ প্রোগ্রামার অনিরুদ্ধ অধিকারী সাথে । ঢাকায় বেড়াতে গিয়ে তিনি মেট্রোরেলের টিকিট কাটতে গিয়ে অস্বস্তিতে পড়েন পরবর্তীতে সেই অস্বস্তি থেকে সে মাত্র ৮ ঘণ্টার মধ্যে একটি অ্যাপ ডেভেলপ করে ফেলেন । সেই গল্প এই ভিডিওতে শেয়ার করা হয়েছে। এছাড়াও এআইয়ের ভবিষ্যৎ কি সফটওয়্যার ইঞ্জিনিয়ারদের চাকরির ক্ষেত্রে এআই কতটা ভূমিকা পালন করবে এবং বর্তমানে কম্পিউটার সাইন্সের পড়তে গেলে কিভাবে শুরু করা উচিত।",
    videoUrl: "https://www.youtube.com/embed/MZTdsmhE_8U?si=1quyhQe4HTWK1osb",
  },
  {
    name: "NSU থেকে Amazon",
    description:
      "শাহরিন শাহজাহান বাংলাদেশে নর্থ সাউথ বিশ্ববিদ্যালয়ে পড়াশোনার করেছেন  কম্পিউটার বিজ্ঞান ও প্রকৌশলে। এরপরে তিনি আমেরিকায় মাস্টার্স করেন ফুল ফান্ডেড এডমিশন পেয়ে। এখন উনি কর্মরত আছেন অ্যামাজনে একজন সফটওয়ার প্রকৌশলী হিসাবে। এই ভিডিওতে  উনি শেয়ার করেছেন উনার ক্যারিয়ার জার্নি এবং নতুনদের জন্য কিছু টিপস।",
    videoUrl: "https://www.youtube.com/embed/xIU6DiFcW_0?si=zlgyHQ8TBgXM7pj7",
  },
  {
    name: "আমেরিকায় পিএইচডির শুরুর স্ট্রাগল এবং সমাধান এর চেষ্টা",
    description: "আমেরিকায় পিএইচডির শুরুর স্ট্রাগল এবং সমাধান এর চেষ্টা",
    videoUrl: "https://www.youtube.com/embed/vQ84ht8QK6g?si=WJXDGzTZH1IAIVWF",
  },
  {
    name: "BUET to Microsoft Research - CSE Career Guideline, Thesis, Industry",
    description:
      "বুয়েটে ভর্তি হওয়ার পরে যে প্রোগ্রামিং সম্পর্কে অবগত ছিল না, সে কিভাবে বুয়েট থেকে সরাসরি মাইক্রোসফট এ গেলো? এই এপিসোডের গেস্ট মাইক্রোসফট রিসার্চ এর রিসার্চ ইঞ্জিনিয়ার তুষার চক্রবর্তী। এই এপিসোড থেকে আপনারা যা যা জানতে পারবেনঃ ১) আন্ডারগ্রেড লেভেল এ কিভাবে পড়াশোনা করতে হবে । ২) মাইক্রোসফট এর জার্নি এবং ইন্ডাস্ট্রির এক্সপেরিয়েন্স । ৩) বাংলাদেশে বর্তমানে রিসার্চ এর কালচার । ৪) আপনি কিভাবে ইন্ডাস্ট্রি থেকে শিখতে পারেন।  ৫) কোন ইন্ডাস্ট্রিতে কাজ করতে হলে কি কি দক্ষতা থাকা দরকার । ৬) টেক ইন্ডাস্ট্রিতে AI এর প্রভাব ",
    videoUrl: "https://www.youtube.com/embed/yIa6YjW94Aw?si=cXrddYFc710VFP7v",
  },
  {
    name: "দোলন এর ফটোগ্রাফি - চিত্রগল্পের গল্প - Wedding Photography in Bangladesh",
    description:
      "'জীবনের গল্পে রং তুলির আঁচড়: চিত্রগল্পের জন্মকথা'বিয়ে মানেই জীবনের সবচেয়ে রঙিন মুহূর্তগুলোকে ক্যামেরায় বন্দী করা। আর সেই মুহূর্তগুলোকে অমর করে রাখার পেছনের মানুষটির গল্প শুনেছেন কখনো? সেই রঙিন মুহূর্তগুলোকে চিরস্থায়ী করে তোলার পেছনের মানুষ আল আমিন আবু আশরাফ দোলন । বাংলাদেশের শীর্ষ ওয়েডিং ফটোগ্রাফি ব্র্যান্ড 'চিত্রগল্প' এর প্রতিষ্ঠাতার সাথে এই বিশেষ সাক্ষাৎকারে আপনি জানতে পারবেন: স্কুল-কলেজের দিনলিপি থেকে বিশ্ববিদ্যালয়ের সংগ্রামের গল্প । কীভাবে জন্ম নিল 'চিত্রগল্প'? শুরুটাই বা কীভাবে? সাফল্যের পেছনের অদম্য লড়াই । একটি ব্র্যান্ডকে 'বাংলাদেশের সেরা' হিসেবে গড়ে তোলার ম্যাজিক । ভবিষ্যতে চিত্রগল্পকে নিয়ে স্বপ্ন ও পরিকল্পনা ।",
    videoUrl: "https://www.youtube.com/embed/gcieZ0H0kHQ?si=wfMXCcI2_H-pv2Fq",
  },
  {
    name: "Apple এর ইঞ্জিনিয়ারের সাথে আড্ডা । EEE।",
    description:
      "আজকের Backstage Podcast অতিথি তাহমিদ, আমার শাহজালাল বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়ের (সাস্ট) ইলেকট্রিক্যাল অ্যান্ড ইলেকট্রনিক ইঞ্জিনিয়ারিং (EEE) ডিপার্টমেন্টের প্রথম ব্যাচের শিক্ষার্থী। বর্তমানে সে অ্যাপল কোম্পানিতে একজন ডিজাইন ইঞ্জিনিয়ার হিসেবে কর্মরত। সম্প্রতি অ্যাপলের নতুন লঞ্চ হওয়া ম্যাকবুক প্রো ল্যাপটপটি তাহমিদের টিমেরই ডিজাইন করা! আমার চ্যানেলে EEE বিষয়ে এর আগে কোনো আলোচনা হয়নি, তাই এই এপিসোডটি আমার জন্য এবং আপনাদের জন্য খুবই স্পেশাল। এই ভিডিওতে আমরা তাহমিদের সাথে EEE ইন্ডাস্ট্রি নিয়ে বিস্তারিত আলোচনা করেছি। তাহমিদ প্রায় তিন মাস মাইক্রোচিপ ম্যানুফ্যাকচারিং কোম্পানি ইন্টেলে কাজ করার পর অ্যাপলে যোগদান করে। এই ভিডিওতে আপনারা জানতে পারবেন EEE ফিল্ডে পড়াশোনার জন্য কী কী বিষয় গুরুত্বপূর্ণ, কী কী টুল ব্যবহার করা যেতে পারে, EEE এর ইন্ডাস্ট্রি কেমন এবং জব অপরচুনিটি কী কী রয়েছে। তাহমিদের বাস্তব অভিজ্ঞতা থেকে EEE এর সম্ভাবনা এবং চ্যালেঞ্জগুলো জানতে পারবেন। যারা EEE নিয়ে পড়াশোনা করছেন বা ভবিষ্যতে এই বিষয়ে আগ্রহী, তাদের জন্য এই ভিডিওটি খুবই সহায়ক হবে। ভিডিওটি ভালো লাগলে লাইক, কমেন্ট এবং শেয়ার করতে ভুলবেন না। এছাড়াও, EEE সম্পর্কিত আরও প্রশ্ন থাকলে কমেন্ট বক্সে জানাতে পারেন।",
    videoUrl: "https://www.youtube.com/embed/kUdtka1u-0A?si=2D5E3YbSHmZR-Grx",
  },
  {
    name: "Career Opportunities in Europe for a Programmer - How to get a job?",
    description:
      "In this first episode of Talk with Sumit, we discussed 'Career Opportunities in Europe for a Programmer'. Our guest was Mr. William F. Gomes, Sr. Full-stack Lead, MYMY Catering GMBH, Berlin, Germany. He is the second programmer who got a job in Germany from Bangladesh and successfully migrated. In this insightful session, William shared his inspiring journey and struggle to secure his dream job in Europe. Besides that, we discussed a lot about Programming and it was fun. We hope you will find this session very useful.",
    videoUrl: "https://www.youtube.com/embed/04Q_lcjZ7_E?si=FzEx82QQjnHfP4wb",
  },
  {
    name: "Freelancing Bangladesh - How to find work as a freelance web developer",
    description:
      "In this second episode of Talk with Sumit, we discussed 'How to prepare for Freelance Marketplace'. Our guest was Mr. Saidur Rahman Setu, Founder, JS Bangladesh. He is a popular educator who shares his programming knowledge for free in his Youtube Channel called JS Bangladesh -    / udbhot  . He also offers paid quality courses from his organization JS Bangladesh. Besides that, we discussed a lot about Programming and it was fun. We hope you will find this session very useful.",
    videoUrl: "https://www.youtube.com/embed/LpYD_wg6uQs?si=aH_7qqmpppeo501F",
  },
  {
    name: "PHP Developer Career Growth & Opportunities",
    description:
      "In this fifth episode of 'Talk with Sumit', we shall discuss about the popular PHP language and its career opportunities. Our guest was Mr. Sumon Molla Selim, Sr. Software Engineer, Mimecast. As an experienced PHP Developer, Sumon shared his experiences and journey as a PHP Developer, how the journey was started, how he prepared himself for job market both inside and outside Bangladesh, how he joined Mimecast, his current working experiences and many more. Hope this discussion helps beginners and programming enthusiasts.",
    videoUrl: "https://www.youtube.com/embed/_39qPxr6e2Y?si=esEYV2dmXLVx8cQT",
  },
  {
    name: "How to become a Web Developer from Non CSE Background ",
    description:
      "In this special episode of Talk with Sumit, veteran Web Developer and self-made programmer Rasel Ahmed shared his valuable experiences and guide on how he became an Web Developer from scratch from Non CSE Background. Hope this episode will help you a lot.",
    videoUrl: "https://www.youtube.com/embed/fd8a-8ujfyc?si=_1OHC6gJ40E3-t9b",
  },
  {
    name: "How to design the Backend of a Website or Web Application",
    description:
      "In this 20th episode of Talk with Sumit, we discussed about Backend Web Application Development. Our guest HM Nayem, Founder & CEO, Stack Learner, would guide us how to plan and design a backend web application step by step.",
    videoUrl: "https://www.youtube.com/embed/NfkdznwRadY?si=qVUqHVu4vgT3lGAH",
  },

  {
    name: "AI এর যুগে Programming বা Coding সেক্টরের ফিউচার কী? Will AI Replace Programmers? Reality vs Hype",
    description:
      "AI এর যুগে Programming বা Coding সেক্টরের ফিউচার কী? Will AI Replace Programmers? Reality vs Hype",
    videoUrl: "https://www.youtube.com/embed/HWT7mTppo5U?si=xIXpifHBwqggzUc9",
  },
  {
    name: "ড্রপ আউট থেকে ডেভেলপার ক্যারিয়ার ",
    description:
      "একপাশে ভয় AI সব রিপ্লেস করে দিবে 😨, আরেকপাশে বাস্তবতা সিচুয়েশন এমন যে পড়াশোনা চালিয়ে যাওয়া অসম্ভব 😔। পরিবারের বড় ছেলে হিসেবে দায়িত্ব নিতে হবে তাই পড়াশোনা থেকে ব্রেক নিতে হয়। জীবনে এত উত্থান-পতন ছিলো যে, সময়ে সময়ে শুধু লক্ষ বদলেছে, কিন্তু নিজের অবস্থানের কোনো পরিবর্তন হয়নি। সেখান থেকেই Anyhow কিছু একটা করতে হবে মেন্টালিটি তৈরী হয় এবং Development জগতে পদাচরণ শুরু হয় 👨‍💻। যখন শুরু করি, চারদিকে একটাই কথা AI রিপ্লেস করে দিবে! ভয় পেয়ে এই ভাই থেকে ঐ ভাইয়ের কাছে দৌড়েছি সাজেশনের জন্য। সবার মুখে একটাই কথা 'Quit করা সহজ, কিন্তু কিছু পেতে হলে চ্যালেঞ্জ নিতে হবে। Fundamental স্ট্রং কর, AI কে Assistant বানাও You will be irreplaceable.' সেই আত্মবিশ্বাস থেকে Level-1 এর ৭ম ব্যাচে জয়েন করি। লেভেল-১ শেষ করে একটা জবে জয়েন করি। কিন্তু শেখার আগ্রহ থেকে Level-2 এর ৩য় ব্যাচে আবার জয়েন করি। সেটা শেষ করে এখন Full-stack Developer হিসেবে TripNest Limited এ কর্মরত আছি 💻। এতক্ষণ যার কথা বললাম তিনি আমাদের L1-7 & L2-3 ব্যাচের স্টুডেন্ট Pujon Das Auvi ভাই 🌟। পুরো পডকাস্ট দেখতে Programming Hero Community চ্যানেল ভিজিট করতে পারেন 🎥📺। 🔔 Don't forget to subscribe and hit the bell icon so you don't miss our next videos. Give this video a thumbs up 👍 if you find it useful, and share your thoughts 💭 in the comments. Let's learn and grow together! ✅ এছাড়া প্রোগ্রামিং এর যেকোনো প্রবলেম এর সমাধান বা মজার মজার টিপস এন্ড ট্রিকস পেতে আমাদের Young Coders : Learn Programming কমিউনিটি তে জয়েন হতে পারো।",
    videoUrl: "https://www.youtube.com/embed/ID8g1_bTTgc?si=VJnFKHilFZNrDCtN",
  },
  {
    name: "আমি Arts নিয়ে পড়েছি কিন্তু মাইন্ডসেট ছিলো IT তে Career গড়বো || Non CSE To Web Developer",
    description:
      "SSC এর পর থেকেই ক্যারিয়ারে কিছু একটা করতে হবে—এই চিন্তা মাথায় ঘুরতে থাকে। 🔄💭 অনলাইনে ঘাটাঘাটি করে দেখলাম ট্রেডিং, 'এত ঘণ্টা কাজ করে এতো টাকা' ইত্যাদি অনেক কিছু! কিন্তু আমার প্রথম থেকেই একটা ক্লিয়ারিটি ছিল—টাকা যদি ইনকাম করতেই হয়, তাহলে স্কিল দিয়েই করতে হবে। 💡 👉 সেই অনুযায়ী ডিজিটাল মার্কেটিং শেখা শুরু করি। প্রায় ১ বছর সময় দিই, কিন্তু কিছুই হয়ে ওঠেনি।এরপর Udemy থেকে Web Development Bootcamp নেই এবং সেখানে আরও ১ বছর সময় ব্যয় করি। কিন্তু সেল্ফ-লার্নিং করতে গিয়ে প্রচুর সময় অপচয় করেছি, প্রোক্রাস্টিনেশনে ভুগেছি, ফলে ঠিকভাবে শেখাও হয়নি। 😓 📌 এরপর সিদ্ধান্ত নিলাম একটা স্ট্রাকচার্ড কোর্স করা দরকার। রিসার্চ করে Programming Hero-র লার্নিং এনভায়রনমেন্ট ও জব প্লেসমেন্ট সম্পর্কে জানলাম এবং ৯ম ব্যাচে এনরোল করি। 🔥 অন-টাইমে কোর্স শেষ করে জব প্লেসমেন্টে যাই এবং আলহামদুলিল্লাহ, আমার প্রথম জবটা পেয়ে যাই! 🎉💼 এখন আমি অনার্স ফার্স্ট ইয়ারে পড়ছি এবং Bengle Software-এ Full Stack Developer হিসেবে কাজ করছি। 🚀👨‍💻 আমি একজন বিগিনার হিসেবে কী কী ভুল করেছি, কী কী চ্যালেঞ্জ ছিলো, আর কীভাবে নিজেকে জব রেডি করেছি—সেই পুরো জার্নিটা শেয়ার করবো! 🔔 Don't forget to subscribe and hit the bell icon so you don't miss our next videos. Give this video a thumbs up 👍 if you find it useful, and share your thoughts 💭 in the comments. Let's learn and grow together! ✅ এছাড়া প্রোগ্রামিং এর যেকোনো প্রবলেম এর সমাধান বা মজার মজার টিপস এন্ড ট্রিকস পেতে আমাদের Young Coders : Learn Programming কমিউনিটি তে জয়েন হতে পারো।",
    videoUrl: "https://www.youtube.com/embed/SH8VxZcY04g?si=TGeyqbefwFGwx_B4",
  },
  {
    name: "শেষ পর্যন্ত কী হয়, আমি সেটা দেখবো: How to Get Your Dream Job",
    description:
      "শেষ পর্যন্ত কী হয়, আমি সেটা দেখবো: How to Get Your Dream Job | Programming Hero --------------------------------------------------------- ইন্টারভিউ ব্যার্থতার ভয় থেকে কোর্সে ১০০% ডিটারমিনেশন। 💯 কনফিডেন্ট থাকলে জব ক্র‍্যাক করা সম্ভব 💼, কিন্তু কনফিডেন্স আসবে হার্ডওয়ার্কের মাধ্যমে 💪, বুঝে বুঝে টেকনোলোজি শিখার মাধ্যমে 📚। লেভেল-১ ব্যাচ ৩ ও লেভেল-২ ব্যাচ ১ এর স্টুডেন্ট রাহাত ভাই কোর্সে ডেডিকেটেড থেকেছেন 🧑‍💻, লেভেল-২ এর এডভান্সড টেকনোলজি আয়ত্ব করেছেন তার ফল স্বরূপ বর্তমানে জাভাস্ক্রিপ্ট ডেভেলপার হিসেবে কর্মরত 🏆। আজকে আমরা জানতে পারবো একজন হাল না ছাড়া ডিটারমাইন্ডেড স্টুডেন্টের গল্প 🙋‍♂️",
    videoUrl: "https://www.youtube.com/embed/ip-OsiFLsrE?si=GsNJWtUzpjvlgOwg",
  },
  {
    name: "2.20 CGPA নিয়েও দেশ সেরা কোম্পানিতে কীভাবে জব পেলাম?",
    description:
      "👨‍💻Dev Cast এর আজকের এপিসোডে আমাদের অতিথি প্রোগ্রামিং হিরোর ওয়েব ডেভেলাপমেন্ট কোর্সের ১ম ব্যাচের এর শিক্ষার্থী Tahsin Shahriar (Sr. Web Developer at Abul Khair Group)।  স্কিল ডেভেলপমেন্ট এবং ফ্রিল্যান্সিং ইত্যাদি করতে গিয়ে ইউনিভার্সিটি লাইফে মনোযোগ দিতে না পেরে low সিজিপিএ নিয়ে ইউনিভার্সিটি শেষ করেও তিনি একজন সাকসেসফুল ওয়েব ডেভলপার হতে পেরেছেন।  তার লাইফে শিখার জার্নি টা কেমন ছিল? ফ্রাস্ট্রেশন এর সময় গুলো কিভাবে ম্যানেজ করেছে? কিভাবে টাইম ম্যানেজমেন্ট করেছে এবং নিজের লার্নিং পাথ কিভাবে স্মুথ রেখেছে ইত্যাদি বিষয় নিয়ে কথা হবে আজকের এপিসোডে। ",
    videoUrl: "https://www.youtube.com/embed/WAA35lxpzuc?si=7mxDTxpHxFYqRNVH",
  },
  {
    name: "প্রোগ্রামিং এর কিছুই জানতাম না, বন্ধুদের চাপে ওয়েব ডেভেলপমেন্ট শিখা শুরু করি",
    description:
      "প্রোগ্রামিং এর কিছুই জানতাম না, বন্ধুদের চাপে ওয়েব ডেভেলপমেন্ট শিখা শুরু করি:Masud || Programming Hero 👨‍💻Dev Cast এর আজকের এপিসোডে আমাদের অতিথি প্রোগ্রামিং হিরোর ওয়েব ডেভেলাপমেন্ট কোর্সের ব্যাচ-৬ এর শিক্ষার্থী Mahfujur Rahman Masud (Software Engineer, Codect Soft)।  সারাদিন গেমিং এ সময় কাটাতো, ভালো কোন বিশ্ববিদ্যালয়ে পড়ার সুযোগ হয়নি এমনকি প্রোগ্রামিং সম্পর্কে আগে থেকে কোন ধারণাও ছিল না তার। তারপর তিনি কিভাবে তার লাইফে পরিবর্তন নিয়ে আসেন এবং একজন সফ্টওয়্যার ইঞ্জিনিয়ার হিসেবে নিজের ক্যারিয়ার শুরু করেন। তার সকল বিস্তারিত জানবো আজকের এই পডকাস্টে।",
    videoUrl: "https://www.youtube.com/embed/4CFbS8LaHac?si=DK2Gwvp07_-NDCAn",
  },
  {
    name: "AI, ML & Data Science এর যুগে আপনার ক্যারিয়ারের সুযোগ কোথায়?",
    description:
      "'𝐈𝐭'𝐬 𝐚 𝐦𝐢𝐧𝐝-𝐛𝐥𝐨𝐰𝐢𝐧𝐠 𝐩𝐨𝐝𝐜𝐚𝐬𝐭!'🚀🎙️🔥আপনি ক্যারিয়ারের যেই স্টেজে থাকেন না কেন আজকের পডকাস্ট শোনার পর আপনাকে literally আবার ক্যারিয়ার নিয়ে নতুন করে ভাবতে বাধ্য করবে। 🎙️ বর্তমান সময়ের হট টপিক AI, ML এবং Data science নিয়ে আমাদের প্রচুর আগ্রহ এবং একই সাথে ভয়ও আছে। আজকের পডকাস্টে আপনি এই বিষয়গুলো সম্পর্কে in-depth নলেজ পাবেন, যা আপনার লার্নিংয়ে নতুন মাত্রা যোগ করবে। 📈💡 আমাদের মধ্যে অনেকেরই বাংলাদেশ সম্পর্কে কিছু হীন ধারণা আছে। আরও ভালো সুযোগের খোঁজে আমরা অনেকেই দেশের বাইরে চলে যাই। কিন্তু আজকের পডকাস্ট শুনে বাংলাদেশকে নিয়ে আপনার দৃষ্টিভঙ্গি নতুন করে ভাবতে শুরু করবেন। আমরা অনেক সময় বলি দেশে চাকরি নেই, অথচ কোম্পানিগুলো বিদেশি ট্যালেন্ট হায়ার করছে। তাহলে কি আসলেই চাকরি নেই, নাকি ট্যালেন্টের ঘাটতি রয়েছে? 🤔💼 🎓 বিশ্ববিদ্যালয়ে পড়াশোনা করে ক্যারিয়ারে প্রবেশ করার পর আমরা বুঝি, অনেক গুরুত্বপূর্ণ স্কিল আমাদের নেই। এই সময়ে আমরা প্রথমেই বিশ্ববিদ্যালয়কে দোষারোপ করি। কিন্তু এখানে আমার বা বিশ্ববিদ্যালয়ের কী করণীয়? এইসব গুরুত্বপূর্ণ বিষয়সহ আরও নানা আলোচনা নিয়ে আজকের পডকাস্টে কথা বলেছেন Mohammad Oli Ahad (Founder, Enterprise Tech Limited)। ✅",
    videoUrl: "https://www.youtube.com/embed/XoolMwAP868?si=aqmu89rmWjUPiTKA",
  },
  {
    name: "একজন আইডিয়াল জুনিয়র ডেভেলপারের কী কী স্কিল থাকা দরকার ",
    description:
      "একজন আইডিয়াল জুনিয়র ডেভেলপারের কী কী স্কিল থাকা দরকার? বর্তমান সময়ে একজন জুনিয়র ডেভেলপারের চাকরি পাওয়া চ্যালেঞ্জিং হয়ে উঠছে, কারণ শুধুমাত্র প্রোগ্রামিং জানাই যথেষ্ট নয়। অনেকেই মনে করেন ভালো কোডিং জানলেই চাকরি পাওয়া সহজ, কিন্তু কোডিং কনভেনশন মেনে কাজ না করা, টিমওয়ার্কে দুর্বলতা বা নতুন প্রযুক্তি শেখার আগ্রহ না থাকলে উন্নতি সম্ভব নয়। Git, GitHub এবং ডিবাগিং দক্ষতা না থাকলে Project এ সমস্যা সমাধান করাও কঠিন হতে পারে। তাই একজন আইডিয়াল ডেভেলপার হতে হলে প্রোগ্রামিংয়ের পাশাপাশি ভার্সন কন্ট্রোল, ডিবাগিং, টিমওয়ার্ক ও লার্নিং এটিচিউডের মতো গুরুত্বপূর্ণ স্কিল অর্জন করতে হবে। এই বিষয়ে বিস্তারিত আলোচনা আজকের ভিডিওতে।",
    videoUrl: "https://www.youtube.com/embed/qtnx9uWpYlM?si=bXtUua6ImNHEApl1",
  },
  {
    name: "Big Tech কোম্পানিতে চাকরির জন্য এই কাজ গুলো করতেই হবে",
    description:
      "Big Tech কোম্পানিতে চাকরির জন্য এই কাজ গুলো করতেই হবে:M Manjur Mahmd@datasoftabib | Programming Hero ----------------------------------- 🚀 Career Crackerz এর আজকের এপিসোডে আমাদের অতিথি দেশের অন্যতম সেরা সফ্টওয়্যার কোম্পানির প্রেসিডেন্ট এবং ৩৩ বছর ধরে IT Industry তে অসামান্য অবদান রেখে চলা মোস্ট সিনিয়র ইন্ডাস্ট্রি লিডার ও মেন্টর M Manjur Mahmud (President, DataSoft Systems BD Ltd.)। তিনি AI 🤖 থেকে শুরু করে ভার্সিটিতে একাডেমিকে 📚 ফোকাস দিবো নাকি স্কিল ডেভেলপমেন্টে 🛠️ ফোকাস দিবো, বড় কোম্পানিতে প্লেসমেন্ট প্রিপারেশন 🏢, Healthy লাইফস্টাইল 🏃‍♂️, Habit Building 📈 সহ ক্যারিয়ারে শূন্য থেকে সফল হওয়ার সকল ফরমুলা ও গাইডলাইন শেয়ার করেছেন। ✅ কীভাবে নিজের প্যাশন খুজে পাবে? ✅ Big Tech Company তে জবের জন্য কী কী করতে হবে? ✅ ইউনিভার্সিটির ৪ বছরকে একজন স্টুডেন্ট কিভাবে প্রোপার ইউটিলাইজ করবে? ✅ জুনিয়র ডেভেলপার থেকে ম্যাচিউর হওয়ার জার্নিটা কেমন? ✅ AI এর জন্য জব মার্কেটে কী প্রভাব পড়বে? ✅ হায়ারিং এর জন্য কী কী দেখা হয়? এই সকল বিষয় ছাড়াও আরো অনেক বিষয় নিয়ে আমরা আলোচনা করবো এই এপিসোডে।",
    videoUrl: "https://www.youtube.com/embed/YicpcicZRYg?si=nmnKJ9pgyY-4zz_f",
  },
  {
    name: "ক্যারিয়ারে সফল হতে Hard Work এর চেয়ে বেশি Focus আর Vision দরকার",
    description:
      "ক্যারিয়ারে সফল হতে Hard Work এর চেয়ে বেশি Focus আর Vision দরকার : S M Asad Rahman || Programming Hero ক্যারিয়ার নিয়ে অনেক বেশি ফোকাসড থাকা এবং একটা ডেডিকেটেড ভিশন থাকা অনেক বেশি গুরুত্বপূর্ণ এবং সেই সাথে পরিশ্রমের মাধ্যমে একটা সুন্দর এবং সকল ক্যারিয়ার আসতে পারে। এই ভিডিওতে কম্পিউটার সাইন্স এবং ইঞ্জিনিয়ারিং থেকে পাস করার পরে এবং পড়াশোনার সময়কালে কিভাবে একজন স্টুডেন্ট তার সময়টাকে সর্বোচ্চ ব্যবহার করতে পারে। কিভাবে ক্যারিয়ারে নিজেকে একটা ভালো অবস্থানে নেয়ার জন্য নিজেকে প্রস্তুত করতে পারে এই বিষয়গুলো নিয়ে আমরা কথা বলেছি। -------------------------------------------------------------- 🚀 Career Crackerz এর আজকের এপিসোডে আমাদের অতিথি  ইন্ড্রাস্টি লিডার  S M Asad Rahman (CTO at Monsterlab)  যিনি প্রায় ১৮ বছর যাবৎ বিভিন্ন কোম্পানির টিম লিডার, সফটওয়্যার ইন্জিনিয়া রুলে কাজ করেছেন। বর্তমানে Monsterlab এর চিফ টেকনোলজি অফিসার হিসেবে ৮০+ ইন্জিনিয়ারদের টিম লিড করছেন। ভাইয়ার অভিজ্ঞতা থেকে আমরা জানার চেষ্টা করবো Humbleness ক্যারিয়ারে কতটুকু help করে? একজন লার্নার কিভাবে তার পেশন খুজে পাবে? এবং কী শিখবে, কতটুকু শিখবে ও কোথা থেকে শিখবে? ইত্যাদি বিষয়গুলো। তাছাড়া আরো জানার চেষ্টা করব। ✅ CSE পড়ে কি শুরু সফটওয়্যার ইন্জিনিয়ারই হওয়া যায়? ✅ কীভাবে সিনিয়রদের সাথে কানেক্ট করবে? ✅ ইউনিভার্সিটির ৪ বছরকে একজন স্টুডেন্ট কিভাবে প্রোপার ইউটিলাইজ করবে? ✅ একজন বিগিনার কীভাবে বুঝবে প্রোগ্রামিং তার জন্য কী না? ✅ ফ্রেশার ডেভেলপারের রিজুমেতে কী কী থাকতে হবে? ✅ ChatGpt/Gemini/Devin কী ডেভেলপারদের Replace করে দিবে? এই সকল বিষয় ছাড়াও আরো অনেক বিষয় নিয়ে আমরা আলোচনা করবো এই এপিসোডে।",
    videoUrl: "https://www.youtube.com/embed/ZtufUJhJzao?si=iH5K9JubtelV1fD9",
  },
  {
    name: "IT ক্যারিয়ারে কাজ করতে যেসব স্কিল লাগবে",
    description:
      "IT ক্যারিয়ারে কাজ করতে যেসব স্কিল লাগবে | Skill at IT Industry ----------------------------------- 🚀 Career Crackerz এর আজকের এপিসোডে আমাদের অতিথি মোস্ট সিনিয়র এবং ইন্ড্রাস্টি লিডার  Monjurul Alam Mamun (Co-founder & CEO at Inument Solution Limited) যিনি ২৫ বছর যাবৎ IT ইন্ড্রাস্টিতে অসামান্য অবদান রেখে চলেছেন।ভাইয়ার অভিজ্ঞতা থেকে আমরা জানার চেষ্টা করবো একজন ডেভলপারের মাইন্ডসেট  কেমন হওয়া উচিত? কোর স্কিলে পাশাপাশি তার কি কি সফ্ট স্কিল প্রয়োজন? এবং কিভাবে ইন্টারভিউ ফোবিয়া দূর করবে পাশাপাশি রিজিউমিতে কি কি পয়েন্টও রাখা উচিত? ✅ কী কী স্কিল থাকলে একজন আইডিয়াল জুনিয়র ডেভেলপার হিসেবে গণ্য করা হবে? ✅ IT ক্যারিয়ারে সফলতা পেতে হলে কেমন মাইন্ডসেট থাকা উচিৎ?  ✅ ইউনিভার্সিটির ৪ বছরকে একজন স্টুডেন্ট কিভাবে প্রোপার ইউটিলাইজ করবে? ✅ একজন বিগিনার কীভাবে বুঝবে প্রোগ্রামিং তার জন্য কী না? ✅ AI যুগে Survive করতে আমাদের কী কী স্কিল থাকা দরকার? ✅ একজন ডেভেলপার কখন বুঝবে সে কোম্পানিতে কাজ করার জন্য প্রস্তুত কি-না? এই সকল বিষয় ছাড়াও আরো অনেক বিষয় নিয়ে আমরা আলোচনা করবো এই এপিসোডে।",
    videoUrl: "https://www.youtube.com/embed/oXke6njj5Mw?si=Ggs6_MNxoyPX1koK",
  },

  // {
  //   name: "CSS Stack Class 10",
  //   description: "Practical CSS tips.",
  //   videoUrl: "https://www.youtube.com/embed/kGW8Al_cga4",
  // },
  // {
  //   name: "CSS Stack Class 10",
  //   description: "Practical CSS tips.",
  //   videoUrl: "https://www.youtube.com/embed/kGW8Al_cga4",
  // },
  // {
  //   name: "CSS Stack Class 10",
  //   description: "Practical CSS tips.",
  //   videoUrl: "https://www.youtube.com/embed/kGW8Al_cga4",
  // },
  // {
  //   name: "CSS Stack Class 10",
  //   description: "Practical CSS tips.",
  //   videoUrl: "https://www.youtube.com/embed/kGW8Al_cga4",
  // },
];

const ITEMS_PER_PAGE = 9;

export default function Page() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  // Pagination logic
  const totalPages = Math.ceil(videos.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentVideos = videos.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="py-10">
      <Container>
        <div className="text-center mb-10">
          <h1 className="text-[#7dd3fc] font-bold text-3xl">
            Learning Path Developer Podcast
          </h1>
          <p className="text-gray-300 max-w-4xl mx-auto mt-5 px-4">
            Start your journey into web development with our CSS learning
            series. Learn everything from basics to advanced techniques, all in
            one place.
          </p>
        </div>

        {/* Selected Video View */}
        {selectedVideo && (
          <div className="flex flex-col lg:flex-row gap-6 mb-10">
            <div className="w-full lg:w-[70%]">
              <div className="aspect-video">
                <iframe
                  src={`${selectedVideo.videoUrl}?autoplay=1`}
                  className="w-full h-full rounded-lg"
                  title={selectedVideo.name}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="mt-4 text-white">
                <h2 className="text-xl font-semibold">{selectedVideo.name}</h2>
                <p className="text-sm text-gray-400">
                  {selectedVideo.description}
                </p>
                <button
                  className="mt-4 text-sm text-blue-400 underline"
                  onClick={() => {
                    setSelectedVideo(null);
                    setCurrentPage(1);
                  }}
                >
                  ← Back to video list
                </button>
              </div>
            </div>

            {/* Sidebar thumbnails */}
            <div className="w-full lg:w-[30%] max-h-[500px] overflow-y-auto pr-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-4">
              {videos
                .filter((video) => video.videoUrl !== selectedVideo.videoUrl)
                .map((video, index) => (
                  <div
                    key={index}
                    className="cursor-pointer hover:opacity-80 transition"
                    onClick={() => setSelectedVideo(video)}
                  >
                    <div className="aspect-video">
                      <iframe
                        src={video.videoUrl}
                        className="w-full h-full rounded-md pointer-events-none"
                        title={video.name}
                        frameBorder="0"
                        allow="encrypted-media"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* Video Grid with Pagination */}
        {!selectedVideo && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
              {currentVideos.map((video, index) => (
                <div
                  key={index}
                  className="cursor-pointer hover:opacity-80 transition"
                  onClick={() => setSelectedVideo(video)}
                >
                  <div className="aspect-video">
                    <iframe
                      src={video.videoUrl}
                      className="w-full h-full rounded-md pointer-events-none"
                      title={video.name}
                      frameBorder="0"
                      allow="encrypted-media"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center items-center gap-4 text-white">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => prev - 1)}
                className={`px-4 py-2 rounded ${
                  currentPage === 1
                    ? "bg-gray-700 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-500"
                }`}
              >
                Previous
              </button>
              <span>
                Page {currentPage} of {totalPages}
              </span>
              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((prev) => prev + 1)}
                className={`px-4 py-2 rounded ${
                  currentPage === totalPages
                    ? "bg-gray-700 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-500"
                }`}
              >
                Next
              </button>
            </div>
          </>
        )}
      </Container>
    </div>
  );
}
