import { Navigation } from "@/components/Navigation";

export default function IntroductionPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-black">
      <Navigation />

      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Introduction</h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          This is the introduction page. Content coming soon.
        </p>
      </main>
    </div>
  );
}

