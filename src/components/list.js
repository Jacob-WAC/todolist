import react, { useState } from "react";
const TodoList = (props) => {
    const [newEntry, setNewEntry] = useState({
        text: "",
        checked: false,
    });

    const [listItems, setListItems] = useState([]);

    const createEntry = (e) => {
        e.preventDefault();
        setListItems([...listItems, newEntry]);

        setNewEntry({ text: "", checked: false });
        console.log(listItems);
    };

    const handleChange = (e) => {
        setNewEntry({ [e.target.name]: e.target.value, checked: false });
    };

    const checked = (idx) => {
        const update = listItems.map((item, i) => {
            if (idx === i) {
                item.checked = !item.checked;
            }
            return item;
        });
        setListItems(update);
    };

    return (
        <div className="container">
            <form className="form-group mt-3" id="form" onSubmit={createEntry}>
                <input
                    onChange={(e) => handleChange(e)}
                    className="form-control"
                    type="text"
                    name="text"
                    value={newEntry.text}
                />
                <input
                    className="btn btn-primary mt-3"
                    type="submit"
                    value="add"
                />
            </form>
            <div>
                <ul className="list-group mt-3">
                    {listItems.map((item, i) => {
                        return (
                            <li
                                key={i}
                                className={
                                    item.checked === false
                                        ? "list-group-item"
                                        : "list-group-item text-decoration-line-through"
                                }
                            >
                                <p>{item.text}</p>
                                <input
                                    checked={item.checked}
                                    onChange={(e) => checked(i)}
                                    className="form-check-input ms-3 mt-1"
                                    type="checkbox"
                                    value=""
                                    aria-label="..."
                                ></input>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};
export default TodoList;
