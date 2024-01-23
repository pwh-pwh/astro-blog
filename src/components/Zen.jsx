import { useState } from 'preact/hooks';

export default function Zen() {
    //fetch data from https://api.github.com/zen and return data to resp
    const [zen, setZen] = useState("Favor focus over features.");
    const getZen = () => {
        fetch('https://api.github.com/zen')
            .then(resp => resp.text())
            .then(data => {
                console.log(data)
                setZen(data)

            })
            .catch(err => console.error(err))
    }

    return (
        <div>
            <h3>{zen}</h3>
            <button onClick={() => getZen()}>
                Some tips
            </button>
        </div>
    );
}