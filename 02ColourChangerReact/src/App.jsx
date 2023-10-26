import { useState } from "react";

function App() {

    const [color, setColor] = useState("olive")

    //Onclick accept aap oosko ek function return karo


    return (
        <>
            <h1>Colour Changer</h1>
            <div className="w-full h-screen duration-200"
                style={{ backgroundColor: color }}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aperiam blanditiis odit iste, corrupti, hic cupiditate similique pariatur vitae animi minus nemo voluptates, aliquid corporis debitis. Unde fuga officia inventore iusto, libero, dolorem debitis qui nisi vel consequatur ducimus tempore praesentium temporibus dolore. Libero nisi cupiditate quas suscipit expedita nostrum, unde repudiandae illum earum, facere soluta dolorum! Velit hic, odit similique iusto, libero explicabo excepturi repudiandae possimus eum provident maiores earum incidunt omnis, temporibus nihil sequi.</p>

                <div className="flex flex-wrap fixed justify-center bottom-12
                inset-x-0 px-2">
                    <div className="flex flex-wrap justify-center gap-3 shadow-lg  bg-white px-3 py-2 rounded-2xl">
                        <button onClick={() => setColor("red") }
                            className="outline:none px-4 py-1 rounded-1xl text-white shadow-lg"
                            style={{ backgroundColor: "red" }}> Red</button>
                        <button onClick={() => setColor("green")}
                            className="outline:none px-4 py-1 rounded-1xl text-white shadow-lg"
                            style={{ backgroundColor: "green" }}> Red</button>
                        <button onClick={() => setColor("blue")}
                            className="outline:none px-4 py-1 rounded-1xl text-white shadow-lg"
                            style={{ backgroundColor: "blue" }}> Red</button>
                        <button onClick={() => setColor("grey")}
                            className="outline:none px-4 py-1 rounded-1xl text-white shadow-lg"
                            style={{ backgroundColor: "grey" }}> Red</button>
                        <button onClick={() => setColor("Red")}
                            className="outline:none px-4 py-1 rounded-1xl text-white shadow-lg"
                            style={{ backgroundColor: "black" }}> Red</button>
                    </div>
                </div>
            </div>

        </>
    )

}

export default App
