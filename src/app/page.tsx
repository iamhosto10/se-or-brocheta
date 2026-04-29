import FeedbackForm from "@/components/FeedbackForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-background texture-bg flex flex-col font-sans">
      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center py-16 px-6">
        <FeedbackForm />
      </div>
    </main>
  );
}
