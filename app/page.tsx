// app/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useRef } from "react";
import MobileAdPlaceholder from "./components/MobileAdPlaceholder";

declare global {
  interface Window {
    ml?: (...args: any[]) => void;
  }
}

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [tone, setTone] = useState("");
  const [length, setLength] = useState("");
  const [style, setStyle] = useState("");
  const [result, setResult] = useState("");
  const [audience, setAudience] = useState("");
  const [platform, setPlatform] = useState("");
  const [contentType, setContentType] = useState("");
  const maxCharacters = 600;
  const [showGuide, setShowGuide] = useState(false);
  const [mlReady, setMlReady] = useState(false);
  const outputRef = useRef<HTMLDivElement>(null);

  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

const toggleFAQ = (index: number) => {
  setOpenFAQ(openFAQ === index ? null : index);
};

useEffect(() => {
  const interval = setInterval(() => {
    if (typeof window !== "undefined" && typeof window.ml === "function") {
      setMlReady(true);
      clearInterval(interval);
    }
  }, 300);

  // ⏱ Increase total wait time to 10 seconds
  const timeout = setTimeout(() => clearInterval(interval), 10000);

  return () => {
    clearInterval(interval);
    clearTimeout(timeout);
  };
}, []);

useEffect(() => {
  if (result && outputRef.current) {
    outputRef.current.scrollIntoView({ behavior: 'smooth' });
  }
}, [result]);


  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  if (!prompt.trim()) {
    setResult("Please enter a prompt first.");
    return;
  }

  let instructions = [];

  if (tone) instructions.push(`Use a ${tone.toLowerCase()} tone`);
  if (length) instructions.push(`Keep it ${length.toLowerCase()} in length`);
  if (style) instructions.push(`Make it ${style.toLowerCase()}`);
  if (audience) instructions.push(`Tailor it for ${audience.toLowerCase()}`);
  if (platform) instructions.push(`Optimize it for ${platform.toLowerCase()}`);
  if (contentType) instructions.push(`Format it as a ${contentType.toLowerCase()}`);

// Capitalize first letter if not already
const trimmedPrompt = prompt.trim();
const formattedPrompt =
  trimmedPrompt.charAt(0).toUpperCase() + trimmedPrompt.slice(1);

const endsWithPunctuation = /[.!?]$/.test(formattedPrompt);
const finalOutput =
  formattedPrompt +
  (instructions.length > 0
    ? `${endsWithPunctuation ? "" : "."}\n\n- ${instructions.join("\n- ")}`
    : "");

  setResult(finalOutput);
  };

       
  const handleCopy = () => {
    if (result) {
      navigator.clipboard.writeText(result);
      alert("Prompt copied to clipboard!");
    }
  };
  
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 py-8">
      <div className="flex flex-col items-center mb-6">
      <img src="/logos/logo.png" alt="Free AI Prompt Helper Logo" className="w-36 h-36 mb-2" />
      <h1
      className="text-4xl sm:text-5xl font-bold text-center text-white"
      style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)' }}
      >
      Free AI Prompt Helper
    </h1>
  </div>

      
{/* --- Ad Placeholder --- */}
<div className="w-full max-w-xl my-4 p-3 bg-gray-200 text-center text-gray-600 rounded-md">
  {/* This will be replaced with an actual ad block */}
  Ad Placeholder – Your support keeps this tool free!
</div>
    
<form
  onSubmit={handleSubmit}
  className="bg-white p-6 pt-20 rounded-xl shadow-md w-full max-w-xl space-y-4 text-center relative"
>
  {/* === Top Button Row: Share & Prompt Help === */}
  <div className="absolute top-4 left-0 right-0 px-6 flex justify-between mb-6">
    <button
      type="button"
      onClick={() => {
        const url = window.location.origin;
        navigator.clipboard.writeText(url);
        alert("Link copied! Share this tool with a friend 😊");
      }}
     className="w-1/3 bg-[#F58220] hover:bg-[#E6731A] text-white text-sm font-semibold py-1.5 px-2 rounded-md transition-transform transform hover:scale-105 duration-200 ease-in-out"
>
  Share This Tool
</button>

