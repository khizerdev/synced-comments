import { useState } from 'react';
import { io } from 'socket.io-client';
import './index.css';
const socket = io.connect('http://localhost:3001');

function App() {
  const sendMessage = () => {
    console.log('Hello');
  };

  return (
    <section className="flex max-w-[75%] justify-center mx-auto mt-5">
      <div className="flex justify-center gap-10">
        <div className="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md">
          <div className="mt-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="ms-3 flex-1">
                  <a href="" className="text-lg font-semibold hover:text-orange-500 duration-500">
                    Calvin Carlo
                  </a>
                  <p className="text-sm text-slate-400">6th May 2022 at 01:25 pm</p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-slate-800 rounded-md shadow dark:shadow-gray-800 mt-6">
              <p className="text-slate-400 italic">
                " There are many variations of passages of Lorem Ipsum available, but the majority
                have suffered alteration in some form, by injected humour "
              </p>
            </div>
          </div>
        </div>
        <div className="p-6 rounded-md shadow dark:shadow-gray-800 mt-8 w-[50%]">
          <h5 className="text-lg font-semibold">Leave A Comment:</h5>
          <div className="mt-8">
            <div className="grid grid-cols-1">
              <div className="mb-5">
                <div className="text-start">
                  <label htmlFor="comments" className="font-semibold">
                    Your Comment:
                  </label>
                  <div className="form-icon relative mt-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-message-circle w-4 h-4 absolute top-3 start-4"
                    >
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    </svg>
                    <textarea
                      name="comments"
                      id="comments"
                      className="ps-11 w-full py-2 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                      placeholder="Message :"
                      defaultValue={''}
                    />
                  </div>
                </div>
              </div>
            </div>
            <button
              type="submit"
              id="submit"
              name="send"
              onClick={sendMessage}
              className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-orange-500 text-white rounded-md w-full"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
