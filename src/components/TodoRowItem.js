function TodoRowItem(pros) {

    return (
        <tr>
            <th scope='row'>{pros.rowNumber}</th>
            <td>{pros.rowDescription}</td>
            <td>{pros.rowAssigned}</td>
        </tr>
    );
}

export default TodoRowItem;