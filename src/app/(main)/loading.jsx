
export default function Loading() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* NAVBAR */}
      <div className="sticky top-0 z-50 bg-neutral-900">
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-6">
          {/* Logo */}
          <div className="h-8 w-28 rounded skeleton" />

          {/* Search */}
          <div className="hidden md:block flex-1">
            <div className="h-10 w-full rounded-lg skeleton" />
          </div>

          {/* Menu */}
          <div className="flex gap-3">
            <div className="h-8 w-16 rounded skeleton" />
            <div className="h-8 w-16 rounded skeleton" />
            <div className="h-8 w-10 rounded-full skeleton" />
          </div>
        </div>
      </div>

      {/* MAIN */}
      <main className="mx-auto max-w-7xl px-10 pt-10">
        {/* BANNER */}
        <div className="mb-10 h-[400px] w-full rounded-3xl skeleton" />

        {/* TRENDING TITLE */}
        <div className="mb-4 h-6 w-40 rounded skeleton" />
        <div className="mb-8 h-4 w-64 rounded skeleton" />

        {/* GAME LIST */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 pt-5 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="flex items-center gap-4 rounded-2xl bg-neutral-900 p-4"
            >
              {/* Avatar */}
              <div className="h-14 w-14 rounded-xl skeleton" />

              {/* Text */}
              <div className="flex-1">
                <div className="mb-2 h-4 w-3/4 rounded skeleton" />
                <div className="h-3 w-1/2 rounded skeleton" />
              </div>
            </div>
          ))}
        </div>
        
      </main>
      
      <div className=" h-16 bg-neutral-900 max-w-7xl mx-auto mt-32 flex justify-center items-center">
        <div className="w-full h-10 skeleton "></div>
      </div>
    </div>
  );
}
