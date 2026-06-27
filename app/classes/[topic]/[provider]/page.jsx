"use client";

import { useState, useEffect, useMemo } from "react";
import Container from "../../../../components/ui/Container";

// ✅ Static class data organized by topic and provider
const classData = {
  html: {
    w3: [
      {
        name: "HTML - Introduction",
        description:
          "This video is a short introduction to HTML. Part of a series of video tutorials to learn HTML for beginners!",
        videoUrl:
          "https://www.youtube.com/embed/it1rTvBcfRg?si=otKNcwSkcFfX1v9b",
      },
      {
        name: "HTML - Editors",
        description:
          "This video is an overview of HTML Editors, and how to edit HTML. Part of a series of video tutorials to learn HTML for beginners!",
        videoUrl:
          "https://www.youtube.com/embed/bBP0ckEln4Y?si=2l-wglzZj_8RrKS1",
      },
      {
        name: "HTML - Elements ",
        description:
          "This video explains what HTML Elements are. Part of a series of video tutorials to learn HTML for beginners!",
        videoUrl:
          "https://www.youtube.com/embed/vIoO52MdZFE?si=PP9YjYzJYopA5pSC",
      },
      {
        name: "HTML - Attributes ",
        description:
          "This video explains what HTML attributes are, and how they work. Part of a series of video tutorials to learn HTML for beginners!",
        videoUrl:
          "https://www.youtube.com/embed/yMX901oVtn8?si=FM85nqUPRwxG4jNO",
      },
      {
        name: "HTML - Headings",
        description:
          "This video is an explanation of Headings in HTML. Part of a series of video tutorials to learn HTML for beginners!",
        videoUrl:
          "https://www.youtube.com/embed/9gHPpwq6IaY?si=1OAfbzFRnUekQMUm",
      },
      {
        name: "HTML - Paragraphs",
        description:
          "This video is an explanation of Paragraphs in HTML. Part of a series of video tutorials to learn HTML for beginners!",
        videoUrl:
          "https://www.youtube.com/embed/qis4kAOThLw?si=XdOT9uu8XqfrQP-_",
      },
      {
        name: "HTML - Styles",
        description:
          "This video is a short introduction to styles in HTML. Part of a series of video tutorials to learn HTML for beginners!",
        videoUrl:
          "https://www.youtube.com/embed/twdNPJfbj_8?si=PqyX_O_0PZJ0clIJ",
      },
      {
        name: "HTML - Formatting ",
        description:
          "This video shows how to format text in HTML.Part of a series of video tutorials to learn HTML for beginners!",
        videoUrl:
          "https://www.youtube.com/embed/7FqQLqNIEY8?si=CZRIRyFZZJQoBwMN",
      },
      {
        name: "HTML - Comments",
        description:
          "This video is a short introduction to comments, and how they work in HTML. Part of a series of video tutorials to learn HTML for beginners!",
        videoUrl:
          "https://www.youtube.com/embed/229HYq40vaA?si=zFU8LWCupB963Enn",
      },
      {
        name: "HTML - Colors",
        description:
          "This video is a short introduction to Colors in HTML. Part of a series of video tutorials to learn HTML for beginners!",
        videoUrl:
          "https://www.youtube.com/embed/zCrolmdqmF8?si=Q9fsCdLeuQQNy0LO",
      },
      {
        name: "HTML - CSS",
        description:
          "This video is an introduction to CSS and how to add it to HTML. Part of a series of video tutorials to learn HTML for beginners!",
        videoUrl:
          "https://www.youtube.com/embed/cZHp-Oozg6I?si=l7N0YXWth-DYQ_rg",
      },
      {
        name: "HTML - Links",
        description:
          "This video explains how what links are and how they work in HTML. Part of a series of video tutorials to learn HTML for beginners!",
        videoUrl:
          "https://www.youtube.com/embed/HA6bByKdAQM?si=yJMCYPV0LmJeLAQf",
      },
      {
        name: "HTML - Images",
        description:
          "This video explains images in HTML, and offers advice on how to use them. Part of a series of video tutorials to learn HTML for beginners!",
        videoUrl:
          "https://www.youtube.com/embed/FmoYRiepmOE?si=FSVFRq_AqMZKw3kE",
      },
      {
        name: "HTML - Tables",
        description:
          "This video explains how what tables are in HTML, and how to build them to show information on websites. Part of a series of video tutorials to learn HTML for beginners!",
        videoUrl:
          "https://www.youtube.com/embed/e62D-aayveY?si=ww68jcfl3jiMUfLd",
      },
      {
        name: "HTML - Lists",
        description:
          "This video explains lists in HTML. Part of a series of video tutorials to learn HTML for beginners!",
        videoUrl:
          "https://www.youtube.com/embed/-QuK8taGLCs?si=qWSKoI6JA6p7-B2Q",
      },
      {
        name: "HTML - Block and Inline",
        description:
          "This video explains how different types of elements are displayed. Specifically block and inline.<br /> Part of a series of video tutorials to learn HTML for beginners!",
        videoUrl:
          "https://www.youtube.com/embed/M4n-WSkehmI?si=IPoAH1f9x55oD5HE",
      },
      {
        name: "HTML - Classes",
        description:
          "This video explains the class attribute is and how to use them in HTML. Part of a series of video tutorials to learn HTML for beginners!",
        videoUrl:
          "https://www.youtube.com/embed/tWIkDOJo0Ts?si=bOXU3GrYh7mmdKXD",
      },
      {
        name: "HTML - Id ",
        description:
          "This video explains the id attribute in HTML and how to use it in HTML, CSS and JavaScript. Part of a series of video tutorials to learn HTML for beginners!",
        videoUrl:
          "https://www.youtube.com/embed/rZ0k516qZmc?si=D4VLsKhPRMfjVV_P",
      },
      {
        name: "HTML - Iframes",
        description:
          "This video explains iframes, and how to use them on your website. Part of a series of video tutorials to learn HTML for beginners!",
        videoUrl:
          "https://www.youtube.com/embed/qP23O70ve7k?si=PBqrdLjs7m7YKYfF",
      },
      {
        name: "HTML - JavaScript",
        description:
          "This video is an introduction to JavaScript and how it works in HTML. Part of a series of video tutorials to learn HTML for beginners!",
        videoUrl:
          "https://www.youtube.com/embed/uSgcWDkwc3U?si=caXUzJ1lrm8a004G",
      },
      {
        name: "HTML - Head  ",
        description:
          "This video explains the head element in HTML. Part of a series of video tutorials to learn HTML for beginners!",
        videoUrl:
          "https://www.youtube.com/embed/WeuVX5x2MJE?si=kZGgf8ODlOM-Appl",
      },
      {
        name: "HTML - Forms",
        description:
          "This video explains forms and how to use them in HTML. Part of a series of video tutorials to learn HTML for beginners!",
        videoUrl:
          "https://www.youtube.com/embed/VLeERv_dR6Q?si=r_GnTAYW4N4h4oIp",
      },
      {
        name: "HTML - Bloopers",
        description:
          "'Bloopers' from the HTML Video tutorial from w3schools.com Part of a series of video tutorials to learn HTML for beginners!",
        videoUrl:
          "https://www.youtube.com/embed/HHxPoYUrSQ0?si=AFJ6A7w7ZG2LHQ0t",
      },
    ],
    stacklearner: [
      {
        name: "1.1 Welcome - Web Design Master Class in Bangla | ওয়েব ডিজাইন মাস্টার ক্লাস",
        description:
          "একদম শুরু থেকে ওয়েব ডিজাইন শেখার কমপ্লিট রিসোর্স পাবেন এই একটি মাত্র প্লেলিস্টে। এই প্লে লিস্টের ভিডিও গুলো রেকর্ড করা হয়েছিল Stack Learner এর Web Boost পেইড প্রোগ্রামের জন্য। এখন এই ভিডিও গুলো সবার জন্য উন্মোক্ত। এই প্লে লিস্টে আমরা যা যা শিখতে পারবো - * Web Design * HTML & CSS * Advanced CSS Concepts * CSS Layouts * CSS Animations * SCSS * Bootstrap 5 Web Design Projects and a lot of other things Github Link: https://github.com/mrhm-dev/web-desig...",
        videoUrl:
          "https://www.youtube.com/embed/1RzKcWEpb5Q?si=Eb3st1yxuTrdQV1f",
      },
      {
        name: "2.1 Environment Setup Introduction | Web Design Master Class in Bangla",
        description:
          "In the next few videos, you will learn how to set up an environment for web design. In this section, we are going to learn the following topics - *Install google chrome * google chrome extensions * install vscode * vscode extensions * install git * install nodejs * install windows terminal  * install postman",
        videoUrl:
          "https://www.youtube.com/embed/MR-gmUDhmcU?si=P4M4L99p8GWPfRFV",
      },
      {
        name: "2.2 Install Google Chrome Browser | গুগল ক্রোম ব্রাউজার ইন্সটল করুন",
        description:
          "In this video, we are going to download and install google chrome on our machine.Github Link: https://github.com/mrhm-dev/web-desig...",
        videoUrl:
          "https://www.youtube.com/embed/o6G5Guhh9Tw?si=TuTUfUZhxHqpXrDE",
      },
      {
        name: "2.3 Chrome Extensions for Web Designers | প্রয়োজনীয় ক্রোম এক্সটেনশন",
        description:
          "In this video, we are going to install common google chrome extensions that will be helpful for a web designer.",
        videoUrl:
          "https://www.youtube.com/embed/TTH0LNmRUYg?si=f1C-chQkSiAlq8e4",
      },
      {
        name: "2.3.1 Issue Fixed - Google Chrome CSS Overview",
        description:
          "পূর্বের ভিডিওতে CSS Overview ফিচারটা Enable করতে অনেকেরই সমস্যা ছিল। এই ভিডিওটি দেখলে আর কোনো সমস্যা থাকবে না। ",
        videoUrl:
          "https://www.youtube.com/embed/BKRGuvIgv4Q?si=4WTfhAV4ghbRby3G",
      },
      {
        name: "2.4 Install Visual Studio Code | VSCode ইন্সটল করুন",
        description:
          "In this video, we are going to install the best code editor for web developers.",
        videoUrl:
          "https://www.youtube.com/embed/PhG4XkHawQ4?si=PvcirTmkB3eI3O9h",
      },
      {
        name: "2.5 Important VSCode Extensions | VSCode এর প্রয়োজনীয় এক্সটেনশনস",
        description:
          "In this video, we are going to install the most popular, common, and necessary vscode extensions",
        videoUrl:
          "https://www.youtube.com/embed/MH5rzixj9OI?si=rEnSTLIPKCiczM3i",
      },
      {
        name: "2.6 Install Git to Your Machine | গিট ইন্সটল করুন",
        description:
          "In this video, we are going to download and install Git on our machine.",
        videoUrl:
          "https://www.youtube.com/embed/_7jGXE17a-U?si=EGARjb09YqmyCz2I",
      },
      {
        name: "2.7 Install NodeJS to Your Machine | Node ইন্সটল করুন",
        description:
          "In this video, we are going to download and install nodejs on our machine.",
        videoUrl:
          "https://www.youtube.com/embed/kCl3tVVvNlY?si=pms1LiopgornsIpw",
      },
      {
        name: "2.8 Install Windows Terminal 1.0 | উইন্ডোজ ব্যবহারকারীদের জন্য খুব গুরুত্বপূর্ণ",
        description:
          "In this video, we are going to install a powerful terminal for windows users that is called Windows Terminal 1.0",
        videoUrl:
          "https://www.youtube.com/embed/HtMXdGbwPFQ?si=Y1ejr1E_w0iD4Qr6",
      },
      {
        name: "2.9 Install Postman - A REST API Client | বেস্ট ফ্রি রেস্ট ক্লাইন্ট",
        description:
          "In this video, we are going to install the most popular, powerful, and free rest API client called Postman.",
        videoUrl:
          "https://www.youtube.com/embed/62lbTrdGk_A?si=bhk1eTnAqRDWDCOo",
      },
      {
        name: "3.1 Introduction of play with HTML and CSS chapter | Web Design Master Class in Bangla",
        description:
          "In the next few videos, you will learn about HTML and CSS. In this chapter, we are going to learn the following topics - #What is HTML #How to write HTML code #HTML attribute #What is CSS #How to style HTML useing CSS #How to link external CSS file #Common CSS selectors #How to link Google Font #Create a section using div ",
        videoUrl:
          "https://www.youtube.com/embed/3B57A0EYDUQ?si=O6OupiPLz4_z0I6z",
      },
      {
        name: "3.2 What is html | এইচটিএমএল কি?",
        description: "In this video, you will learn about what is HTML.",
        videoUrl:
          "https://www.youtube.com/embed/ykMSs4AsGLo?si=OHMLWz8Wybjg0iDm",
      },
      {
        name: "3.3 How to write html code | কিভাবে এইচটিএমএল কোড লিখবেন?",
        description:
          "In this video, you will learn about how to write HTML code.",
        videoUrl:
          "https://www.youtube.com/embed/RCiOk_OyNH0?si=dT2jjT6GjFU4rjh3",
      },
      {
        name: "3.4 HTML attribute | এইচটিএমএল এট্রিবিউট",
        description: "In this video, you will learn about HTML attributes. ",
        videoUrl:
          "https://www.youtube.com/embed/t5FNH0U-jMw?si=oMStOtOFTw-6MWMB",
      },
      {
        name: " HTML এর কিছু টপিক CSS এর ক্লাস এ এড করা হয়েছে",
        description:
          " ক্লাস এর সিরিয়াল ঠিক রাখার জন্য HTML এর কিছু টপিক CSS এর ক্লাস এ এড করা হয়েছে",
      },

      // {
      //   name: "HTML Stack Class 2",
      //   description: "Advanced HTML from Stack Learner.",
      //   videoUrl: "https://www.youtube.com/watch?v=pQN-pnXPaVg",
      // },
      // {
      //   name: "HTML Stack Class 2",
      //   description: "Advanced HTML from Stack Learner.",
      //   videoUrl: "https://www.youtube.com/watch?v=pQN-pnXPaVg",
      // },
    ],
  },
  css: {
    w3: [
      {
        name: "CSS Class 1",
        description: "CSS basics by W3.",
        videoUrl: "https://www.youtube.com/watch?v=1Rs2ND1ryYc",
      },
    ],
    stacklearner: [
      {
        name: "3.5 What is CSS | সিএসএস কি",
        description: "In this video, you will learn about what is CSS",
        videoUrl:
          "https://www.youtube.com/embed/9LU3XL6tYzI?si=ZLfDxSTMLCZfycEC",
      },
      {
        name: "3.6 How to style HTML using CSS | কিভাবে সিএসএস ব্যবহার করে এইচটিএমএল স্টাইল করবেন",
        description:
          "In this video, you will learn about how to style HTML using CSS.",
        videoUrl:
          "https://www.youtube.com/embed/in9JKql82iE?si=1iD9Kpuz3gPToMMK",
      },
      {
        name: "3.7 How to link external CSS file | কিভাবে এক্সটার্নাল সিএসএস ফাইল লিংক করবেন",
        description:
          "In this video, you will learn about how to link external CSS files.",
        videoUrl:
          "https://www.youtube.com/embed/qP6tAsDqwzM?si=GZrmwRg2X2tQFDYy",
      },
      {
        name: "3.8 Common CSS selectors | সিএসএস সিলেক্টর",
        description:
          "In this video, you will learn about common CSS selectors.",
        videoUrl:
          "https://www.youtube.com/embed/nVZhBk3YYFU?si=99egVDF6oDJnMwpp",
      },
      {
        name: "3.9 How to link Google Font | কিভাবে গুগল ফন্ট লিংক করবেন?",
        description: "In this video, you will learn how to link Google Font.",
        videoUrl:
          "https://www.youtube.com/embed/Rb_GY4Z9VtI?si=eGCYcWAqfXf-v7AI",
      },
      {
        name: "3.10 Create a section using div tag | div ট্যাগ ব্যবহার করে সেকশন তৈরি",
        description:
          "In this video, you will learn how to create a section by using div tag.",
        videoUrl:
          "https://www.youtube.com/embed/2Qnpv3eAyPI?si=5jLFRZjUnaMOzhAz",
      },
      {
        name: "4.1 Two Types of HTML Elements | দুই ধরনের এইচটিএমএল এলিমেন্টস",
        description: "Understand two types of elements in HTML5.",
        videoUrl:
          "https://www.youtube.com/embed/jBPFnfIm214?si=gfIWe1GXagQ2VDrw",
      },
      {
        name: "4.2 HTML Inline Elements | এইচটিএমএল ইনলাইন এলিমেন্টস",
        description: "Understand html5 inline elements.",
        videoUrl:
          "https://www.youtube.com/embed/cLUvWS7-prc?si=6-OAX7CvK3Wszx_n",
      },
      {
        name: "4.3 HTML Block Elements | এইচটিএমএল ব্লক এলিমেন্টস",
        description: "Learn html5 block elements.",
        videoUrl:
          "https://www.youtube.com/embed/8qvN7UEc38I?si=aHRk6AflAU6r170O",
      },
      {
        name: "4.4 HTML5 Semantic Elements | এইচটিএমএল ৫ সিম্যান্টিক এলিমেন্টস",
        description: "Learn HTML 5 Semantic Elements",
        videoUrl:
          "https://www.youtube.com/embed/28j5Il7meRQ?si=j5cAPBSNvfsmL67d",
      },
      {
        name: "5.1 Type of CSS Units | সিএসএস এ কি কি ধরনের ইউনিট রয়েছে?",
        description: "Understand CSS Units",
        videoUrl:
          "https://www.youtube.com/embed/TO8xqjNZrWQ?si=Sgwgh_SHMv3BlO8q",
      },
      {
        name: "5.2 CSS Absolute Length Units | অ্যাবসল্যুট লেন্থ ইউনিট",
        description: "Understand CSS Absolute Length Units",
        videoUrl:
          "https://www.youtube.com/embed/tFEIlhYdtnQ?si=uSxSyR1FleBoBLCF",
      },
      {
        name: "5.3 CSS Relative Length Units | রিলেটিভ লেন্থ ইউনিটস",
        description: "Understand CSS Relative Length Units",
        videoUrl:
          "https://www.youtube.com/embed/41HjfoeUdAg?si=Mgpea6d2fxWCUz1p",
      },
      {
        name: "6.1 What is box model | বক্স মডেল কি?",
        description: "In this video we will learn about CSS box model.",
        videoUrl:
          "https://www.youtube.com/embed/9CTO44q92CE?si=E6oaZ3J-pFI1ZhAZ",
      },
      {
        name: "6.2 Box model in action | বক্স মডেল এর কাজ",
        description: "Box model in action | বক্স মডেল এর কাজ",
        videoUrl:
          "https://www.youtube.com/embed/G_qNcfGVwpU?si=Rjj4sABTOICTbN08",
      },
      {
        name: "6.3 Box sizing border box | বক্স-সাইজিং বর্ডার-বক্স",
        description: "Box sizing border box | বক্স-সাইজিং বর্ডার-বক্স",
        videoUrl:
          "https://www.youtube.com/embed/aYWGm1Tmv3M?si=3kkoc_VJ5IEZ5nt8",
      },
      {
        name: "7.1 How to Place Two Divs Side by Side | পাশাপাশি দুইটা ডিভ কিভাবে রাখবো?",
        description:
          "How to Place Two Divs Side by Side | পাশাপাশি দুইটা ডিভ কিভাবে রাখবো?",
        videoUrl:
          "https://www.youtube.com/embed/b5ftua7iNfI?si=Hp6v3Ufz8Bh2470e",
      },
      {
        name: "7.2 Float Creates an Invisible Layers | সিএসএস ফ্লোট একটা ইনভিসিবল লেয়ার তৈরি করে",
        description:
          "Float Creates an Invisible Layers | সিএসএস ফ্লোট একটা ইনভিসিবল লেয়ার তৈরি করে",
        videoUrl:
          "https://www.youtube.com/embed/AFD1eBe-at0?si=sctfDgmVaLwOiPbH",
      },
      {
        name: "7.3 Understand Floats and Clearfix | সিএসএস ফ্লোটস এবং ক্লিয়ারফিক্স",
        description:
          "Understand Floats and Clearfix | সিএসএস ফ্লোটস এবং ক্লিয়ারফিক্স",
        videoUrl:
          "https://www.youtube.com/embed/9KK-kUKiK1s?si=wG6cuxDbL5THEPBK",
      },
      {
        name: "7.4 How to Position Image Inside Text | টেক্সটের মধ্যে কিভাবে ইমেজ রাখবো?",
        description:
          "How to Position Image Inside Text | টেক্সটের মধ্যে কিভাবে ইমেজ রাখবো?",
        videoUrl:
          "https://www.youtube.com/embed/rik9W1S3Y84?si=wQPtOqkPo5Uol2SD",
      },
      {
        name: "8.1 Understand CSS Flexbox | সিএসএস ফ্লেক্সবক্স কি এবং কিভাবে কাজ করে?",
        description:
          "Understand CSS Flexbox | সিএসএস ফ্লেক্সবক্স কি এবং কিভাবে কাজ করে?",
        videoUrl:
          "https://www.youtube.com/embed/fwZdP8Li-fs?si=i22ahEHJS2qluIne",
      },
      {
        name: "8.2 Understand CSS Flex Container - Bangla Tutorial | সিএসএস ফ্লেক্স কন্টাইনার",
        description:
          "Understand CSS Flex Container  | সিএসএস ফ্লেক্স কন্টাইনার।",
        videoUrl:
          "https://www.youtube.com/embed/2577GpqKrKE?si=-kA-SD7mmQas3ear",
      },
      {
        name: "8.3 CSS Flex Container Properties - Bangla Tutorial | সিএসএস ফ্লেক্স কন্টেইনারের প্রোপার্টিজ",
        description:
          "CSS Flex Container Properties - Bangla Tutorial | সিএসএস ফ্লেক্স কন্টেইনারের প্রোপার্টিজ।",
        videoUrl:
          "https://www.youtube.com/embed/zXEd_fqVAWc?si=Xj-OJFZhRfabWdwZ",
      },
      {
        name: "8.4 Explore CSS Flex Items - Bangla Tutorial | সিএসএস ফ্লেক্স আইটেমস | Stack Learner",
        description:
          "Explore CSS Flex Items - Bangla Tutorial | সিএসএস ফ্লেক্স আইটেমস।",
        videoUrl:
          "https://www.youtube.com/embed/UUtEjDb9sfI?si=BOHLkUGdef_9aGqy",
      },
      // {
      //   name: "HTML Stack Class 2",
      //   description: "Advanced HTML from Stack Learner.",
      //   videoUrl: "https://www.youtube.com/watch?v=pQN-pnXPaVg",
      // },
      // {
      //   name: "HTML Stack Class 2",
      //   description: "Advanced HTML from Stack Learner.",
      //   videoUrl: "https://www.youtube.com/watch?v=pQN-pnXPaVg",
      // },
      // {
      //   name: "HTML Stack Class 2",
      //   description: "Advanced HTML from Stack Learner.",
      //   videoUrl: "https://www.youtube.com/watch?v=pQN-pnXPaVg",
      // },
      // {
      //   name: "HTML Stack Class 2",
      //   description: "Advanced HTML from Stack Learner.",
      //   videoUrl: "https://www.youtube.com/watch?v=pQN-pnXPaVg",
      // },
      // {
      //   name: "HTML Stack Class 2",
      //   description: "Advanced HTML from Stack Learner.",
      //   videoUrl: "https://www.youtube.com/watch?v=pQN-pnXPaVg",
      // },
      // {
      //   name: "HTML Stack Class 2",
      //   description: "Advanced HTML from Stack Learner.",
      //   videoUrl: "https://www.youtube.com/watch?v=pQN-pnXPaVg",
      // },
      // {
      //   name: "HTML Stack Class 2",
      //   description: "Advanced HTML from Stack Learner.",
      //   videoUrl: "https://www.youtube.com/watch?v=pQN-pnXPaVg",
      // },
      // {
      //   name: "HTML Stack Class 2",
      //   description: "Advanced HTML from Stack Learner.",
      //   videoUrl: "https://www.youtube.com/watch?v=pQN-pnXPaVg",
      // },
      // {
      //   name: "HTML Stack Class 2",
      //   description: "Advanced HTML from Stack Learner.",
      //   videoUrl: "https://www.youtube.com/watch?v=pQN-pnXPaVg",
      // },
      // {
      //   name: "HTML Stack Class 2",
      //   description: "Advanced HTML from Stack Learner.",
      //   videoUrl: "https://www.youtube.com/watch?v=pQN-pnXPaVg",
      // },
    ],
  },
  gitgithub: {
    anisul: [
      {
        name: "1 : welcome to git and GitHub series",
        description: "  welcome to git and GitHub series by Anisul islam",
        videoUrl:
          "https://www.youtube.com/embed/cPgIpUraWQo?si=eKT5zDUNt1MQUcuk",
      },
      {
        name: "2 : introduction to git and GitHub",
        description:
          "In this video, I will explain why do we need a version control system such as git. I will also explain what is the purpose of GitHub. In the end, I will explain the key differences between git and GitHub.",
        videoUrl:
          "https://www.youtube.com/embed/ulTs4vqOzyo?si=SaaB4Gcke7QvYkXc",
      },
      {
        name: "3 : Commands for Mac/Windows terminals",
        description:
          "Here is the link for the Windows command line:    • Windows Command Line Crash Course in Bangla  Basic commands for Mac and Windows terminals.",
        videoUrl:
          "https://www.youtube.com/embed/w2BAxjngwKA?si=4_l7b_djLlbUJmYE",
      },
      {
        name: "4 : git setup and configuration (part-1)",
        description:
          "windows command-line crash course:    • Windows Command Line Crash Course in Bangla  In this video, I will explain how to set git on your system. I will also explain how to do the git configuration.",
        videoUrl:
          "https://www.youtube.com/embed/vj5-nkhTRbo?si=o4Ujl6Sv5RZjsGw3",
      },
      {
        name: "5 : git setup and configuration (part-2)",
        description: " git setup and configuration (part-2)",
        videoUrl:
          "https://www.youtube.com/embed/2GsvUiCi3K4?si=31Mep20LFp_tyEh_",
      },
      {
        name: "6 : How to create and setup SSH key",
        description:
          "In this video, I will demonstrate how to collaborate on GitHub with a practical demonstration.",
        videoUrl:
          "https://www.youtube.com/embed/poewMpeBQmU?si=tHyG7EPg-x04vKy9",
      },
      {
        name: "7 : how to create git folder",
        description:
          "🔴 windows command-line crash course:    • Windows Command Line Crash Course in Bangla  ✅In this video, I will explain how to create a git folder and add new files to the git folder.  ",
        videoUrl:
          "https://www.youtube.com/embed/oa6viOCTEeM?si=mRQka_Tunqp08JKt",
      },
      {
        name: "8 : how to add files in staging area",
        description:
          "✅In this video, I will explain how to add git files in the staging area and how to remove git files from the staging area. ",
        videoUrl:
          "https://www.youtube.com/embed/IDhgZX4esQQ?si=tvtpHk_qmrLS7PjY",
      },
      {
        name: "9 : git & GitHub practice-1",
        description:
          "✅In this video, we will practice whatever we learnt from the last few lessons. we will review how to create a git directory, add files in a git directory, stagging files in a git directory. We will also review how to restore git files and track the modified files. ",
        videoUrl:
          "https://www.youtube.com/embed/jSj-GF-utls?si=Co6doT0sgqmbOT4H",
      },
      {
        name: "10 : how to do git commit & reset commit",
        description:
          "✅In this video, I will explain how to make a git commit and how to remove or reset a git commit.",
        videoUrl:
          "https://www.youtube.com/embed/gmBKbxKGcn8?si=b-xmvvtTx6bl5zIE",
      },
      {
        name: "11 : Write better commit messages",
        description:
          "✅ In this video, I will explain how to make better git commit messages and descriptions.",
        videoUrl:
          "https://www.youtube.com/embed/_6Wqq7i63bI?si=C7vmbONc9c-R7LQq",
      },
      {
        name: "11 : git head and undo (theory)",
        description:
          "✅In this video, I will explain how to do undo in git. I will also explain details about git HEAD.",
        videoUrl:
          "https://www.youtube.com/embed/xUNsecljvog?si=KWf_7UqRi3yWnCSw",
      },
      {
        name: "12 : git head and undo (practical)",
        description:
          "🔴 windows command-line crash course:    • Windows Command Line Crash Course in Bangla  ✅In this video, I will explain how to do undo in git. I will also explain details about git HEAD.",
        videoUrl:
          "https://www.youtube.com/embed/rEoeC-HBqws?si=zl2Lh_5CZtFbNELv",
      },
      {
        name: "13 : what is gitignore file",
        description:
          "🔴  check my git documentation: https://github.com/anisul-Islam/githu... ✅In this video, I will explain what is gitignore file is and why it is so important for us. I will also show you how to create a gitignore file and add the things in it.",
        videoUrl:
          "https://www.youtube.com/embed/CKla6oWTezM?si=xAme_3VQN8CLkgU8",
      },
      {
        name: "14 : Git Aliases | git command shortcut",
        description:
          "In this video, I will show how to set shortcuts for git commands.",
        videoUrl:
          "https://www.youtube.com/embed/khh7rh-fl50?si=nsoqd3yLbV-9D3pF",
      },
      {
        name: "15 : GitHub repository and commit",
        description:
          "✅  In this video, I will show you how to use GitHub. I will show you how to create a GitHub repository, add readme files and make commits in your GitHub repo.🔴  check my git documentation: https://github.com/anisul-Islam/githu...",
        videoUrl:
          "https://www.youtube.com/embed/HRVNOjl9e5U?si=sGl0KuXNUP_k7-Wm",
      },
      {
        name: "16 : Markdown crash course",
        description:
          "👉 In this video, I will tell you everything you need to know about markdown language. I will start with what is markdown, why do we need markdown, how to use markdown and go deeper throughout this video. 🔴 Find the markdown Code in GitHub - https://github.com/anisul-Islam/readm...",
        videoUrl:
          "https://www.youtube.com/embed/bl0-DTgh-mw?si=Ghc82_i5-fozIEnX",
      },
      {
        name: "17 : connecting local and remote repo",
        description:
          "✅ In this video, I will show you how to connect a local and remote repository. 🔴  check my git documentation: https://github.com/anisul-Islam/githu...",
        videoUrl:
          "https://www.youtube.com/embed/sLX2YWYpkAc?si=1LOzA02umSLx9330",
      },
      {
        name: "18 : git pull and push",
        description:
          "✅  In this video, I will show you how to push your changes in GitHub and pull changes into your local repository from a remote repository. 🔴  check my git documentation: https://github.com/anisul-Islam/githu...",
        videoUrl:
          "https://www.youtube.com/embed/UXEoCfYwI1Q?si=eL_QZgyO42Iclc8s",
      },
      {
        name: "22 : branching, merging and pull request",
        description:
          "✅  In this video, I will explain what branching is and the need for branching. I will show how to do branching and merging in GitHub. 🔴  check my git documentation: https://github.com/anisul-Islam/githu...",
        videoUrl:
          "https://www.youtube.com/embed/3k8Bq_usPsk?si=ZOSYY_Vmp-jn_vMa",
      },
      {
        name: "23 : branching and merging locally",
        description:
          "✅  In this video, I will show you how to branch and merge locally. 🔴  check my git documentation: https://github.com/anisul-Islam/githu...",
        videoUrl:
          "https://www.youtube.com/embed/AhBxGYzdWI0?si=HMQil8x5M7Jq3-OO",
      },
      {
        name: "24 : git & GitHub practice-2",
        description:
          "✅  In this video, I will show you how to create a local and remote repository. I will also show you how to make a git commit and push changes in the remote repository. Finally, we will see how to pull changes from the remote repository. 🔴  check my git documentation: https://github.com/anisul-Islam/githu...",
        videoUrl:
          "https://www.youtube.com/embed/IHVzseHh3Bo?si=rkl9Qeo6fkX3lDKw",
      },
      {
        name: "25 : GitHub issues",
        description:
          "✅  In this video, I will explain GitHub issues and why we need them. I will also show how to open and close GitHub Issues. 🔴  check my git documentation: https://github.com/anisul-Islam/githu...",
        videoUrl:
          "https://www.youtube.com/embed/E5HFlpx7QP4?si=B0jdu92dl0cMb8Ku",
      },
      {
        name: "26 : fast forward merge",
        description:
          "In this video, I will explain what a 2-way merge or fast-forward merge is with a practical demonstration.",
        videoUrl:
          "https://www.youtube.com/embed/FbX_MpqSLfc?si=OK_MZ9GBw2LQwZwH",
      },
      {
        name: "27 : 3-way merge",
        description:
          "In this video, I will explain what is 3-way merge is with a practical demonstration.",
        videoUrl:
          "https://www.youtube.com/embed/dPSB-UhioJw?si=HGWl--H07SizEpsO",
      },
      {
        name: "28 : resolve merge conflict on git",
        description:
          "In this video, I will explain what is merge conflict is and how to resolve to merge conflict on git with a practical demonstration.",
        videoUrl:
          "https://www.youtube.com/embed/LapVNu99qU8?si=-6KsITi4q5Pw6x4t",
      },
      {
        name: "29 : resolve merge conflict on GitHub",
        description:
          "In this video, I will explain a merge conflict and how to resolve a merge conflict on GitHub with a practical demonstration.",
        videoUrl:
          "https://www.youtube.com/embed/KmbNiB6jbHo?si=CTTocl1t5cZa0xWm",
      },
      {
        name: "30 : fork & clone - contribute on others project",
        description:
          "In this video, I will show how to contribute to other open-source projects or repositories with a practical demonstration.",
        videoUrl:
          "https://www.youtube.com/embed/FH0wptOLukk?si=VOm9Ab2WuEizz2Nn",
      },
      {
        name: "31 : how to do a collaboration on GitHub",
        description:
          "In this video, I will show how to how to do collaborate on GitHub with a practical demonstration.",
        videoUrl:
          "https://www.youtube.com/embed/nS9QbJt4KaQ?si=qVj1r5q7dXFvueJ9",
      },
      {
        name: "32 : publish your website on github",
        description: "  publish your website on github",
        videoUrl:
          "https://www.youtube.com/embed/cI-B554zaRw?si=6IKtlkK777W8E1xv",
      },
      {
        name: " 33 : github series finale",
        description:
          "🔴  This is the last video of this series. I hope you have enjoyed and learnt a lot. Try hard, practice more. See you in the next series. ",
        videoUrl:
          "https://www.youtube.com/embed/OgPm5Hzc4zs?si=fNyJoUAdwh8WQL-d",
      },
    ],
    lws: [
      {
        name: "Crash Course - সহজ বাংলায় Git & GitHub - Bangla ( বাংলা ) Tutorial",
        description:
          "Git একটা Version Control Mechanism. মানে এটা সবসময় আমাদের file system এর দিকে নজর রাখে এবং কোন change হলে সেটার record রাখে। শুধু তাই নয়, প্রতিটা change এর আগের এবং পরের version ও আলাদা আলাদা করে track রেখে দেয় git. আর GitHub হলো এই সব changes এবং version এর cloud host. অনেকেই মনে করেন Git এবং GithHub একই জিনিস। কিন্তু আসলে তা সঠিক নয়। git যদি coffee হয় তাহলে  GitHub হলো coffee shop!একজন Programmer হিসেবে যতো tool নিয়েই কাজ করেন না কেন, তার মধ্যে সবচেয়ে গুরুত্বপূর্ণ tool হলো git! তাই Beginners দের জন্য git এর এই Crash Course টি নিয়ে আসলাম। এই Tutorial এ আমি git এবং GitHub কি, Installation, Initilization, Cloning, Status, Add, Reset, Commit, Remove, Branching, Merging, Push, Pull & Fetch নিয়ে আলোচনা করেছি। এগুলোই মূলত একজন Programmer এর জানা প্রয়োজন হয়। আশা করি ভিডিওটি আপনাদের ভালো লাগবে।",
        videoUrl:
          "https://www.youtube.com/embed/oe21Nlq8GS4?si=047uhYSQK-ZEgja-",
      },
    ],
    stacklearner: [
      {
        name: "1: Basic Uses of Git For Beginners Bangla Tutorial Video",
        description:
          "The full form of git is global information tracker. It is a distributed version control system for tracking changes in computer files and coordinating work on those files among multiple people(Wikipedia). Primarily used for source code management in software development but it can be used to keep track of changes in any set of files. Created by  Linus Torvalds in 2005 for the development of the Linux kernel. Git thinks about its data. In git nearly every operation is local. It’s impossible to change the contents of any file or directory without Git knowing about it. When you do actions in Git, nearly all of them only add data to the Git database. In git committed means that the data is safely stored in the database.Modified means that you have changed the file but have not committed it to your database yet. Staged means that you have marked a modified file in its current version to go into your next commit snapshot.",
        videoUrl:
          "https://www.youtube.com/embed/C4lNdjgYoi8?si=zab6lPBRmuwp0cd_",
      },
      {
        name: "2-9: Basic Usage of Git For Beginners Bangla Tutorial Video - 2",
        description:
          "The full form of git is global information tracker. It is a distributed version control system for tracking changes in computer files and coordinating work on those files among multiple people(Wikipedia). Primarily used for source code management in software development but it can be used to keep track of changes in any set of files. Created by  Linus Torvalds in 2005 for the development of the Linux kernel. Git thinks about its data. In git nearly every operation is local. It’s impossible to change the contents of any file or directory without Git knowing about it. When you do actions in Git, nearly all of them only add data to the Git database. In git committed means that the data is safely stored in the database.Modified means that you have changed the file but have not committed it to your database yet. Staged means that you have marked a modified file in its current version to go into your next commit snapshot.",
        videoUrl:
          "https://www.youtube.com/embed/hTFSeWgT7jg?si=hjR3-bbifsLFI0cF",
      },
      {
        name: "3-9: Github introduction For Beginners Bangla Tutorial Video",
        description:
          "The full form of git is global information tracker. It is a distributed version control system for tracking changes in computer files and coordinating work on those files among multiple people(Wikipedia). Primarily used for source code management in software development but it can be used to keep track of changes in any set of files. Created by  Linus Torvalds in 2005 for the development of the Linux kernel. Git thinks about its data. In git nearly every operation is local. It’s impossible to change the contents of any file or directory without Git knowing about it. When you do actions in Git, nearly all of them only add data to the Git database. In git committed means that the data is safely stored in the database.Modified means that you have changed the file but have not committed it to your database yet. Staged means that you have marked a modified file in its current version to go into your next commit snapshot.",
        videoUrl:
          "https://www.youtube.com/embed/-IpyFnFkAPc?si=GX31ZVKHNEW7jmKx",
      },
      {
        name: "4-9: What is Branch in Git For All Bangla Tutorial Video",
        description:
          "The full form of git is global information tracker. It is a distributed version control system for tracking changes in computer files and coordinating work on those files among multiple people(Wikipedia). Primarily used for source code management in software development but it can be used to keep track of changes in any set of files. Created by  Linus Torvalds in 2005 for the development of the Linux kernel. Git thinks about its data. In git nearly every operation is local. It’s impossible to change the contents of any file or directory without Git knowing about it. When you do actions in Git, nearly all of them only add data to the Git database. In git committed means that the data is safely stored in the database.Modified means that you have changed the file but have not committed it to your database yet. Staged means that you have marked a modified file in its current version to go into your next commit snapshot.",
        videoUrl:
          "https://www.youtube.com/embed/Mf2rhvV667I?si=AoTLjKOmE20rEem7",
      },
      {
        name: "5-9: What is Merge Conflict in Git Bangla Tutorial Video",
        description:
          "The full form of git is global information tracker. It is a distributed version control system for tracking changes in computer files and coordinating work on those files among multiple people(Wikipedia). Primarily used for source code management in software development but it can be used to keep track of changes in any set of files. Created by  Linus Torvalds in 2005 for the development of the Linux kernel. Git thinks about its data. In git nearly every operation is local. It’s impossible to change the contents of any file or directory without Git knowing about it. When you do actions in Git, nearly all of them only add data to the Git database. In git committed means that the data is safely stored in the database.Modified means that you have changed the file but have not committed it to your database yet. Staged means that you have marked a modified file in its current version to go into your next commit snapshot.",
        videoUrl:
          "https://www.youtube.com/embed/sLDQLeXYaFg?si=d0VmVv1VJGnI-3D4",
      },
      {
        name: "6-9: What is Fork And Pull Request in Git Bangla Tutorial Video",
        description:
          "The full form of git is global information tracker. It is a distributed version control system for tracking changes in computer files and coordinating work on those files among multiple people(Wikipedia). Primarily used for source code management in software development but it can be used to keep track of changes in any set of files. Created by  Linus Torvalds in 2005 for the development of the Linux kernel. Git thinks about its data. In git nearly every operation is local. It’s impossible to change the contents of any file or directory without Git knowing about it. When you do actions in Git, nearly all of them only add data to the Git database. In git committed means that the data is safely stored in the database.Modified means that you have changed the file but have not committed it to your database yet. Staged means that you have marked a modified file in its current version to go into your next commit snapshot.",
        videoUrl:
          "https://www.youtube.com/embed/fGEKHpSHCHY?si=HNteUBi1sK4Qj0ae",
      },
      {
        name: "7-9: How to Use Visual Studio Code For Beginners Bangla Video",
        description:
          "The full form of git is global information tracker. It is a distributed version control system for tracking changes in computer files and coordinating work on those files among multiple people(Wikipedia). Primarily used for source code management in software development but it can be used to keep track of changes in any set of files. Created by  Linus Torvalds in 2005 for the development of the Linux kernel. Git thinks about its data. In git nearly every operation is local. It’s impossible to change the contents of any file or directory without Git knowing about it. When you do actions in Git, nearly all of them only add data to the Git database. In git committed means that the data is safely stored in the database.Modified means that you have changed the file but have not committed it to your database yet. Staged means that you have marked a modified file in its current version to go into your next commit snapshot.",
        videoUrl:
          "https://www.youtube.com/embed/wK9IAw7nsxU?si=OhaYRxNFgCpN1Dcs",
      },
      {
        name: "8-9: Use Git with VSCode For Beginners Bangla Tutorial Video",
        description:
          "The full form of git is global information tracker. It is a distributed version control system for tracking changes in computer files and coordinating work on those files among multiple people(Wikipedia). Primarily used for source code management in software development but it can be used to keep track of changes in any set of files. Created by  Linus Torvalds in 2005 for the development of the Linux kernel. Git thinks about its data. In git nearly every operation is local. It’s impossible to change the contents of any file or directory without Git knowing about it. When you do actions in Git, nearly all of them only add data to the Git database. In git committed means that the data is safely stored in the database.Modified means that you have changed the file but have not committed it to your database yet. Staged means that you have marked a modified file in its current version to go into your next commit snapshot.",
        videoUrl:
          "https://www.youtube.com/embed/t_1z65j0MY8?si=FvATM1Gw3W51J5nb",
      },
      {
        name: "9-9: How to Use Git Kraken For Git and Github Bangla Tutorial",
        description:
          "The full form of git is global information tracker. It is a distributed version control system for tracking changes in computer files and coordinating work on those files among multiple people(Wikipedia). Primarily used for source code management in software development but it can be used to keep track of changes in any set of files. Created by  Linus Torvalds in 2005 for the development of the Linux kernel. Git thinks about its data. In git nearly every operation is local. It’s impossible to change the contents of any file or directory without Git knowing about it. When you do actions in Git, nearly all of them only add data to the Git database. In git committed means that the data is safely stored in the database.Modified means that you have changed the file but have not committed it to your database yet. Staged means that you have marked a modified file in its current version to go into your next commit snapshot.",
        videoUrl:
          "https://www.youtube.com/embed/AHEZlnJ4FCc?si=ofwShwoPB8ojY3Rt",
      },
      {
        name: "Git Hacks: Format Your Commit Message | কিভাবে কমিট মেসেজ লিখব?",
        description:
          "সিম্পল হ্যাকঃ কিভাবে সুন্দর করে স্ট্যান্ডার্ড ভাবে গিট কমিট মেসেজ লিখবেন?",
        videoUrl:
          "https://www.youtube.com/embed/0oj46eH5h0A?si=ucUz6nUE33LBUY71",
      },
    ],
  },
  javascript: {
    anisul: [
      {
        name: "1 : The Ultimate JavaScript Roadmap ",
        description:
          "👉 In this video, I will discuss the ultimate javascript roadmap you need for a smooth and strong start.🔴 Find All the JavaScript Code on GitHub - https://github.com/anisul-Islam/javas... ",
        videoUrl:
          "https://www.youtube.com/embed/xpP5L1NuMQU?si=Fu1fOlPF188Q80hI",
      },
      {
        name: "2 : how to show output in JavaScript",
        description:
          "👉 In this video, I will discuss the ultimate javascript roadmap you need for a smooth and strong start.🔴 Find All the JavaScript Code on GitHub - https://github.com/anisul-Islam/javas... ",
        videoUrl:
          "https://www.youtube.com/embed/fBhxs9OHxtY?si=DXECVeNkZCK7Z9uR",
      },
      {
        name: "3 : how to add JavaScript in html",
        description:
          "Find All the JavaScript Code on GitHub - https://github.com/anisul-Islam/javas... ",
        videoUrl:
          "https://www.youtube.com/embed/HvpmqQ53Rjw?si=aXk9pmgavhazKcfP",
      },
      {
        name: "4 : Keyword, Data Type and comment",
        description:
          "Find All the JavaScript Code on GitHub - https://github.com/anisul-Islam/javas...",
        videoUrl:
          "https://www.youtube.com/embed/7AA6H_NBiL0?si=jCjaYgpYv8EVJdFY",
      },
      {
        name: "5 : how to declare variables in JavaScript",
        description:
          "Find All the JavaScript Code on GitHub - https://github.com/anisul-Islam/javas...",
        videoUrl:
          "https://www.youtube.com/embed/9fLfvLAIajA?si=b4MCVD7GsEornWIb",
      },
      {
        name: "6 : var vs let vs const and run with node",
        description:
          "Find All the JavaScript Code on GitHub - https://github.com/anisul-Islam/javas...",
        videoUrl:
          "https://www.youtube.com/embed/dzr3mxTKJ74?si=KUJvrTZxvJwxQqxI",
      },
      {
        name: "7 : personal budget tracker app phase 1,2",
        description:
          "Find All the JavaScript Code on GitHub - https://github.com/anisul-Islam/javas...",
        videoUrl:
          "https://www.youtube.com/embed/54z0EHsa3Es?si=q_T2kOVu7nduvSRd",
      },
      {
        name: "8 : number method | toFixed | toPrecision",
        description:
          "Find All the JavaScript Code on GitHub - https://github.com/anisul-Islam/javas...",
        videoUrl:
          "https://www.youtube.com/embed/uBEKIMJx50E?si=iONhuNKXl2ekmZWp",
      },
      {
        name: "9 : how to add or concatenate strings",
        description:
          "Find All the JavaScript Code on GitHub - https://github.com/anisul-Islam/javas...",
        videoUrl:
          "https://www.youtube.com/embed/S09l_YSOp80?si=Y-hadAvTnpCo4ysV",
      },
      {
        name: "10 : Library functions for string",
        description:
          "🔴 Task-2 Solutions: https://github.com/anisul-Islam/javas...🔴 Find All the JavaScript Code in GitHub - https://github.com/anisul-Islam/javas... ",
        videoUrl:
          "https://www.youtube.com/embed/w-HOpmckKF8?si=QVyBAOxnD0NQ2HpS",
      },
      {
        name: "11 : task - peronsal tracker phase 3",
        description:
          "🔴 Find All the JavaScript Code on GitHub - https://github.com/anisul-Islam/javas... ",
        videoUrl:
          "https://www.youtube.com/embed/OegIwq3NqLY?si=EarvKWNi3ty2DIG0",
      },
      {
        name: "12 : Arithmetic and assignment operator",
        description:
          "🔴 Find All the JavaScript Code on GitHub - https://github.com/anisul-Islam/javas... ",
        videoUrl:
          "https://www.youtube.com/embed/edlzr3HeGx0?si=BnMjjoAMgP6ak1QJ",
      },
      // {
      //   name: "HTML Stack Class 2",
      //   description: "Advanced HTML from Stack Learner.",
      //   videoUrl: "https://www.youtube.com/watch?v=pQN-pnXPaVg",
      // },
      // {
      //   name: "HTML Stack Class 2",
      //   description: "Advanced HTML from Stack Learner.",
      //   videoUrl: "https://www.youtube.com/watch?v=pQN-pnXPaVg",
      // },
      // {
      //   name: "HTML Stack Class 2",
      //   description: "Advanced HTML from Stack Learner.",
      //   videoUrl: "https://www.youtube.com/watch?v=pQN-pnXPaVg",
      // },
      // {
      //   name: "HTML Stack Class 2",
      //   description: "Advanced HTML from Stack Learner.",
      //   videoUrl: "https://www.youtube.com/watch?v=pQN-pnXPaVg",
      // },
      // {
      //   name: "HTML Stack Class 2",
      //   description: "Advanced HTML from Stack Learner.",
      //   videoUrl: "https://www.youtube.com/watch?v=pQN-pnXPaVg",
      // },
      // {
      //   name: "HTML Stack Class 2",
      //   description: "Advanced HTML from Stack Learner.",
      //   videoUrl: "https://www.youtube.com/watch?v=pQN-pnXPaVg",
      // },
      // {
      //   name: "HTML Stack Class 2",
      //   description: "Advanced HTML from Stack Learner.",
      //   videoUrl: "https://www.youtube.com/watch?v=pQN-pnXPaVg",
      // },
      // {
      //   name: "HTML Stack Class 2",
      //   description: "Advanced HTML from Stack Learner.",
      //   videoUrl: "https://www.youtube.com/watch?v=pQN-pnXPaVg",
      // },
      // {
      //   name: "HTML Stack Class 2",
      //   description: "Advanced HTML from Stack Learner.",
      //   videoUrl: "https://www.youtube.com/watch?v=pQN-pnXPaVg",
      // },
      // {
      //   name: "HTML Stack Class 2",
      //   description: "Advanced HTML from Stack Learner.",
      //   videoUrl: "https://www.youtube.com/watch?v=pQN-pnXPaVg",
      // },
    ],
    lws: [
      {
        name: "JavaScript LWS Class 1",
        description: "JS basics from LWS.",
        videoUrl: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
      },
    ],
    stacklearner: [
      {
        name: "JavaScript Stack Class 1",
        description: "JS basics from Stack Learner.",
        videoUrl: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
      },
    ],
  },
  reactjs: {
    anisul: [
      {
        name: "JavaScript Class 1",
        description: "JavaScript intro from Anisul Islam.",
        videoUrl: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
      },
    ],
    lws: [
      {
        name: "JavaScript LWS Class 1",
        description: "JS basics from LWS.",
        videoUrl: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
      },
    ],
    stacklearner: [
      {
        name: "JavaScript Stack Class 1",
        description: "JS basics from Stack Learner.",
        videoUrl: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
      },
    ],
  },
  nodejs: {
    anisul: [
      {
        name: "JavaScript Class 1",
        description: "JavaScript intro from Anisul Islam.",
        videoUrl: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
      },
    ],
    lws: [
      {
        name: "JavaScript LWS Class 1",
        description: "JS basics from LWS.",
        videoUrl: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
      },
    ],
    stacklearner: [
      {
        name: "JavaScript Stack Class 1",
        description: "JS basics from Stack Learner.",
        videoUrl: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
      },
    ],
  },
  mongodb: {
    anisul: [
      {
        name: "JavaScript Class 1",
        description: "JavaScript intro from Anisul Islam.",
        videoUrl: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
      },
    ],
    lws: [
      {
        name: "JavaScript LWS Class 1",
        description: "JS basics from LWS.",
        videoUrl: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
      },
    ],
    stacklearner: [
      {
        name: "JavaScript Stack Class 1",
        description: "JS basics from Stack Learner.",
        videoUrl: "https://www.youtube.com/watch?v=W6NZfCO5SIk",
      },
    ],
  },
};

