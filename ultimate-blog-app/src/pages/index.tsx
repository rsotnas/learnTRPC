import React from 'react';
import {IoReorderThreeOutline} from 'react-icons/io5';
import {BsBell} from 'react-icons/bs';
import {FiEdit} from 'react-icons/fi';
import {CiSearch} from 'react-icons/ci';
import {HiChevronDown} from 'react-icons/hi';

const HomePage = () => {
  return (
    <div className='flex flex-col w-full h-screen'>
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
      <section className='grid grid-cols-12 place-items-center w-full h-full'>
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
                      <div className="font-semibold">
                        Felipe Santos &bull; 28 Nov. 2023
                      </div>
                      <div className="text-sm">
                        Full Stack Developer
                      </div>
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
        <aside className='col-span-4 w-full h-full'>
          aside section
        </aside>
      </section>
    </div>    
 );
}

export default HomePage;
