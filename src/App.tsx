function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex-none w-full max-w-screen-lg p-8">
        <div className="relative z-10 mx-auto text-black shadow-xl lg:mx-0 xl:mx-auto">
          <figure className="p-8 overflow-hidden bg-white md:flex rounded-xl">
            <div className="md:mr-8 md:-m-8 md:flex-none">
              <img
                className="w-32 h-32 mx-auto rounded-full md:w-48 md:h-auto md:rounded-none"
                src="https://tailwindcss.com/_next/static/media/sarah-dayan.a8ff3f1095a58085a82e3bb6aab12eb2.jpg"
                alt=""
                width="384"
                height="512"
              />
            </div>
            <div className="pt-6 space-y-4 text-center md:p-8 md:text-left">
              <blockquote>
                <p className="text-lg font-semibold">
                  “Tailwind CSS is the only framework that I've seen scale on large teams.It’s easy to customize, adapts
                  to any design, and the build size is tiny.”
                </p>
              </blockquote>
              <figcaption className="font-medium">
                <div className="text-purple-400">Sarah Dayan</div>
                <div className="text-gray-500">Staff Engineer, Algolia</div>
              </figcaption>
            </div>
          </figure>
        </div>
      </div>
    </div>
  );
}

export default App;
