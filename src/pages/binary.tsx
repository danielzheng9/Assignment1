import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";

export function Binary() {
    const [isQuestionOneCorrect, setIsQuestionOneCorrect] = useState<boolean | undefined>();
    const questionOneInput = useRef<string>("");
    return <>
        <h1>What is Binary</h1>
        <p>
            In the movies, you hear it as this magical computing language that people modify directly to gain access to the mainframe. You look at binary at the first time and see "10101010101" (not an accurate representation), you say WOW!
        </p>
        <p>
            But, binary is actually just another name for base-2. Binary uses two states [ON, OFF] to store data.
            People usually use the numbers 0, and 1 to represent the states as text - 0 meaning off, and 1 meaning on.
        </p>
        <p>
            A misconception people usually make is that binary can be directly decoded to text.
            This is not the case, binary is simply a number format. Instead, the people are referring probably referring to text lookup tables like ASCII that allows you to convert a number to a character. Chain this, and you can make a sentence just from numbers!
        </p>
        <p>
            Note: This article is referring to the original ASCII.
            Extended ASCII is not to be confused with ASCII; Extended ASCII is a version later made to use the full 8 bits, to allow things like special symbols.
        </p>
        <p>
            The original ASCII only had 7 bits (128 characters).
            Padded ASCII — The one we are going to talk about — It does have 8 bits, but the first bit is just always off (0) and used as padding.
        </p>
        <NavLink to="/blogs/ascii">
        click here to know about ASCII
        </NavLink>
        <p>In a binary number, each bit is twice the value of the bit on the right of this bit. The first bit on the very right has a value of 1.</p>
        <table className="scientificTable">
            <thead>
            <tr>
                <th>Bit 0 (Padded ASCII)</th>
                <th>Bit 1</th>
                <th>Bit 2</th>
                <th>Bit 3</th>
                <th>Bit 4</th>
                <th>Bit 5</th>
                <th>Bit 6</th>
                <th>Bit 7 💀</th>
                <th>Total</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>0</td>
                <td>64</td>
                <td>32</td>
                <td>16</td>
                <td>8</td>
                <td>4</td>
                <td>2</td>
                <td>1</td>
                <td>255</td>
            </tr>
            </tbody>
        </table>
        <p>
            When a bit is flipped on, that bit's value gets added to the total.
            Let's take a look at an example.
        </p>
        <code>0 0 1 0 0 1 0 1</code>
        <p className="ghost">0 is off, 1 is on</p>
        <table className="scientificTable">
            <thead>
            <tr>
                <th>Bit 0 (OFF)</th>
                <th>Bit 1 (OFF)</th>
                <th>Bit 2 (ON)</th>
                <th>Bit 3 (OFF)</th>
                <th>Bit 4 (OFF)</th>
                <th>Bit 5 (ON)</th>
                <th>Bit 6 (OFF)</th>
                <th>Bit 7 💀 (ON)</th>
                <th>Total</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>0</td>
                <td>0</td>
                <td>32</td>
                <td>0</td>
                <td>0</td>
                <td>4</td>
                <td>0</td>
                <td>1</td>
                <td>255</td>
            </tr>
            </tbody>
        </table>
        <p>32 + 4 + 1 = 37.</p>
        <p>Let's look that up in our lookup table at <NavLink to="/blogs/ascii">
        the encoding system of ascii
        </NavLink></p>
        <strong>Question: What is the number <code>37</code> in the ASCII table?</strong>
            {isQuestionOneCorrect !== undefined ? 
            (
                isQuestionOneCorrect ? <p>congratulations you are correct (also scroll down)</p>: <p>no you are not correct. go look it up again in the attached link</p>
            ) : <></>}
        <div>
        <input type="text" placeholder="Answer..." onChange={(thisThing) => {
            questionOneInput.current = thisThing.target.value;
        }}/>
        <button onClick={() => {
            setIsQuestionOneCorrect(questionOneInput.current === "%");
        }}>Am I Correct?</button>
        </div>
        { isQuestionOneCorrect ? 
        <><strong>
            Now you now how binary works!
        </strong>
        <p>
            Computers chain unimaginable amounts of binary numbers to represent what you're looking at right now.
        </p></> : <></>}
    </>;
}