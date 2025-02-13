import { IsEditableProvider } from "../context/isEditableContext";
import { TodoContextProvider } from "../context/TodoContext";
import TodoContainer from "./TodoContainer";

const Home = () => {
  return (
    <main
      className="bg-zinc-950 min-h-screen flex items-center justify-center "
      style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none'  stroke-width='0.5' stroke='%2318181b'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
      }}
    >
      <div className="max-w-xl mx-auto p-5 text-white w-full">
        <h2 className="text-4xl">Assigned Task 💫</h2>
        <p className="text-gray-400 text-lg mt-0.5">Let&apos; see what we&apos;ve got today </p>
        {/* ----------------------------- todo container ----------------------------- */}
        <div className="mt-5">
          <TodoContextProvider>
            <IsEditableProvider>
              <TodoContainer />
            </IsEditableProvider>
          </TodoContextProvider>
        </div>
      </div>
    </main>
  );
};

export default Home;
