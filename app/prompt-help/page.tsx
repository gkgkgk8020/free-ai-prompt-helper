// app/prompt-help/page.tsx

import Link from "next/link";

// === SEO Metadata for Prompt Help Page ===
export const metadata = {
  title: "How to Write Better Prompts | Free AI Prompt Helper",
  description: "Learn how to craft effective prompts for ChatGPT, Claude, Gemini, and more. Practical examples and tips for better AI results.",
};

export default function PromptHelp() {
  return (
    <main className="flex flex-col items-center px-4 py-12 text-gray-800">
      {/* === Page Title Section === */}
      <section className="w-full max-w-4xl mb-10 text-center">
  {/* === Centered Back to Tool Button === */}
  <div className="flex justify-center mb-6">
    <a
      href="/"
      className="w-1/3 bg-[#F58220] hover:bg-[#E6731A] text-white text-sm font-semibold py-1.5 px-2 rounded-md transition-transform transform hover:scale-105 duration-200 ease-in-out"
      >
      Back to Tool
    </a>
  </div>

  <div className="flex flex-col items-center mb-6">
  <img src="/logos/logo.png" alt="Free AI Prompt Helper Logo" className="w-32 h-32 mb-2" />
  <h1
  className="text-4xl font-bold text-center text-white"
  style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)' }}
>
  How to Write Better Prompts
</h1>
</div>

  <p className="text-lg text-gray-400">
    Practical tips, examples, and advice to get better results with ChatGPT, Claude, Gemini, and more.
  </p>
</section>


{/* --- Ad Placeholder --- */}
<div className="w-full max-w-3xl my-6 p-3 bg-gray-200 text-center text-gray-600 rounded-md">
  Ad Placeholder – Your support keeps this guide free!
</div>


{/* === Section 2: What Are Prompts? === */}
<section className="w-full max-w-3xl bg-white rounded-xl shadow-md p-6 mb-12">
  <h2 className="text-2xl font-semibold mb-4 text-center">
  <img 
    src="/logos/logo.png" 
    alt="Thumbs Up Logo" 
    className="inline-block w-8 h-8 mr-2 align-top" 
  />
  What Are Prompts?
</h2>

  <p className="text-[1.05rem] text-gray-700 mb-4">
    Prompts are the instructions or questions you give an AI model to get a specific kind of response.
    They tell the AI what you want it to do, whether that’s answering a question, writing a tweet,
    generating code, or drafting an article.
  </p>
  <p className="text-[1.05rem] text-gray-700 mb-4">
    A prompt can be as simple as “Tell me a joke” or as detailed as “Write a professional summary
    of climate change trends for a 12-year-old audience in 3 paragraphs.”
  </p>
  <p className="text-[1.05rem] text-gray-700">
    The better your prompt, the better the result. That’s what this page, and this site is all about.
  </p>
</section>


    {/* === Ad-Wrapped Section 2 & 3 Block === */}
<div className="hidden lg:flex w-full justify-between items-start mt-12 px-8">
  {/* Left Column: Two Ad Blocks */}
  <div className="flex flex-col items-center w-1/4 space-y-4">
    <div className="w-64 h-60 bg-gray-200 border border-gray-300 rounded-xl flex items-center justify-center text-gray-600 text-sm">
      Left Ad #1
    </div>
    <div className="w-64 h-60 bg-gray-200 border border-gray-300 rounded-xl flex items-center justify-center text-gray-600 text-sm">
      Left Ad #2
    </div>
  </div>

  {/* Center Column: Content Sections */}
  <div className="w-full max-w-3xl space-y-12">
    {/* === Section 2: What Makes a Good Prompt? === */}
    <section className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-6 text-center">
  <img 
    src="/logos/logo.png" 
    alt="Thumbs Up Logo" 
    className="inline-block w-8 h-8 mr-2 align-top" 
  />
  What Makes a Good Prompt?
</h2>

      <ul className="space-y-3 text-gray-700 pl-4">
        <li className="flex items-start">
          <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 mr-3 flex-shrink-0"></div>
          <span>
            <strong>Be specific:</strong> The more detail you give, the better the AI can respond.
          </span>
        </li>
        <li className="flex items-start">
          <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 mr-3 flex-shrink-0"></div>
          <span>
            <strong>Include context:</strong> Tell it what the goal is and how to respond (e.g., summary, script, headline).
          </span>
        </li>
        <li className="flex items-start">
          <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 mr-3 flex-shrink-0"></div>
          <span>
            <strong>Use examples:</strong> Ask for a rewrite, comparison, or a sample output.
          </span>
        </li>
        <li className="flex items-start">
          <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 mr-3 flex-shrink-0"></div>
          <span>
            <strong>Set the tone and format:</strong> Choose style (funny, formal, etc.) and medium (email, blog, tweet).
          </span>
        </li>
        <li className="flex items-start">
          <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 mr-3 flex-shrink-0"></div>
          <span>
            <strong>Review the AI’s reply:</strong> Great prompting includes great listening. Check how it responded, then adjust for even better results.
          </span>
        </li>
      </ul>
    </section>

    {/* === Section 3: Prompt Examples === */}
<section className="bg-white rounded-xl shadow-md p-6">
  <h2 className="text-2xl font-semibold mb-3 text-center">
    <img 
      src="/logos/logo.png" 
      alt="Thumbs Up Logo" 
      className="inline-block w-8 h-8 mr-2 align-top" 
    />
    Real Prompt Examples
  </h2>

  {/* Weak Prompt */}
  <div className="mb-6">
    <div className="flex items-center mb-2">
      <span className="text-violet-700 text-med mr-2">✖️</span>
      <p className="font-semibold text-gray-800">Weak Prompt:</p>
    </div>
    <div className="bg-gray-50 border border-gray-200 rounded p-3 text-sm text-gray-600">
      Write about climate change.
    </div>
  </div>

  {/* Stronger Prompt */}
  <div>
    <div className="flex items-center mb-2">
      <img
        src="/logos/logo.png"
        alt="Thumbs Up Logo"
        className="inline-block w-6 h-6 mr-2"
      />
      <p className="font-semibold text-gray-800">Stronger, More Specific Prompt:</p>
    </div>
    <div className="bg-gray-50 border border-gray-200 rounded p-3 text-sm text-gray-700">
      Write a 300-word blog post on how climate change affects small island nations. Make it informative but conversational in tone. End with a hopeful call to action.
    </div>
  </div>
</section>

  </div>

  {/* Right Column: One Tall Ad */}
  <div className="flex flex-col items-center w-1/4">
    <div className="w-64 h-[600px] bg-gray-200 border border-gray-300 rounded-xl flex items-center justify-center text-gray-600 text-sm">
      Right Skyscraper Ad
    </div>
  </div>
</div>



      {/* === Section 4: Tips from Prompt Engineers === */}
<section className="w-full max-w-3xl bg-white rounded-xl shadow-md p-6 mb-12 mt-12">
  <h2 className="text-2xl font-semibold mb-6 text-center">
  <img 
    src="/logos/logo.png" 
    alt="Thumbs Up Logo" 
    className="inline-block w-8 h-8 mr-2 align-top" 
  />
  Tips from Prompt Engineers
</h2>

  <ul className="space-y-3 text-gray-700 pl-4">
    <li className="flex items-start">
      <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 mr-3 flex-shrink-0"></div>
      <span>
        Read the AI's answer closely before responding. Sometimes it's hinting at how to clarify the prompt further.
      </span>
    </li>
    <li className="flex items-start">
      <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 mr-3 flex-shrink-0"></div>
      <span>
        Break long prompts into steps. Think like a teacher giving instructions.
      </span>
    </li>
    <li className="flex items-start">
      <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 mr-3 flex-shrink-0"></div>
      <span>
        Ask for rephrasing or rewrites to test how the AI interprets tone and formality.
      </span>
    </li>
    <li className="flex items-start">
      <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 mr-3 flex-shrink-0"></div>
      <span>
        Start simple, then build complexity. Iteration helps uncover the best prompt structure.
      </span>
    </li>
    <li className="flex items-start">
      <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 mr-3 flex-shrink-0"></div>
      <span>
        Pay attention to the AI’s strengths and quirks. Each model has its own tone, memory, and capabilities. Prompting well means adapting as you go.
      </span>
    </li>
  </ul>
</section>


    {/* === Ad-Wrapped Section 5 & 6 Block (Ad sides flipped) === */}
<div className="hidden lg:flex w-full justify-between items-start mt-12 px-8">
  {/* Left Column: One Tall Skyscraper Ad */}
  <div className="flex flex-col items-center w-1/4">
    <div className="w-64 h-[600px] bg-gray-200 border border-gray-300 rounded-xl flex items-center justify-center text-gray-600 text-sm">
      Left Skyscraper Ad
    </div>
  </div>

  {/* Center Column: Content Sections */}
  <div className="w-full max-w-3xl space-y-12">
    {/* === Section 5: How to Use This Tool === */}
    <section className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-6 text-center">
  <img 
    src="/logos/logo.png" 
    alt="Thumbs Up Logo" 
    className="inline-block w-8 h-8 mr-2 align-top" 
  />
  How to Use This Tool with Maximum Impact
</h2>

      <p className="text-gray-700 mb-6">
        Free AI Prompt Helper is designed to make your AI prompts clearer, more focused, and easier for ChatGPT, Claude, or Gemini to interpret. Here's how to get the most out of it:
      </p>
      <ul className="space-y-3 text-gray-700 pl-4">
        <li className="flex items-start">
          <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 mr-3 flex-shrink-0"></div>
          <span><strong>Paste your existing prompt:</strong> Drop your original wording into the input box at the top of the page.</span>
        </li>
        <li className="flex items-start">
          <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 mr-3 flex-shrink-0"></div>
          <span><strong>Choose tone, length, and format:</strong> These guide how your refined prompt will be structured.</span>
        </li>
        <li className="flex items-start">
          <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 mr-3 flex-shrink-0"></div>
          <span><strong>Click “Improve My Prompt”:</strong> Your prompt is re-organized with helpful structure and detail, making it easier for ChatGPT, Claude, or Gemini to understand what you’re asking for.</span>
        </li>
        <li className="flex items-start">
          <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 mr-3 flex-shrink-0"></div>
          <span><strong>Copy the refined version:</strong> Paste it into your favorite AI tool and see how the output improves.</span>
        </li>
        <li className="flex items-start">
          <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 mr-3 flex-shrink-0"></div>
          <span><strong>Tweak and test as needed:</strong> Great prompts often come from iterating. Adjust and explore based on what the AI gives you.</span>
        </li>
      </ul>
      <p className="text-gray-600 mt-6">
        This tool helps you communicate better with AI, without needing to know any technical jargon or advanced prompt tricks.
      </p>
    </section>

{/* === Section 6: Extra Resources === */}
<section className="bg-white rounded-xl shadow-md p-6">
  <h2 className="text-2xl font-semibold mb-6 text-center">
    <img 
      src="/logos/logo.png" 
      alt="Thumbs Up Logo" 
      className="inline-block w-8 h-8 mr-2 align-top" 
    />
    Extra Resources on Prompting
  </h2>

  <ul className="space-y-3 text-gray-700 pl-4">
    <li className="flex items-start">
      <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 mr-3 flex-shrink-0"></div>
      <span>
        <a href="https://platform.openai.com/docs/guides/gpt" target="_blank" rel="noopener noreferrer" className="text-violet-800 hover:underline">
          OpenAI’s official GPT guide
        </a> – Understand how the model interprets prompts and parameters.
      </span>
    </li>
    <li className="flex items-start">
      <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 mr-3 flex-shrink-0"></div>
      <span>
        <a href="https://learnprompting.org/" target="_blank" rel="noopener noreferrer" className="text-violet-800 hover:underline">
          LearnPrompting.org
        </a> – A community-curated site full of free lessons for all experience levels.
      </span>
    </li>
    <li className="flex items-start">
      <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 mr-3 flex-shrink-0"></div>
      <span>
        <a href="https://www.simplilearn.com/tutorials/artificial-intelligence-tutorial/what-is-artificial-intelligence" target="_blank" rel="noopener noreferrer" className="text-violet-800 hover:underline">
          What is AI? Beginner’s Guide by Simplilearn
        </a> – A simple, beginner-friendly explanation of AI with examples anyone can understand.
      </span>
    </li>
    <li className="flex items-start">
      <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 mr-3 flex-shrink-0"></div>
      <span>
        <a href="https://www.explainthis.io/en/ai" target="_blank" rel="noopener noreferrer" className="text-violet-800 hover:underline">
          How AI Works: A Visual Beginner’s Guide
        </a> – See how AI and prompting really work with easy visuals and examples.
      </span>
    </li>
  </ul>
</section>
</div>


  {/* Right Column: Two 300px-Tall Ads */}
  <div className="flex flex-col items-center w-1/4 space-y-4">
    <div className="w-64 h-60 bg-gray-200 border border-gray-300 rounded-xl flex items-center justify-center text-gray-600 text-sm">
      Right Ad #1
    </div>
    <div className="w-64 h-60 bg-gray-200 border border-gray-300 rounded-xl flex items-center justify-center text-gray-600 text-sm">
      Right Ad #2
    </div>
  </div>
</div>


{/* --- Footer Ad Placeholder --- */}
<div className="w-full max-w-3xl my-10 p-3 bg-gray-200 text-center text-gray-600 rounded-md">
  Ad Placeholder – Clicks help keep this site 100% free!
</div>


      {/* === Section 7: Call-to-Action Banner === */}
<section className="w-full max-w-3xl bg-blue-50 border border-blue-200 rounded-xl p-6 text-center shadow-sm mb-12">
  <h2 className="text-xl font-bold text-black mb-2">
  <img 
    src="/logos/logo.png" 
    alt="Thumbs Up Logo" 
    className="inline-block w-8 h-8 mr-2 align-top" 
  />
  Ready to try better prompting?
</h2>

  <p className="text-gray-700 mb-4">
    Our free AI Prompt Helper makes it easy to refine your tone, length, and clarity, no sign-up needed.
  </p>
  <a
    href="/"
    className="block w-full text-center bg-[#F58220] text-white py-2 rounded-md hover:bg-[#E6731A] text-sm transition-transform transform hover:scale-105 duration-200 ease-in-out"
  >
    Try the Free Prompt Helper
  </a>
</section>

{/* === Footer Note === */}
<footer className="mt-16 w-full max-w-xl text-center text-gray-200 text-sm pb-8">
  <hr className="mb-4 border-gray-500" /> {/* Slightly lighter divider */}
  
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