// ✅ Improved YouTube Video ID Extractor
function getYouTubeVideoId(url) {
  try {
    const parsedUrl = new URL(url);
    const hostname = parsedUrl.hostname;

    if (hostname === "youtu.be") {
      return parsedUrl.pathname.slice(1);
    }

    if (parsedUrl.pathname.startsWith("/embed/")) {
      return parsedUrl.pathname.split("/embed/")[1];
    }

    if (parsedUrl.searchParams.has("v")) {
      return parsedUrl.searchParams.get("v");
    }

    const match = url.match(
      /(?:\/shorts\/|\/watch\?v=|\/embed\/|youtu\.be\/)([a-zA-Z0-9_-]{11})/,
    );
    return match ? match[1] : null;
  } catch (err) {
    return null;
  }
}

export default function Page({ params }) {
  const { topic, provider } = params;

  const topicData = useMemo(
    () => classData?.[topic]?.[provider] ?? null,
    [topic, provider],
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useMemo(() => {
    if (!topicData?.length) return;

    setSelectedVideo(topicData[0]);
    setCurrentIndex(0);
  }, [topicData]);

  if (!topicData) {
    return (
      <div className="p-4 text-red-500">
        No class found for topic: <strong>{topic}</strong> & provider:{" "}
        <strong>{provider}</strong>
      </div>
    );
  }

  const handleNext = () => {
    if (currentIndex < topicData.length - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      setSelectedVideo(topicData[newIndex]);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      setSelectedVideo(topicData[newIndex]);
    }
  };

  const videoId = getYouTubeVideoId(selectedVideo?.videoUrl);

  return (
    <Container>
      <div className="my-10">
        <h1 className="text-[#7dd3fc] font-semibold text-md text-center rounded shadow-md p-2 w-[13rem] mx-auto bg-gray-700">
          Learn {topic.toUpperCase()} - {provider.toUpperCase()}
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 p-6 my-10">
        {/* Video Player Section */}
        <div className="w-full lg:w-3/4">
          <div className="aspect-video mb-4 rounded-2xl overflow-hidden shadow-2xl">
            {videoId ? (
              <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title={selectedVideo?.name}
                className="w-full h-full"
              />
            ) : (
              <p className="text-red-500 p-4 text-center bg-gray-800 rounded">
                Invalid or unsupported video link.
              </p>
            )}
          </div>

          {/* Prev/Next Buttons */}
          <div className="flex justify-center gap-4 mt-4">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
              aria-label="Previous video"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex === topicData.length - 1}
              className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
              aria-label="Next video"
            >
              Next
            </button>
          </div>
          <div className="my-10">
            <h2 className="text-xl text-white font-bold">
              {selectedVideo?.name}
            </h2>
            <p className="text-gray-300">{selectedVideo?.description}</p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-1/4 text-white space-y-4">
          <div className="mt-6">
            <h3 className="text-lg font-semibold border-b border-gray-600 pb-1">
              Related Classes
            </h3>
            <div className="mt-2 max-h-96 overflow-y-auto space-y-2">
              {topicData.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSelectedVideo(item);
                    setCurrentIndex(index);
                  }}
                  className={`block w-full text-left px-3 py-2 rounded hover:bg-gray-700 ${
                    selectedVideo?.videoUrl === item.videoUrl
                      ? "bg-gray-900 font-bold"
                      : "bg-gray-800"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