<a
  href="/prompt-help"
  className="w-1/3 bg-[#F58220] hover:bg-[#E6731A] text-white text-sm font-semibold py-1.5 px-2 rounded-md text-center transition-transform transform hover:scale-105 duration-200 ease-in-out"
>
  More Info
</a>
 
</div>


{/* === Prompt Input Field with Character Counter === */}
<div className="mt-[-0.5rem] mb-2">
  <textarea
    value={prompt}
    onChange={(e) => setPrompt(e.target.value)}
    placeholder="Paste your prompt or describe what you're trying to do..."
    maxLength={1000}
    className="w-full p-4 border border-gray-300 rounded-xl text-base leading-relaxed resize-none h-[11.5rem] text-black dark:text-white bg-white dark:bg-gray-900 placeholder-gray-500 dark:placeholder-gray-400"
  />
  <div className={`text-sm mt-1 text-right ${prompt.length > maxCharacters ? 'text-red-500 font-semibold' : 'text-gray-500 dark:text-gray-400'}`}>
    {prompt.length}/{maxCharacters} characters
  </div>
</div>

{/* === Section Header === */}
<h2 className="text-center text-base font-semibold mb-4 text-black dark:text-white">Select your improvements</h2>

{/* === Labeled Dropdowns === */}
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">

  {/* Tone */}
<div className="flex flex-col items-center">
  <label className="block text-sm font-medium mb-1 text-center text-black dark:text-white">Tone</label>
  <select
    value={tone}
    onChange={(e) => setTone(e.target.value)}
    className="w-full p-3 border border-gray-300 rounded-2xl text-sm bg-white dark:bg-gray-900 text-black dark:text-white text-center appearance-none"
  >
    <option disabled value="">Select</option>
    <option value="neutral">Neutral</option>
    <option value="friendly">Friendly</option>
    <option value="professional">Professional</option>
    <option value="casual">Casual</option>
    <option value="urgent">Urgent</option>
  </select>
</div>

{/* Length */}
<div className="flex flex-col items-center">
  <label className="block text-sm font-medium mb-1 text-center text-black dark:text-white">Length</label>
  <select
    value={length}
    onChange={(e) => setLength(e.target.value)}
    className="w-full p-3 border border-gray-300 rounded-2xl text-sm bg-white dark:bg-gray-900 text-black dark:text-white text-center appearance-none"
  >
    <option disabled value="">Select</option>
    <option value="short">Short</option>
    <option value="medium">Medium</option>
    <option value="long">Long</option>
  </select>
</div>

{/* Style */}
<div className="flex flex-col items-center">
  <label className="block text-sm font-medium mb-1 text-center text-black dark:text-white">Style</label>
  <select
    value={style}
    onChange={(e) => setStyle(e.target.value)}
    className="w-full p-3 border border-gray-300 rounded-2xl text-sm bg-white dark:bg-gray-900 text-black dark:text-white text-center appearance-none"
  >
    <option disabled value="">Select</option>
    <option value="clear">Clear</option>
    <option value="detailed">Detailed</option>
    <option value="persuasive">Persuasive</option>
    <option value="instructive">Instructive</option>
  </select>
</div>

{/* Audience */}
<div className="flex flex-col items-center">
  <label className="block text-sm font-medium mb-1 text-center text-black dark:text-white">Audience</label>
  <select
    value={audience}
    onChange={(e) => setAudience(e.target.value)}
    className="w-full p-3 border border-gray-300 rounded-2xl text-sm bg-white dark:bg-gray-900 text-black dark:text-white text-center appearance-none"
  >
    <option disabled value="">Select</option>
    <option value="general public">General Public</option>
    <option value="employer">Employer</option>
    <option value="students">Students</option>
    <option value="customers">Customers</option>
    <option value="team members">Team Members</option>
  </select>
</div>

{/* Medium */}
<div className="flex flex-col items-center">
  <label className="block text-sm font-medium mb-1 text-center text-black dark:text-white">Medium</label>
  <select
    value={platform}
    onChange={(e) => setPlatform(e.target.value)}
    className="w-full p-3 border border-gray-300 rounded-2xl text-sm bg-white dark:bg-gray-900 text-black dark:text-white text-center appearance-none"
  >
    <option disabled value="">Select</option>
    <option value="email">Email</option>
    <option value="social media">Social Media</option>
    <option value="presentation">Presentation</option>
    <option value="chat message">Chat Message</option>
    <option value="formal letter">Formal Letter</option>
  </select>
