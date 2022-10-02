import { useState } from "react"
import "reactjs-popup/dist/index.css"
import { randInt } from "three/src/math/MathUtils"

const data = [
    {
        "id": "0",
        "picture": "/images/game/figure0.png",
        "name": "boy father fishing moon"
    },
    {
        "id": "1",
        "picture": "/images/game/figure1.png",
        "name": "girl horse moon"
    },
    {
        "id": "2",
        "picture": "/images/game/figure2.png",
        "name": "aliens wedding moon"
    },
    {
        "id": "3",
        "picture": "/images/game/figure3.png",
        "name": "family picnic moon"
    },
    {
        "id": "4",
        "picture": "/images/game/figure4.png",
        "name": "man playing football moon"
    },
    {
        "id": "5",
        "picture": "/images/game/figure5.png",
        "name": "two cats playing chess moon"
    },
    {
        "id": "6",
        "picture": "/images/game/figure6.png",
        "name": "woman shopping moon"
    }
]

function selectPicture() {
    let picture = randInt(0, 6)
    return picture
}


let pictureSelected = selectPicture()

const correct = data[pictureSelected].name
const correctArray = correct.split(" ")

for (let i = 0; i < correctArray.length; i++) {
    correctArray[i] = correctArray[i].toLowerCase()
}

export default function Play() {
    const [answer, setAnswer] = useState("")
    const handleSubmit = (event) => {
        event.preventDefault()
        setAnswer("")
        pictureSelected = selectPicture()


        const answerArray = answer.split(" ")

        for (let i = 0; i < answerArray.length; i++) {
            answerArray[i] = answerArray[i].toLowerCase()
        }

        let found = 0

        for (let i = 0; i < correctArray.length; i++) {
            for (let j = 0; j < answerArray.length; j++) {
                if (correctArray[i] === answerArray[j]) {
                    found++
                }
            }
        }

        if (found >= correctArray.length - 1) {
            alert("You are correct!")
        } else {
            alert("You are wrong!")

        }
    }

    return (
        <div className="h-screen bg-bg bg-cover">
            <div className="text-white mt-32">
                <p className="text-[42px] font-semibold">Play around the moon !</p>
                <p className="text-[25px] mt-4">Try to guess thse AI-generated picture, you have limited tempts 🤓</p>
            </div>
            <img className="mt-8 mx-auto w-[400px] h-[400px] rounded-[20px] border-2 border-white-500 " src={"/images/game/figure" + pictureSelected + ".png"} alt="image" />
            
            <form onSubmit={handleSubmit} className="mx-auto mt-8 flex justify-center">
                <input  
                    className="glass border-black border-2 px-12 py-3 mr-2 text-white"
                    type="text"
                    placeholder='Make your guess here !'
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                />
                <input className="glass border-black border-2 px-6 py-3  text-white" type="submit" value="Submit" />
            </form>
        </div>
    )
}