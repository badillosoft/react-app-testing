import React, { useState } from "react";

export default function Counter({ start }) {
    const [count, setCount] = useState(start || 0);

    return (
        <div className="d-flex flex-column align-items-center border p-4">
            <span>{count}</span>
            <div className="pt-2">
                <button className="btn btn-primary mx-2" onClick={() => {
                    setCount(count + 1);
                }}>inc</button>
                <button className="btn btn-danger mx-2" onClick={() => {
                    if (count > (start || 0)) {
                        setCount(count - 1);
                    }
                }}>dec</button>
                <button className="btn btn-info mx-2" onClick={() => {
                    setCount(start || 0);
                }}>reset</button>
            </div>
        </div>
    )
}