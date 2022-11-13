import React from 'react'
import ResumeItem from '../ResumeItem'
import * as c from "./styles"

import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown, FaDollarSign } from "react-icons/fa";

const Resume = ({ income, expense, total }) => {
    return (
        <c.Container>
            <ResumeItem title="Entradas" Icon={FaRegArrowAltCircleUp} value={income} />
            <ResumeItem title="Saídas" Icon={FaRegArrowAltCircleDown} value={expense} />
            <ResumeItem title="Total" Icon={FaDollarSign} value={total} />
        </c.Container>
    )
}

export default Resume