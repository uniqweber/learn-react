import { createContext, useContext, useState } from "react";

const IsEditableContext = createContext();

export const IsEditableProvider = ({ children }) => {
  const [editableId, setEditableId] = useState(null);

  const toggleEditable = (id) => setEditableId((prevId) => (prevId === id ? null : id)); // আগেরটা বন্ধ করে নতুনটা ওপেন করবো

  return <IsEditableContext.Provider value={{ editableId, toggleEditable }}>{children}</IsEditableContext.Provider>;
};

export const useEditable = () => {
  const context = useContext(IsEditableContext);
  if (!context) throw new Error("useEditable must be used within IsEditableProvider");
  return context;
};
