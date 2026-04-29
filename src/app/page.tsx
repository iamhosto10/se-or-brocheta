import FeedbackForm from '@/components/FeedbackForm';

export default function Home() {
  return (
    <main className="min-h-screen bg-background texture-bg flex flex-col font-sans">
      {/* TopAppBar */}
      <header className="bg-white border-b-4 border-black w-full sticky top-0 z-50 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex justify-between items-center px-6 py-4 max-w-full">
        <div className="text-black font-serif font-bold tracking-tight text-2xl italic uppercase">
          <br />
        </div>
        <div className="flex items-center gap-4">
          <button className="text-zinc-600 hover:bg-zinc-100 transition-transform active:translate-x-0.5 active:translate-y-0.5 p-2 rounded-full">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-user"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="10" r="3"/><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"/></svg>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center py-16 px-6">
        <FeedbackForm />
      </div>

      {/* Footer */}
      <footer className="bg-white text-black font-sans font-bold text-xs uppercase tracking-widest border-t-4 border-black w-full mt-12 flex flex-col md:flex-row justify-between items-center p-8 gap-4">
        <div>© 2024 Sr. Brocheta. All Rights Reserved.</div>
        <nav className="flex gap-6">
          <a className="text-zinc-500 hover:text-black transition-colors" href="#">Privacy Policy</a>
          <a className="text-zinc-500 hover:text-black transition-colors" href="#">Terms of Service</a>
          <a className="text-zinc-500 hover:text-black transition-colors" href="#">Contact Support</a>
        </nav>
      </footer>
    </main>
  );
}
