import React, { useState } from 'react'
import * as c from "./styles";
import Grid from "../Grid/index"

const Form = ({ handleAdd, transactionsList, setTransactionsList }) => {

    const [desc, setDesc] = useState("");
    const [amount, setAmount] = useState("");
    const [isExpense, setIsExpense] = useState(false);

    const generateID = () => Math.round(Math.random() * 1000);


    const handleSave = () => {
        if (!desc || !amount) {
            alert("Informe a descrição e o valor!");
            return;
        }
        else if (amount < 1) {
            alert("O valor tem que ser positivo!");
            return;
        }

        const transaction = {
            id: generateID(),
            desc: desc,
            amount: amount,
            expense: isExpense,
        }

        handleAdd(transaction);

        setDesc("");
        setAmount("");
    };


    return (
        <>
            <c.Container>
                <c.InputContent>
                    <c.Label>Descrição:</c.Label>
                    <c.Input value={desc} onChange={(e) => setDesc(e.target.value)}></c.Input>
                </c.InputContent>

                <c.InputContent>
                    <c.Label>Valor:</c.Label>
                    <c.Input
                        value={amount}
                        type="number"
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </c.InputContent>

                <c.RadioGroup>
                    <c.Input
                        type="radio"
                        id="rIncome"
                        defaultChecked
                        name="group1"
                        onChange={() => setIsExpense(!isExpense)}
                    />

                    <c.Label htmlFor="rIncome">Entrada</c.Label>

                    <c.Input
                        type="radio"
                        id="rExpenses"
                        name="group1"
                        onChange={() => setIsExpense(!isExpense)}
                    />
                    <c.Label htmlFor="rExpenses">Saída</c.Label>
                </c.RadioGroup>

                <c.Button onClick={handleSave}>ADICIONAR</c.Button>
            </c.Container>

            <Grid itens={transactionsList} setItens={setTransactionsList} />
        </>
    )
}

export default Form;