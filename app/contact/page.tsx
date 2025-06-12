export const metadata = {
  title: "Contact Us – Free AI Prompt Helper",
  description: "Got feedback or questions? Contact the Free AI Prompt Helper team here.",
};

export default function ContactPage() {
  return (
    <main className="flex flex-col items-center px-4 py-12 bg-white text-gray-800">
      <div className="w-full max-w-3xl space-y-6">
        <div className="flex flex-col items-center mb-6">
          <img src="/logos/logo.png" alt="Free AI Prompt Helper Logo" className="w-16 h-16 mb-2" />
          <h1 className="text-3xl font-bold text-center">Contact Us</h1>
        </div>
        
        {/* Centered Intro Paragraphs with Line Breaks */}
        <div className="text-center space-y-6">
          <p className="text-[1.05rem] text-gray-700">
            We’d love to hear from you!
            <br />
            Whether it’s feedback, suggestions, or collaboration ideas, feel free to reach out.
          </p>
          <p className="text-[1.05rem] text-gray-700">
            Due to the number of messages we receive, we may not be able to reply to everyone individually,
            <br />
            but we read every message carefully.
          </p>
        </div>

        {/* Email Block */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            <img 
              src="/logos/logo.png" 
              alt="Thumbs Up Logo" 
              className="inline-block w-7 h-7 mr-2 align-top" 
            />
            Email Us
          </h2>
          <p className="text-gray-700 text-lg">
            contact [at] freeaiprompthelper [dot] com
          </p>
          <p className="text-xs text-gray-500 mt-2">
            (Please replace [at] with @ and [dot] with . when emailing, this helps reduce spam!)
          </p>
        </div>

        {/* --- Honeypot Fake Email for Bots --- */}
        <div style={{ display: "none" }}>
          <a href="mailto:noreply@nowhere.com">Email</a>
        </div>

        {/* Return to Main Page */}
        <div className="text-center pt-6">
          <p className="text-sm text-gray-600">
            <a href="/" className="text-violet-800 hover:underline">
              Return to Free AI Prompt Helper
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}



