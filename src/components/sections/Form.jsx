import Button from "../Button.jsx";
import Input from "../Input.jsx";
import { useState } from "react";

function Form() {
    const [text, setText] = useState("");
    const [output, setOutput] = useState("");

    return (
        <>
            <div className='d-flex gap-3 justify-content-center pb-3'>
                <Input
                    type="text"
                    placeholder="Введіть текст"
                    value={text}
                    onChange={(event) => {
                        console.log(event.target.value)
                        setText(event.target.value)
                    }
                    }
                />
                <Button
                    type="button"
                    text="Click Me!"
                    onClick={() => {
                        setOutput(text)
                        setText("")
                    }
                    }
                />
            </div>
            <div id="out">{output}</div>
        </>
    )
}

export default Form;