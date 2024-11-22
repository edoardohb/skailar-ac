export default function ClientSection() {
  return (
    <section
      id="clients"
      className="text-center mx-auto max-w-[80rem] px-6 md:px-8"
    >
      <div className="py-14">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <h2 className="text-center text-sm font-semibold text-gray-600">
            TRUSTED BY TEAMS FROM AROUND THE WORLD
          </h2>
          <div className="mt-6">
            <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-16 [&_path]:fill-white">
              <li>
                <img
                  src={`/fiveguard.svg`}
                  className="h-8"
                />
              </li>
              <li>
                <img
                  src={`/santa.png`}
                  className="h-12 px-2"
                />
              </li>
              <li>
                <img
                  src={`/rac.png`}
                  className="h-20 px-2"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
