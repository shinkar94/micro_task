import React from "react";

type StudentsType = {
    students: StudentsArrayType[]
}

type StudentsArrayType = {
    name: string
    mark: string

}

export const Students = (props: StudentsType) => {
    return (
        <>
            <table>
                <tr>
                    <th>Name auto</th>
                    <th>Mark auto</th>
                </tr>
                {props.students.map((el, index) => {
                    return (
                        <tr key={index + 1}>
                            <td>{el.name}</td>
                            <td>{el.mark}</td>
                        </tr>
                    )
                })}
            </table>
        </>
    )
}