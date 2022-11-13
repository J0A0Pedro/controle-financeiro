import React from 'react'
import * as c from "./styles";
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown, FaTrash } from "react-icons/fa";

const GridItem = ({ item, onDelete }) => {
    return (
        <c.Tr>
            <c.Td>{item.desc}</c.Td>
            <c.Td>{item.amount}</c.Td>

            <c.Td alignCenter>
                {item.expense ? (
                    <FaRegArrowAltCircleDown color="red" />
                ) : (
                    <FaRegArrowAltCircleUp color="gree" />
                )}
            </c.Td>

            <c.Td alignCenter>
                <FaTrash onClick={() => onDelete(item.id)} />
            </c.Td>
        </c.Tr>
    )
}

export default GridItem