import React from "react";
import { CiSearch } from "react-icons/ci";
import { HiChevronDown } from "react-icons/hi";
import { MainLayout } from "src/layouts/MainLayout";
import WriteFormModal from "src/components/WriteFormModal";

const HomePage = () => {
  return (
    <MainLayout>
      <section className="grid h-full  w-full grid-cols-12">
        <main className="col-span-8 h-full w-full border-r border-gray-300 px-24">
          <div className="flex flex-col space-y-4 py-10">
            <div className="flex w-full items-center space-x-4">
              <label
                htmlFor="search"
                className="relative w-full rounded-3xl border border-gray-900"
              >
                <div className="absolute left-2 flex h-full items-center">
                  <CiSearch />
                </div>
                <input
                  type="text"
                  name="search"
                  id="search"
                  className="w-full rounded-3xl px-4 py-2 pl-7 pr-6 outline-none  placeholder:text-sm placeholder:text-gray-400"
                  placeholder="Search..."
                />
              </label>
              <div className="flex w-full items-center justify-end space-x-4">
                <div>My topics:</div>
                <div className="flex items-center space-x-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div
                      key={i}
                      className="rounded-3xl bg-gray-200/90 px-4 py-3"
                    >
                      tag {i}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex w-full items-center justify-between border-b border-gray-300 pb-6">
              <div>Article</div>
              <div>
                <button className="flex items-center space-x-2 rounded-3xl border border-gray-800 px-3 py-1.5 font-semibold">
                  <div>Following</div>
                  <div>
                    <HiChevronDown className="text-xl font-bold" />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col justify-center space-y-8">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="group flex flex-col space-y-4 border-b border-gray-300 py-8 last:border-none"
              >
                <div className="flex w-full items-center space-x-2">
                  <div className="h-10 w-10 rounded-full bg-gray-400"></div>
                  <div>
                    <p className="font-semibold">
                      Felipe Santos &bull; 28 Nov. 2023
                    </p>
                    <p className="text-sm">Full Stack Developer</p>
                  </div>
                </div>
                <div className="grid w-full grid-cols-12 gap-4">
                  <div className="col-span-8 flex flex-col space-y-4">
                    <p className="text-2xl font-bold text-gray-800 decoration-indigo-600 group-hover:underline">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Consequatur, dolores?
                    </p>
                    <p className="break-words text-sm text-gray-500">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Ratione laboriosam nostrum consequuntur laudantium,
                      dignissimos necessitatibus enim assumenda voluptate.
                      Quibusdam repudiandae non incidunt iusto asperiores fugit,
                      dolores temporibus culpa rem sequi doloremque
                      reprehenderit laborum nemo officia delectus praesentium
                      quas. Ullam sequi illo omnis minus accusamus possimus
                      ducimus, natus incidunt magni labore, id harum
                      consectetur, alias eum at cum. Quos, ipsa delectus.
                    </p>
                  </div>
                  <div className="col-span-4">
                    <div className="h-full w-full rounded-xl bg-gray-300 transition duration-300 hover:scale-105 hover:shadow-xl"></div>
                  </div>
                </div>
                <div className="col-span-full">
                  <div className="flex w-full items-center justify-start space-x-4">
                    <div className="flex items-center space-x-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div
                          key={i}
                          className="rounded-2xl bg-gray-200/90 px-6 py-2.5"
                        >
                          tag {i}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
        <aside className="col-span-4 flex h-full w-full flex-col space-y-4 p-6">
          <div>
            <h3 className="my-6 text-lg font-semibold">
              People you might be interested
            </h3>
            <div className="flex flex-col space-y-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="flex flex-row items-center space-x-4">
                  <div className="h-10 w-10 flex-none rounded-full bg-gray-500"></div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">
                      Lorem ipsum
                    </div>
                    <div className="text-xs">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Possimus quaerat cum adipisci incidunt dignissimos?
                    </div>
                  </div>
                  <div>
                    <button className="flex items-center space-x-3 rounded border border-gray-500 px-4 py-2 transition hover:border-gray-900 hover:text-gray-900">
                      Follow
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="my-6 text-lg font-semibold">Your reading list</h3>
            <div className="flex flex-col space-y-8">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="group flex items-center space-x-6">
                  <div className="aspect-square h-full w-2/5 rounded-xl bg-gray-400"></div>
                  <div className="flex w-3/5 flex-col space-y-2">
                    <div className="text-lg font-semibold decoration-indigo-300 group-hover:underline">
                      Lorem ipsum dolor sit amet consectetur.
                    </div>
                    <div>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Veritatis, pariatur!
                    </div>
                    <div className="flex w-full items-center space-x-1 font-semibold">
                      <div className="h-8 w-8 rounded-full bg-gray-300"></div>
                      <p>Felipe Santos</p>
                      <p>&bull; 28 Nov. 2023</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </section>
      <WriteFormModal />
    </MainLayout>
  );
};

export default HomePage;
