import React from 'react'
import GridItem from "../GridItem";
import * as c from "./styles";

const Grid = ({ itens, setItens }) => {

    const onDelete = (ID) => {
        const newArray = itens.filter((transaction) => transaction.id !== ID);
        setItens(newArray);
        localStorage.setItem("transactions", JSON.stringify(newArray));
    };


    return (
        <c.Table>
            <c.Thead>
                <c.Tr>
                    <c.Th width={40}>Descrição</c.Th>
                    <c.Th width={40}>Valor</c.Th>
                    <c.Th width={10} alignCenter>
                        Tipo
                    </c.Th>
                    <c.Th width={10}></c.Th>
                </c.Tr>
            </c.Thead>

            <c.Tbody>
                {itens?.map((item, index) => (
                    <GridItem key={index} item={item} onDelete={onDelete} />
                ))}
            </c.Tbody>
        </c.Table>
    )
}

export default Grid