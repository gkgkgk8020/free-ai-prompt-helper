export const metadata = {
  title: "Privacy Policy – Free AI Prompt Helper",
  description: "Learn how we protect your privacy on Free AI Prompt Helper. No signups, no personal data collected, just a free tool.",
};

export default function PrivacyPolicy() {
  return (
    <main className="flex flex-col items-center px-4 py-12 bg-white text-gray-800">
      <div className="w-full max-w-3xl space-y-6">
        <div className="flex flex-col items-center mb-6">
        <img src="/logos/logo.png" alt="Free AI Prompt Helper Logo" className="w-16 h-16 mb-2" />
      <h1 className="text-3xl font-bold text-center">Privacy Policy</h1>
    </div>


        <div className="text-gray-700 text-[1.05rem] space-y-4 text-center">
          <p>
            We respect your privacy. This website does not collect personal data directly.
          <br />
            We do not store, sell, or share your personal information.
          </p>
          <p>
            Our site uses cookies and third-party services, including Google AdSense and affiliate programs, 
            to enhance your browsing experience. These third parties may collect anonymous usage data in accordance 
            with their own privacy policies.
          </p>
          <p>
            By continuing to use this site, you acknowledge and accept these practices.
          <br /> 
            If you have any questions, please{" "}
            <a href="/contact" className="text-violet-800 hover:underline">
              contact us
            </a>.
          </p>

          <p className="text-xs text-gray-400 mb-4">
            Last Updated: 8 June 2025
          </p>


        </div>

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
