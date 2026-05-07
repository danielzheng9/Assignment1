export function Binary() {
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
            This is not the case, binary is simply a number format. Instead, the people are referring to a system called ASCII that allows you to convert numbers from 0-255 to a character (32-127 is the range of readable/english characters, the rest are for formatting). Chain this, and you can make a sentence from numbers!
        </p>
    </>;
}