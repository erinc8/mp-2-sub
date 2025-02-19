import {useState, useEffect} from "react";
import {USAPreview} from "./USAPreview.tsx"
import {USA} from  "../interfaces/type.ts"

export default function USAListContent() {
    const [numUSA, setNumUSA] = useState(5);
    const [usa, setUSA] = useState<USA[]>([]);

   /* useEffect(() => {
        async function getUSA() {
            const res = await fetch (`https://datausa.io/api/data?drilldowns=Nation&measures=Population&limit=${numUSA}`);
            const data = await res.json();
            setUSA(data.data);
        }
        getUSA();
    })
*/
    useEffect(() => {
        async function getUSA() {
            try {
                const res = await fetch(`https://datausa.io/api/data?drilldowns=Nation&measures=Population&limit=${numUSA}`);
                if (!res.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await res.json();
                setUSA(data.data);
            } catch (error) {
                console.error('Error fetching USA data:', error);
                // Optionally set an error state here
            }
        }

        getUSA();

        return () => {
            // Cleanup function if needed
        };
    }, [numUSA]);



    return (
        <div>
            <input type = "number"
                   placeholder="Number of artworks"
                   value = {numUSA}
                   onChange={(e) => setNumUSA(Number(e.target.value))} />
            <div>
                <p>numUSA: {numUSA}</p>
                {
                    usa.map((usa => <USAPreview usa={usa} />))
                }
            </div>
        </div>
    )
}

