import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center w-full mt-5 border-b-2 pb-7 sm:px-4 px-2">
      <Link href="/" className="flex space-x-3">
        <Image
          alt="header text"
          src="/writingIcon.png"
          className="sm:w-12 sm:h-12 w-8 h-8"
          width={32}
          height={32}
        />
        <h1 className="sm:text-4xl text-2xl font-bold ml-2 tracking-tight">
          NPC Reply.com
        </h1>
      </Link>
      <div className="flex space-x-4 pb-4 sm:pb-0">
        <Link
          href="https://www.linkedin.com/in/felixprogrammer/"
          className="group"
          aria-label="Felix on LinkedIn"
        >
          <svg
            aria-hidden="true"
            className="h-6 w-6 fill-slate-500 group-hover:fill-slate-700"
            viewBox="0 0 24 24"
          >
            <path d="M22.225 0H1.77C.79 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.77 24h20.455C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.208 0 22.225 0zM3.555 20.452H7.12V9H3.556v11.452zM5.338 7.433a2.062 2.062 0 1 1 0-4.122 2.062 2.062 0 0 1 0 4.122zm15.11 13.019h-3.554v-5.569c0-1.328-.026-3.037-1.852-3.037-1.852 0-2.136 1.445-2.136 2.939v5.667H9.352V9h3.415v1.561h.045c.477-.9 1.637-1.85 3.37-1.85 3.602 0 4.266 2.37 4.266 5.455v6.286z" />
          </svg>
        </Link>
        <Link
          href="https://github.com/FelixMildon"
          className="group"
          aria-label="Felix on GitHub"
        >
          <svg
            aria-hidden="true"
            className="h-6 w-6 fill-slate-500 group-hover:fill-slate-700"
          >
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
          </svg>
        </Link>
      </div>
      
    </header>
  );
}
