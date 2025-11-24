import React, { useState } from "react";

const Todo = () => {
  const [list, setList] = useState([]);
  const [todoName, settodoName] = useState("");
  const [editId, setEditId] = useState(null);

  const handleSubmit = () => {
    if (!!editId) {
      const editedData = list?.map((i) => {
        if (i?.id === editId) {
          return { ...i, title: todoName };
        }
        return i;
      });
      setList(editedData);
    } else {
      setList((prev) => [
        ...prev,
        { id: Date.now(), title: todoName, checked: false },
      ]);
      settodoName("");
    }
    setEditId(null);
    settodoName("");
  };

  const handleEdit = (id, curr) => {
    setEditId(id);
    settodoName(curr);
  };

  const handleChecked = (id, value) => {
    const checkedData = list?.map((i) => {
      if (i?.id === id) {
        return { ...i, checked: value };
      }
      return i;
    });
    setList(checkedData);
  };

  return (
    <>
      <input
        value={todoName}
        className="border border-stone-500"
        onChange={(e) => settodoName(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
      {list?.map((i) => {
        return (
          <div key={i?.id} className="flex gap-5">
            <div>{i?.title}</div>
            <div>
              <button onClick={() => handleEdit(i?.id, i?.title)}>Edit</button>
            </div>
            <div>
              <input
                type={"checkbox"}
                onChange={(e) => handleChecked(i?.id, e.target.checked)}
              />
            </div>
            {i?.checked ? "done✅" : "Processing🏦"}
          </div>
        );
      })}
    </>
  );
};
export default Todo;
