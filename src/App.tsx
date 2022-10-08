import type { Component } from "solid-js";
import { createStore } from "solid-js/store";
import { onMount } from "solid-js";

const App: Component = () => {
  const [quote, setQuote] = createStore({ text: "", author: "" });
  const random = () => {
    fetch('https://api.quotable.io/random').then(res => res.json()).then(data => {
      setQuote({ text: data.content, author: data.author });
    });
  }
  onMount(random);
  return (
    <>
      <div class="grid h-screen place-items-center">
        <div>
          <div class="flex flex-col justify-center gap-6">
            <p class="md:text-8xl text-6xl m-4 text-center font-bold animate-bounce">
              Awesome Quotes
            </p>
            <div class="text-3xl text-center animate-pop container max-w-3xl">
                      <span
                        class="before:block before:absolute before:-inset-4 before:bg-blue-500 before:-skew-y-2 before:rounded-lg relative inline-block">
                          <p class="relative text-white">
                              <a href="/?id={quote.id}">{quote.text || "Loading..."}</a>
                          </p>
                      </span>
              <p class="text-black mt-8">
                {quote.author || "Unknown"}
              </p>
            </div>
            <center>
              <button onClick={() => random()}
                      class="bg-blue-500 text-white px-4 py-2 rounded-lg max-w-sm mt-8 hover:bg-blue-600 active:scale-90 duration-200">
                Random
              </button>
            </center>
          </div>
        </div>
      </div>
      <div class="absolute top-0 left-0 p-2 text-gray-500">
        By <a href="https://github.com/tinarskii">Tinnaphat Somsang (@tinarskii)</a>
      </div>
      <div class="absolute top-0 right-0 p-2 text-gray-500">
        <a href="https://github.com/tinarskii/awesolid-quotes">Github</a>
      </div>
    </>
);
};

export default App;
