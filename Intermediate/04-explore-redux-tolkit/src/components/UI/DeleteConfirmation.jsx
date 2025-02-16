import { useEffect } from "react";

const DeleteConfirmation = ({ showModal, onDelete }) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => (document.body.style.overflowY = "auto");
  }, []);

  return (
    <div className="h-screen select-none fixed inset-0 flex items-center justify-center bg-black/60">
      <div className="p-6 bg-white rounded-md shadow-lg">
        <h2 className="text-lg font-semibold">Are you sure?</h2>
        <p className="text-gray-600">Do you really want to delete this item?</p>
        <div className="flex gap-4 mt-4 ">
          <button onClick={showModal} className="px-4 py-2 hover:bg-gray-500 bg-gray-300 rounded-md cursor-pointer">
            Cancel
          </button>
          <button onClick={onDelete} className="px-4 py-2 bg-red-500 hover:bg-red-800 text-white rounded-md cursor-pointer">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmation;
