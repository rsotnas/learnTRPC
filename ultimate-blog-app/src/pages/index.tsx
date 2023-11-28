import React from 'react';
import {IoReorderThreeOutline} from 'react-icons/io5';
import {BsBell} from 'react-icons/bs';
import {FiEdit} from 'react-icons/fi';
import {CiSearch} from 'react-icons/ci';
import {HiChevronDown} from 'react-icons/hi';

const HomePage = () => {
  return (
    <div className='flex flex-col w-full h-full'>
      <header className='h-20 w-full flex flex-row justify-around items-center bg-white border-b-[1px] border-gray-200'>
        <div>
          <IoReorderThreeOutline className="text-2xl text-gray-600" />
        </div>
        <div className='font-thin text-xl'>Ultimate Blog Post</div>
        <div className='flex items-center space-x-4'>
          <div>
            <BsBell className="text-2xl text-gray-600" />
          </div>
          <div>
            <div className='w-5 h-5 bg-gray-600 rounded-full' />
          </div>
          <div>
            <button className="flex transition hover:border-gray-900 hover:text-gray-900 items-center space-x-3 rounded border border-gray-200 px-4 py-2">
              <div>Write</div>
              <div>
                <FiEdit/>
              </div>
            </button>
          </div>
        </div>
      </header>
      <section className='grid grid-cols-12  w-full h-full'>
        <main className='col-span-8 border-r border-gray-300 w-full h-full px-24'>
          <div className='flex flex-col space-y-4 py-10'>
            <div className='flex space-x-4 items-center w-full'>
              <label htmlFor='search' className='relative w-full border-gray-900 border rounded-3xl'>
                <div className='absolute left-2 h-full flex items-center'>
                  <CiSearch />
                </div>
                <input 
                  type="text" 
                  name="search" 
                  id="search" 
                  className='w-full pr-6 rounded-3xl outline-none py-2 px-4 pl-7  placeholder:text-gray-400 placeholder:text-sm'
                  placeholder='Search...'
                />
              </label>
              <div className='flex items-center w-full space-x-4 justify-end'>
                <div>
                  My topics:
                </div>
                <div className='flex space-x-2 items-center'>
                  {
                    Array.from({length: 5}).map((_, i) => (
                      <div key={i} className='rounded-3xl bg-gray-200/90 px-4 py-3' >tag {i}</div>
                    ))
                  }
                </div>
              </div>
            </div>
            <div className='w-full justify-between flex items-center border-b border-gray-300 pb-6'>
                <div>
                  Article
                </div>
                <div>
                  <button className='flex space-x-2 items-center border border-gray-800 rounded-3xl px-3 py-1.5 font-semibold'>
                    <div>
                      Following
                    </div>
                    <div>
                      <HiChevronDown className='text-xl font-bold'/>
                    </div>
                  </button>
                </div>
              </div>
          </div>
          <div className="w-full flex flex-col justify-center space-y-8">
            {  
              Array.from({length:5}).map((_, i) => (
                <div key={i} className="flex group flex-col space-y-4 border-b border-gray-300 py-8 last:border-none">
                  <div className="flex w-full items-center space-x-2">
                    <div className="h-10 w-10 bg-gray-400 rounded-full">
                    </div>
                    <div>
                      <p className="font-semibold">
                        Felipe Santos &bull; 28 Nov. 2023
                      </p>
                      <p className="text-sm">
                        Full Stack Developer
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 gap-4 w-full">
                    <div className="col-span-8 flex flex-col space-y-4">
                      <p className="text-2xl font-bold text-gray-800 group-hover:underline decoration-indigo-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, dolores?
                      </p>
                      <p className="text-sm text-gray-500 break-words">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione laboriosam nostrum consequuntur laudantium, dignissimos necessitatibus enim assumenda voluptate. Quibusdam repudiandae non incidunt iusto asperiores fugit, dolores temporibus culpa rem sequi doloremque reprehenderit laborum nemo officia delectus praesentium quas. Ullam sequi illo omnis minus accusamus possimus ducimus, natus incidunt magni labore, id harum consectetur, alias eum at cum. Quos, ipsa delectus.
                      </p>
                    </div>
                    <div className="col-span-4">
                      <div className="bg-gray-300 w-full h-full rounded-xl transition hover:scale-105 duration-300 hover:shadow-xl"></div>
                    </div>
                  </div>
                  <div className="col-span-full">
                    <div className='flex items-center w-full space-x-4 justify-start'>
                      <div className='flex space-x-2 items-center'>
                        {
                          Array.from({length: 5}).map((_, i) => (
                            <div key={i} className='rounded-2xl bg-gray-200/90 px-6 py-2.5' >tag {i}</div>
                          ))
                        }
                      </div>
                    </div>
                  </div>  
                </div>
              ))
            }
          </div>
        </main>
        <aside className='col-span-4 w-full h-full p-6 flex flex-col space-y-4'>
          <div>
            <h3 className="my-6 text-lg font-semibold">
              People you might be interested
            </h3>
            <div className="flex flex-col space-y-4">
              {
                Array.from({length: 4}).map((_,i) => (
                  <div key={i} className="flex flex-row space-x-4 items-center">
                    <div className="bg-gray-500 w-10 h-10 flex-none rounded-full">

                    </div>
                    <div>
                      <div className="text-gray-900 font-bold text-sm">Lorem ipsum</div>
                      <div className="text-xs">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus quaerat cum adipisci incidunt dignissimos?</div>
                    </div>
                    <div>
                      <button className="flex transition hover:border-gray-900 hover:text-gray-900 items-center space-x-3 rounded border border-gray-500 px-4 py-2">
                        Follow
                      </button>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          <div>
            <h3 className="my-6 text-lg font-semibold">
              Your reading list
            </h3>
            <div className="flex flex-col space-y-8">
              {
                Array.from({length: 5}).map((_,i) => (
                  <div key={i} className="flex space-x-6 items-center group">
                    <div className="w-2/5 bg-gray-400 rounded-xl h-full aspect-square">

                    </div>
                    <div className="w-3/5 flex flex-col space-y-2">
                      <div className="text-lg font-semibold group-hover:underline decoration-indigo-300">Lorem ipsum dolor sit amet consectetur.</div>
                      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, pariatur!</div>
                      <div className="font-semibold flex space-x-1 items-center w-full">
                        <div className="h-8 w-8 bg-gray-300 rounded-full"></div>
                        <p>
                          Felipe Santos
                        </p>
                        <p>
                        &bull; 28 Nov. 2023
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </aside>
      </section>
    </div>    
 );
}

export default HomePage;
