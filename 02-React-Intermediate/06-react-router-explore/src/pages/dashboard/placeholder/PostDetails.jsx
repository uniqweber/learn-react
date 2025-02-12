import { BiLeftArrow } from "react-icons/bi";
import { useNavigate, useParams } from "react-router";
import useFetch from "../../../hooks/useFetch";

const PostDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, loading] = useFetch("posts/" + id, {});
  return (
    <div className="h-full w-full p-5">
      <div className="bg-white p-5">
        <button onClick={() => navigate(-1)} className="flex items-center text-sm gap-3 py-2 px-8 rounded-full bg-gray-700 text-white">
          <BiLeftArrow />
          <span>Back to Previous</span>
        </button>
        <div className="mt-10 border-4 border-gray-300 p-5">
          {loading ? (
            <div className="h-96 flex items-center justify-center">Loading....</div>
          ) : (
            <div>
              <h4 className="text-center text-3xl py-4 text-gray-600">
                Post Details of - <span className="text-blue-600">{id.toString().padStart(2, "0")}</span>
              </h4>
              <div>
                <h2 className="text-lg uppercase  mb-3">id {data.id?.toString().padStart(2, "0")}</h2>
                <h2 className="text-3xl ">{data.title}</h2>
                <p className="text-xl mt-4 text-gray-500 font-light">{data.body}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