</div>

{/* Type */}
<div className="flex flex-col items-center">
  <label className="block text-sm font-medium mb-1 text-center text-black dark:text-white">Type</label>
  <select
    value={contentType}
    onChange={(e) => setContentType(e.target.value)}
    className="w-full p-3 border border-gray-300 rounded-2xl text-sm bg-white dark:bg-gray-900 text-black dark:text-white text-center appearance-none"
  >
    <option disabled value="">Select</option>
    <option value="statement">Statement</option>
    <option value="question">Question</option>
    <option value="plan of action">Plan</option>
    <option value="instruction">Instruction</option>
    <option value="script">Script</option>
  </select>
</div>
</div>

<button
  type="submit"
  className="w-full bg-[#F58220] text-white py-2 rounded-md hover:bg-[#E6731A] text-sm transition-transform transform hover:scale-105 duration-200 ease-in-out"
>
  Improve Prompt
</button>

<button
  type="button"
  onClick={() => {
    setPrompt("");
    setTone("");
    setLength("");
    setStyle("");
    setAudience("");
    setPlatform("");
    setContentType("");
    setResult("");
  }}
  className="w-full mt-2 bg-orange-200 text-gray-800 py-2 rounded-md hover:bg-orange-300 transition text-sm"
>
  Clear All
</button>



      </form>

      {result && (
  <div ref={outputRef} className="mt-6 bg-white p-4 rounded-xl shadow-md w-full max-w-xl space-y-4 text-center">
    <h2 className="text-xl font-semibold text-gray-800">
    <img 
    src="/logos/logo.png" 
    alt="Thumbs Up Logo" 
    className="inline-block w-7 h-7 mr-2 align-top" 
    />
    Optimized Prompt:
  </h2>

    <pre className="whitespace-pre-wrap font-mono text-gray-800 bg-gray-50 p-3 rounded border border-gray-300 text-left">
      {result}
      </pre>
      <button
      onClick={handleCopy}
      className="w-full bg-[#F58220] text-white py-2 rounded-md hover:bg-[#E6731A] text-sm transition-transform transform hover:scale-105 duration-200 ease-in-out"
      >
      Copy Prompt
    </button>
  </div>
)}
 
 {/* --- How This Tool Works + Example Prompt --- */}
