import { useNavigate } from "react-router";
import useFetch from "../../../hooks/useFetch";

const AllPost = () => {
  const [data, loading] = useFetch("posts?userId=1");
  const navigate = useNavigate();

  return (
    <div className="bg-white p-10">
      <h2 className="text-3xl pt-3 border-b-4 pb-2 border-gray-300">All POST</h2>
      <div className="pt-10 grid-cols-3 grid gap-1">
        {loading ? (
          <div className="h-96 flex items-center justify-center">Loading....</div>
        ) : (
          data?.map(({ id, title }) => (
            <div key={id} className=" border p-5 rounded-md border-gray-300 hover:bg-gray-300 cursor-pointer">
              <div className="flex items-center justify-between mb-2">
                <p className="w-10 text-xl border text-center ">{id}</p>
                <button onClick={() => navigate(`${id}`)} className="bg-black text-white text-base px-8 py-2 rounded-full">
                  See Post
                </button>
              </div>
              <h2 className="text-2xl truncate">{title}</h2>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AllPost;
