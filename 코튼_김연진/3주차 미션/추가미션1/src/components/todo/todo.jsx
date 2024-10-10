import * as S from './todo.style.js';
import { Link } from 'react-router-dom';

function Todo(props) {
    const { title, checked, id, onDelete, onCheck } = props;

    return (
        <S.Container>
            <S.Checkbox
                type="checkbox"
                checked={checked}
                onChange={() => onCheck(id)}
            />
            <S.Title to={`/todo/${id}`}>{title}</S.Title>
            <S.Button as={Link} to={`/`} onClick={() => onDelete(id)}>
                X
            </S.Button>
        </S.Container>
    );
}

export default Todo;