<div className="w-full max-w-xl bg-white p-6 rounded-xl shadow-md text-sm space-y-4 mt-12">
  <button
    onClick={() => setShowGuide(!showGuide)}
    className="w-full mt-2 bg-orange-200 text-gray-800 py-2 rounded-md hover:bg-orange-300 transition text-sm"
  >
    {showGuide ? "Hide Guide" : "How This Tool Works & Real Example"}
  </button>

  {showGuide && (
    <div className="mt-4 text-gray-700 space-y-4">
      <div>
        <strong>Step 1:</strong> Paste your existing prompt into the box above.
      </div>
      <div>
        <strong>Step 2:</strong> Choose the tone, length, style, and optionally your audience, medium, and content type.
      </div>
      <div>
        <strong>Step 3:</strong> Click <em>Improve Prompt</em> to instantly get a better version.
      </div>
      <div>
        <strong>Step 4:</strong> Copy and paste it into any AI tool, ChatGPT, Claude, Gemini, etc.
      </div>

      <hr className="my-4 border-gray-300" />

      <h3 className="text-md font-semibold">Real Example</h3>

      <div>
        <p className="font-semibold mb-1">Original Prompt:</p>
        <p className="text-gray-700 text-sm italic">
          write me an email to my employer asking for time off
        </p>
      </div>

      <div>
        <p className="font-semibold mb-1">Unrefined Output:</p>
        <p className="text-gray-700 text-sm">
          Hi I need some time off can I not come in tomorrow thanks.
        </p>
      </div>

      <hr className="my-4 border-gray-300" />

      {/* === Improved Prompt Output === */}
      <div>
        <p className="font-semibold mb-2">Improved Prompt using this tool:</p>
        <p className="text-sm text-gray-600 mb-2">
          Tone: professional | Length: medium | Style: persuasive | Audience: employer | Medium: email | Type: question
        </p>
        <div className="whitespace-pre-wrap font-mono text-gray-800 bg-gray-50 p-4 rounded border border-gray-300 text-sm leading-relaxed">
          Dear [Employer's Name],{"\n\n"}
          I hope this message finds you well. I would like to request some time off and was wondering if tomorrow would be a suitable day to be absent.{"\n\n"}
          Please let me know if that works for you or if you need any additional information.{"\n\n"}
          Kind regards,{"\n"}
          [Your Name]
        </div>
      </div>

      <p className="text-gray-600 text-sm italic">
  <img 
    src="/logos/logo.png" 
    alt="Thumbs Up Logo" 
    className="inline-block w-5 h-5 mr-2 align-text-top" 
  />
  <strong>AI’s Summary of Impact:</strong> Clear subject and greeting, persuasive and respectful tone, well-structured message optimized for email. The improved version is more likely to get a positive response...from an AI or a human.
</p>

    </div>
  )}
</div> 


{/* === Section 2: All Things AI with Ads === */}
<div className="flex flex-col lg:flex-row w-full justify-center items-start mt-12 px-4 sm:px-6 md:px-8">
  
  {/* Left Ad: Hidden on Mobile, Vertically Centered */}
<div className="hidden lg:flex flex-col items-center w-1/4">
  <div className="flex flex-col justify-center min-h-[680px] space-y-4">
    <div className="w-64 h-60 bg-gray-200 border border-gray-300 rounded-xl flex items-center justify-center text-gray-600 text-sm">
      Left Ad #1
    </div>
    <div className="w-64 h-60 bg-gray-200 border border-gray-300 rounded-xl flex items-center justify-center text-gray-600 text-sm">
      Left Ad #2
    </div>
  </div>
</div>

  {/* Center Content: Always Visible */}
  <div className="w-full lg:max-w-xl bg-white p-6 sm:p-8 rounded-xl shadow-md text-sm">
    {/* ... (All Things AI title, grid, affiliate cards, etc.) */}
  
      
    {/* === Section Title & Subheadings === */}
    <div className="text-center mb-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">
  <img 
    src="/logos/logo.png" 
    alt="Thumbs Up Logo" 
    className="inline-block w-8 h-8 mr-2 align-top" 
  />
  All Things AI
</h2>

      <p className="text-base text-gray-700 mb-2">
        AI Tools, Resources, Courses, Books, only What We Find Useful.
      </p>
      <p className="text-sm text-gray-500 italic">
        Need help, not hype? You’ve come to the right place.
      </p>
    </div>

    {/* === 6 Tools in 3x2 Grid — MANUAL Layout === */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">


  {/* === Tool 1: Grammarly === 
  <a
    href="YOUR-GRAMMARLY-AFFILIATE-LINK"
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col items-center bg-gray-50 p-5 rounded-xl shadow-sm hover:shadow-md transition hover:scale-105 text-center"
  >
    <img
      src="/logos/grammarly-logo.png"
      alt="Grammarly Logo"
      className="w-20 h-20 mb-3"
    />
    <p className="text-sm font-semibold text-gray-800">Grammarly</p>
    <p className="text-xs text-gray-500 mt-2">
      Your AI-powered writing assistant. Clear, mistake-free writing wherever you type.
    </p>
  </a>
*/}

  {/* === Tool 2: Writesonic === 
  <a
    href="YOUR-WRITESONIC-AFFILIATE-LINK"
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col items-center bg-gray-50 p-5 rounded-xl shadow-sm hover:shadow-md transition hover:scale-105 text-center"
  >
    <img
      src="/logos/writesonic-logo.png"
      alt="Writesonic Logo"
      className="w-20 h-20 mb-3"
    />
    <p className="text-sm font-semibold text-gray-800">Writesonic</p>
    <p className="text-xs text-gray-500 mt-2">
      AI writing and image generation platform. Perfect for blogs, ads, and marketing copy.
    </p>
  </a>
*/}

  {/* === Tool 3: SurferSEO === 
  <a
    href="YOUR-SURFERSEO-AFFILIATE-LINK"
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col items-center bg-gray-50 p-5 rounded-xl shadow-sm hover:shadow-md transition hover:scale-105 text-center"
  >
    <img
      src="/logos/surferseo-logo.png"
      alt="SurferSEO Logo"
      className="w-20 h-20 mb-3"
    />
    <p className="text-sm font-semibold text-gray-800">SurferSEO</p>
    <p className="text-xs text-gray-500 mt-2">
      Optimize content with AI-powered SEO insights. Rank faster and smarter.
    </p>
  </a>
*/}


  {/* === Tool 4: Ryte === */}
  <a
    href="https://rytr.me/?via=graeme"
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col items-center bg-gray-50 p-5 rounded-xl shadow-sm hover:shadow-md transition hover:scale-105 text-center"
  >
    <img
      src="/logos/ryte-logo.png"
      alt="Ryte Logo"
      className="w-20 h-20 mb-3"
    />
    <p className="text-sm font-semibold text-gray-800">Ryte</p>
    <p className="text-xs text-gray-500 mt-2">
      Improve your website's health and SEO with AI-powered audits. Get easy-to-follow tips to boost your site’s performance. 
    </p>
  </a>

  {/* === Tool 5: Amazon Associates === */}
  <a
    href="https://www.amazon.com/?tag=freeaiprompth-20"
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col items-center bg-gray-50 p-5 rounded-xl shadow-sm hover:shadow-md transition hover:scale-105 text-center"
  >
    <img
      src="/logos/amazon-logo.png"
      alt="Amazon Logo"
      className="w-20 h-20 mb-3"
    />
    <p className="text-sm font-semibold text-gray-800">Amazon</p>
    <p className="text-xs text-gray-500 mt-2">
      Find AI books, gadgets, and tech gear all in one place. Visit and search for your next AI upgrade.
    </p>
  </a>

  {/* === Tool 6: Creative Fabrica === */}
  <a
    href="https://www.creativefabrica.com/ref/14267136/"
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col items-center bg-gray-50 p-5 rounded-xl shadow-sm hover:shadow-md transition hover:scale-105 text-center"
  >
    <img
      src="/logos/creativefabrica-logo.png"
      alt="Creative Fabrica Logo"
      className="w-20 h-20 mb-3"
    />
    <p className="text-sm font-semibold text-gray-800">Creative Fabrica</p>
    <p className="text-xs text-gray-500 mt-2">
      Explore AI fonts, graphics and templates. Search creative tools for your next project.
    </p>
  </a>

<a
    href="https://www.synthesia.io/?via=graeme-kennedy"
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col items-center bg-gray-50 p-5 rounded-xl shadow-sm hover:shadow-md transition hover:scale-105 text-center"
  >
    <img
      src="/logos/synthesia-logo.png"
      alt="Synthesia Logo"
      className="w-20 h-20 mb-3"
    />
    <p className="text-sm font-semibold text-gray-800">Synthesia</p>
    <p className="text-xs text-gray-500 mt-2">
      AI video creation platform, create videos from text in minutes. No cameras or editing skills needed, just type and generate.
    </p>
  </a>
</div>


    {/* === Disclaimer === */}
    <p className="mt-8 text-xs text-gray-400 text-center">
      Some of these are affiliate links. We only recommend what we genuinely find useful.
    </p>

  </div>

  {/* Right Ad: Hidden on Mobile, Vertically Centered */}
<div className="hidden lg:flex flex-col items-center w-1/4">
  <div className="flex flex-col justify-center min-h-[680px]">
    <div className="w-64 h-[600px] bg-gray-200 border border-gray-300 rounded-xl flex items-center justify-center text-gray-600 text-sm">
      Right Skyscraper Ad
    </div>
  </div>
</div>
</div>

{/* === Premium Model – We're Exploring the Idea === */}
<div className="mt-12 w-full max-w-xl bg-white border border-gray-200 p-6 rounded-xl shadow-md space-y-6">
  <h2 className="text-xl font-bold text-yellow-800 text-center">
  <img 
    src="/logos/logo.png" 
    alt="Thumbs Up Logo" 
    className="inline-block w-8 h-8 mr-2 align-top" 
  />
  Premium Model – We're Exploring the Idea
</h2>


  <p className="text-gray-700 text-sm text-center">
    We're considering building a premium version of this tool, shaped by what *you* find most helpful.
    Here's what we're thinking so far:
  </p>

  <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
    <li>Live AI prompt improvements with one click</li>
    <li>Support for specific use cases: writing, coding, marketing, learning</li>
    <li>Prompt export, history, and personal revision tracking</li>
    <li>Multiple style/tone variations generated instantly</li>
    <li>Cleaner interface – no ads, no distractions</li>
    <li>Beginner-friendly, with guided structure for better AI results</li>
  </ul>

  <p className="text-sm text-gray-700 text-center">
    We're building a small community of curious users and everyday AI explorers.
    Your feedback helps us shape what comes next.
  </p>

  <div className="text-center pt-2">
    <button
      type="button"
      onClick={() => {
        if (mlReady && typeof window.ml === "function") {
          window.ml('show', 'm6HnCM', true);
        }
      }}
      className="w-full bg-[#F58220] text-white py-2 rounded-md hover:bg-[#E6731A] text-sm transition-transform transform hover:scale-105 duration-200 ease-in-out"
      >
      Share Your Interest
    </button>
    <p className="text-xs text-center text-gray-500 mt-2">
      You’ll hear from us now and then with updates and opportunities to share your thoughts
    </p>
  </div>
</div>

{/* === Mobile Ad: Between Premium Model & FAQ === */}
<MobileAdPlaceholder />


{/* === Section 4: FAQ with Framed Card and Mirrored Side Ads === */}
<div className="flex flex-col lg:flex-row w-full justify-center items-start gap-8 mt-1 lg:mt-12 px-4 sm:px-6 md:px-8">

  {/* Left Ad */}
  <div className="hidden lg:flex flex-col items-center w-1/4">
    <div className="flex flex-col justify-center h-full min-h-[680px]">
      <div className="w-64 h-[600px] bg-gray-200 border border-gray-300 rounded-xl flex items-center justify-center text-gray-600 text-sm">
        Left Skyscraper Ad
      </div>
    </div>
  </div>

  {/* FAQ Content */}
  <div className="flex-1 max-w-xl bg-white p-8 rounded-xl shadow-md text-sm min-h-[680px]">
    <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
      <img src="/logos/logo.png" alt="Thumbs Up Logo" className="inline-block w-8 h-8 mr-2 align-top" />
      Frequently Asked Questions
    </h2>

    {[
      {
        q: "How much difference does good prompting make?",
        a: "A huge difference. The quality of your prompt directly affects how well tools like ChatGPT, Claude, and Gemini respond. Clear, well-structured prompts can turn a vague or robotic reply into something useful, persuasive, and even creative. Whether you're writing, researching, or planning, great prompting can save time, boost accuracy, and make AI work the way you want.",
      },
      {
        q: "What is a free AI prompt generator?",
        a: "A free AI prompt generator helps you craft better inputs for ChatGPT, Claude, Gemini, and other models to get more useful, human-like responses.",
      },
      {
        q: "How can I improve my prompts for AI tools?",
        a: "You can improve prompts by refining tone, length, style, and structure. This tool makes it easy by guiding you through each step for clearer and more effective outputs.",
      },
      {
        q: "Can I use this for ChatGPT, Claude, Gemini, or DeepSeek?",
        a: "Yes. Our AI prompt helper is designed to work with all major tools including ChatGPT, Claude, Gemini, and DeepSeek. Just copy the optimized result and paste it in.",
      },
      {
        q: "What’s the best prompt structure for ChatGPT?",
        a: "A great prompt starts with a clear instruction, includes context, and finishes with a format suggestion. This tool generates those for you in seconds.",
      },
      {
        q: "Can I use this prompt helper for emails, content, and social posts?",
        a: "Absolutely. Whether you're writing emails, blog content, marketing copy, or social media posts, this tool adapts your prompt for any format and platform.",
      },
      {
        q: "Is there a completely free tool to improve AI prompt quality?",
        a: "Yes. This site offers a 100% free AI prompt helper with no login required. It’s supported by ads and affiliate links so you can use it as much as you like.",
      },
      {
        q: "How do I get more accurate answers from AI?",
        a: "More accurate answers come from better prompts. This tool helps you clarify goals, define the audience, and guide tone for stronger, AI-friendly inputs.",
      },
      {
        q: "Can I use this for DALL·E or MidJourney prompt writing?",
        a: "Yes. While designed for text-based prompts, you can use this tool to build clearer, more detailed image prompts for AI models like DALL·E and MidJourney.",
      },
      {
        q: "What’s the easiest way to optimize a prompt?",
        a: "The easiest way is to use a prompt helper like this. It walks you through options like tone, length, and content type to create a polished AI input in seconds.",
      },
      {
        q: "What tone should I use in my AI prompts?",
        a: "The tone depends on your goal — professional, casual, persuasive, etc. Our prompt helper lets you customize tone easily to get the right kind of AI response.",
      },
      {
        q: "Is this tool useful for school, work, or business use?",
        a: "Yes. It’s ideal for students, marketers, customer service teams, and professionals who need clearer and more effective outputs from AI tools.",
      },
      {
        q: "Can I get examples of before and after prompt improvements?",
        a: "Yes. Scroll up to the “How This Tool Works” section to see a real-world example comparing unrefined vs improved prompts, side by side.",
      },
      {
        q: "Will there be a premium version of this tool?",
        a: "Maybe! We’re exploring the idea of a Premium Model built around your feedback. If you’re curious or want to help shape it, check out the section above and join our interest list.",
      },
      {
        q: "Where can I find more information on prompt engineering?",
        a: "You’ll find an entire section on prompt writing, AI tips, and how prompting actually works by clicking the “More Info” tab at the top of the page.",
      },
    ].map((item, index) => (
      <div
        key={index}
        className="group border-b border-gray-200 pb-4 hover:bg-gray-50 cursor-pointer"
        onClick={() => toggleFAQ(index)}
      >
        <p className="font-medium text-gray-800 group-hover:text-violet-800">
          {item.q}
        </p>
        <p
          className={`text-gray-600 mt-2 overflow-hidden transition-all duration-500 ease-in-out
          ${openFAQ === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
          sm:max-h-0 sm:opacity-0 sm:group-hover:max-h-[500px] sm:group-hover:opacity-100`}
        >
          {item.a}
        </p>
      </div>
    ))}
  </div>

  {/* Right Ad */}
  <div className="hidden lg:flex flex-col items-center w-1/4">
    <div className="flex flex-col justify-center min-h-[680px] space-y-4">
      <div className="w-64 h-60 bg-gray-200 border border-gray-300 rounded-xl flex items-center justify-center text-gray-600 text-sm">
        Right Ad #1
      </div>
      <div className="w-64 h-60 bg-gray-200 border border-gray-300 rounded-xl flex items-center justify-center text-gray-600 text-sm">
        Right Ad #2
      </div>
    </div>
  </div>
</div>



{/* --- Footer Ad Placeholder --- */}
<div className="w-full max-w-xl my-8 p-3 bg-gray-200 text-center text-gray-600 rounded-md">
  Ad Placeholder – Your clicks help keep this tool 100% free!
</div>

{/* Footer Section */}
<footer className="mt-16 w-full max-w-xl text-center text-gray-200 text-sm pb-8">
  <hr className="mb-4 border-gray-500" />
  <p className="mb-2">
    © {new Date().getFullYear()} Free AI Prompt Helper. Built for AI users, by AI users.
  </p>
  <div className="flex justify-center space-x-4 mb-2 text-sm">
    <a href="/privacy-policy" className="hover:underline hover:text-white transition-colors duration-200">
      Privacy Policy
    </a>
    <span>|</span>
    <a href="/disclaimer" className="hover:underline hover:text-white transition-colors duration-200">
      Disclaimer
    </a>
    <span>|</span>
    <a href="/contact" className="hover:underline hover:text-white transition-colors duration-200">
      Contact
    </a>
  </div>
  <p className="text-xs text-gray-300">
    Some links on this site are affiliate links. We only recommend what we trust.
  </p>
</footer>

    </main>
  );
}
