import {useState, useEffect} from "react";
import {USAPreview} from "./USAPreview.tsx"
import {USA} from  "../interfaces/type.ts"

export default function USAListContent() {

    const [usa, setUSA] = useState<USA[]>([]);

    useEffect(() => {
        async function fetchData(): Promise<void> {
            try {
                const rawData = await fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population");
                const {data} : {data: USA[]} = await rawData.json();
                setUSA(data);
                console.log("Data fetched successfully");
            } catch (e) {
                console.error("There was an error:", e);

            }
        }
        fetchData();
    }, []);






    return (
        <div>


            <div>

                {
                    usa.map((usa => <USAPreview usa={usa} />))
                }
            </div>
        </div>
    )
}

