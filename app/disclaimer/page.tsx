export const metadata = {
  title: "Disclaimer – Free AI Prompt Helper",
  description: "Read our disclaimer outlining information accuracy and affiliate relationships for Free AI Prompt Helper.",
};

export default function Disclaimer() {
  return (
    <main className="flex flex-col items-center px-4 py-12 bg-white text-gray-800">
      <div className="w-full max-w-3xl space-y-6 text-center">
        <div className="flex flex-col items-center mb-6">
          <img src="/logos/logo.png" alt="Free AI Prompt Helper Logo" className="w-16 h-16 mb-2" />
          <h1 className="text-3xl font-bold text-center">Disclaimer</h1>
        </div>

        <p className="text-[1.05rem] text-gray-700">
          The information provided on Free AI Prompt Helper is for general informational purposes only. 
          While we aim for accuracy, we make no guarantees of any kind regarding completeness,
          <br />
          accuracy, reliability, or suitability of the information.
        </p>

        <p className="text-[1.05rem] text-gray-700">
          This site may contain affiliate links. If you click on a link and make a purchase, 
          we may earn a commission at no additional cost to you.
        </p>

        <p className="text-[1.05rem] text-gray-700">
          Use of this website and its tools is at your own risk. 
          Free AI Prompt Helper disclaims any and all liability for any losses, damages, or issues 
          that may arise from using our website or tools.
        </p>

        <p className="text-[1.05rem] text-gray-700">
          If you have any questions, please{" "}
          <a href="/contact" className="text-violet-800 underline hover:text-violet-900">
            contact us
          </a>.
        </p>

        <p className="text-xs text-gray-400 mb-4">
          Last Updated: 8 June 2025
        </p>

        <div className="text-center pt-6">
          <a href="/" className="text-violet-800 hover:underline text-sm">
            Return to Free AI Prompt Helper
          </a>
        </div>
      </div>
    </main>
  );
}

