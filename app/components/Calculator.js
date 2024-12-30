"use client";
import { useState } from "react";

const Calculator = () => {
    const [input, setInput] = useState("");

    const handleButtonClick = (value) => {
        setInput((prevData) => prevData + value);
    };

    const handleClear = () => {
        setInput("");
    };

    const handleEvaluate = () => {
        try {
            setInput(eval(input).toString());
        } catch (error) {
            setInput("Invalid Expression");
        }
    };

    return (
        <div className="flex flex-col justify-center items-center mt-[150px] space-y-2">
            <h1 className="text-5xl text-violet-500 font-bold mb-3">Calculator</h1>
            <input
                type="text"
                className="w-64 h-12 border border-gray-300 rounded-lg px-2"
                value={input}
                onChange={(e) => setInput(e.target.value)} 
            />
            <div className="space-x-2">
                <button className="h-12 w-12 border border-gray-300 bg-gray-100 rounded-lg" onClick={() => handleButtonClick("(")}>
                    {"("}
                </button>
                <button className="h-12 w-12 border border-gray-300 bg-gray-100 rounded-lg" onClick={() => handleButtonClick(")")}>
                    {")"}
                </button>
                <button className="h-12 w-12 border border-gray-300 bg-gray-100 rounded-lg" onClick={() => handleButtonClick("%")}>
                    %
                </button>
                <button className="h-12 w-12 border border-gray-300 bg-gray-100 rounded-lg" onClick={handleClear}>
                    AC
                </button>
            </div>
            <div className="space-x-2">
                <button className="h-12 w-12 border border-gray-300 bg-gray-100 rounded-lg" onClick={() => handleButtonClick("7")}>7</button>
                <button className="h-12 w-12 border border-gray-300 bg-gray-100 rounded-lg" onClick={() => handleButtonClick("8")}>8</button>
                <button className="h-12 w-12 border border-gray-300 bg-gray-100 rounded-lg" onClick={() => handleButtonClick("9")}>9</button>
                <button className="h-12 w-12 border border-gray-300 bg-gray-100 rounded-lg" onClick={() => handleButtonClick("/")}>/</button>
            </div>
            <div className="space-x-2">
                <button className="h-12 w-12 border border-gray-300 bg-gray-100 rounded-lg" onClick={() => handleButtonClick("4")}>4</button>
                <button className="h-12 w-12 border border-gray-300 bg-gray-100 rounded-lg" onClick={() => handleButtonClick("5")}>5</button>
                <button className="h-12 w-12 border border-gray-300 bg-gray-100 rounded-lg" onClick={() => handleButtonClick("6")}>6</button>
                <button className="h-12 w-12 border border-gray-300 bg-gray-100 rounded-lg" onClick={() => handleButtonClick("*")}>*</button>
            </div>
            <div className="space-x-2">
                <button className="h-12 w-12 border border-gray-300 bg-gray-100 rounded-lg" onClick={() => handleButtonClick("1")}>1</button>
                <button className="h-12 w-12 border border-gray-300 bg-gray-100 rounded-lg" onClick={() => handleButtonClick("2")}>2</button>
                <button className="h-12 w-12 border border-gray-300 bg-gray-100 rounded-lg" onClick={() => handleButtonClick("3")}>3</button>
                <button className="h-12 w-12 border border-gray-300 bg-gray-100 rounded-lg" onClick={() => handleButtonClick("-")}>-</button>
            </div>
            <div className="space-x-2">
                <button className="h-12 w-12 border border-gray-300 bg-gray-100 rounded-lg" onClick={() => handleButtonClick("0")}>0</button>
                <button className="h-12 w-12 border border-gray-300 bg-gray-100 rounded-lg" onClick={() => handleButtonClick(".")}>.</button>
                <button className="h-12 w-12 border border-gray-300 bg-gray-100 rounded-lg" onClick={handleEvaluate}>=</button>
                <button className="h-12 w-12 border border-gray-300 bg-gray-100 rounded-lg" onClick={() => handleButtonClick("+")}>+</button>
            </div>
        </div>
    );
};

export default Calculator;
