export default function RaisePage() {
  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Raise
            </h1>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              Raise section view.
            </p>
          </div>
          <span className="inline-flex items-center rounded-md bg-zinc-100 dark:bg-zinc-800 px-2.5 py-1 text-xs font-mono text-zinc-600 dark:text-zinc-300">
            Route: /raise
          </span>
        </div>

        <div className="rounded-xl border border-dashed border-zinc-300 dark:border-zinc-800 p-12 text-center text-sm text-zinc-400">
          Structural placeholder for Raise
        </div>
      </div>
    </div>
  );
}
