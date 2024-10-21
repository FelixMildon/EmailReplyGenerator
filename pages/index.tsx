import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRef, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import DropDown, { VibeType } from "../components/DropDown";
import Footer from "../components/Footer";
import LoadingDots from "../components/LoadingDots";

const Home: NextPage = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [vibe, setVibe] = useState<VibeType>("Professional");
  const [generatedEmails, setGeneratedEmails] = useState<String>("");

  const emailRef = useRef<null | HTMLDivElement>(null);

  const scrollToEmails = () => {
    if (emailRef.current !== null) {
      emailRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
//THE "PROMPT TEMPLATE" 
  const prompt = `Generate 2 ${vibe} compelling email replies
  ${vibe === "Professional" ? "Reflect tone. Concise, business-appropriate." : ""}
  ${vibe === "Casual" ? "Natural conversation. Speak like a human, not a bot." : ""}
  ${vibe === "Funny" ? "Include a ridiculous joke." : ""}
  [Their email start]
  ${email}${email.slice(-1) === "." ? "" : "."}
  [email end] 
  [Reply Format] Label each reply as "1." and "2."`;


  const generateEmail = async (e: any) => {
    e.preventDefault();
    setGeneratedEmails("");
    setLoading(true);
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
      }),
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    // This data is a ReadableStream
    const data = response.body;
    if (!data) {
      return;
    }

    const reader = data.getReader();
    const decoder = new TextDecoder();
    let done = false;

    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      const chunkValue = decoder.decode(value);
      setGeneratedEmails((prev) => prev + chunkValue);
    }
    scrollToEmails();
    setLoading(false);
  };

  return (
    <div className="flex max-w-5xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Head>
        <title>eMail Reply Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 mt-12 sm:mt-20">
        <h1 className="sm:text-6xl text-4xl max-w-[708px] font-bold text-slate-900">
           Email Reply Generator
        </h1>
        <p className="text-slate-500 mt-5">Transform your inbox with fast, professional responses.</p>
        <div className="max-w-xl w-full">
          <div className="flex mt-10 items-center space-x-3">
            <Image
              src="/1-black.png"
              width={30}
              height={30}
              alt="1 icon"
              className="mb-5 sm:mb-0"
            />
            <p className="text-left font-medium">
        Paste any email needing a response below:
            </p>
          </div>
          <textarea
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            rows={6}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black my-5"
            placeholder={
              "From inbox to done - paste the email HERE!\nEXAMPLE:   \"Hi [you],\n      Please find the Q4 performance \n      review attached\n   From Sender.\""
            }
          />
          <div className="flex mb-5 items-center space-x-3">
            <Image src="/2-black.png" width={30} height={30} alt="1 icon" />
            <p className="text-left font-medium">Select your vibe.</p>
          </div>
          <div className="block">
            <DropDown vibe={vibe} setVibe={(newVibe) => setVibe(newVibe)} />
          </div>

          {!loading && (
            <div className="tooltip">
              <button
                className={`bg-black rounded-xl text-white font-medium px-4 py-2 sm:mt-10 mt-8 hover:bg-black/80 w-full ${email.length < 10 ? 'opacity-50' : ''
                  }`}
                onClick={(e) => generateEmail(e)}
                disabled={email.length < 10}
              >
                Generate Replys &rarr;
              </button>
              {email.length < 10 && (
                <span className="tooltiptext">
                  Please put an email in the textarea.
                </span>
              )}
            </div>
          )}
          {loading && (
            <button
              className="bg-black rounded-xl text-white font-medium px-4 py-2 sm:mt-10 mt-8 hover:bg-black/80 w-full"
              disabled
            >
              <LoadingDots color="white" style="large" />
            </button>
          )}
        </div>
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{ duration: 2000 }}
        />
        <hr className="h-px bg-gray-700 border-1 dark:bg-gray-700" />
        <div className="space-y-10 my-10">
          {generatedEmails && (
            <>
              <div>
                <h2
                  className="sm:text-4xl text-3xl font-bold text-slate-900 mx-auto"
                  ref={emailRef}
                >
                  Your generated emails:
                </h2>
              </div>
              <div className="space-y-8 flex flex-col items-center justify-center max-w-xl mx-auto">
                {generatedEmails
                  .substring(generatedEmails.indexOf("1") + 3)
                  .split("2.")
                  .map((generatedEmail) => {
                    return (
                      
                      <div
                        className="bg-white rounded-xl shadow-md p-4 hover:bg-gray-100 transition cursor-copy border"
                        onClick={() => {
                          navigator.clipboard.writeText(generatedEmail);
                          toast("Email copied to clipboard", {
                            icon: "✂️",
                          });
                        }}
                        key={generatedEmail}
                      >
                        <p>{generatedEmail}</p>
                      </div>
                    );
                  })}
              </div>
            </>
          )}
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Home;
