import { FaPlus } from "react-icons/fa";

const AddTaskButton = ({ clickFn }) => {
  return (
    <button
      type="submit"
      onClick={clickFn}
      className="bg-stone-800   h-12 border border-stone-700   flex items-center justify-center rounded-md relative group  smooth-transition  px-15"
    >
      <span className="pt-1 smooth-transition group-hover:pr-3 ">Add </span>
      <FaPlus className="translate-x-10 absolute rotate-45 opacity-0 group-hover:opacity-100 group-hover:rotate-0 group-hover:translate-x-7 smooth-transition" />
    </button>
  );
};

export default AddTaskButton;
