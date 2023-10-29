import JavaScript from "./JavaScript";
import PathParameters from "./PathParameters";
import DynamicStyling from "./DynamicStyling";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoItem from "./Todo/TodoItem";
import TodoList from "./Todo/TodoList";
import {useSelector} from "react-redux";

function Assignment3() {
    const { todos } = useSelector((state) => state.todosReducer);

    return (
        <div>
            <h1>Assignment 3</h1>
            <ul className="list-group">
                {todos.map((todo) => (
                    <li className="list-group-item" key={todo.id}>
                        {todo.title}
                    </li>
                ))}
            </ul>
            <TodoList/>
            <TodoItem/>
            <ConditionalOutput/>
            <Styles/>
            <DynamicStyling/>
            <PathParameters/>
            <JavaScript/>
        </div>
    );
}
export default Assignment3;