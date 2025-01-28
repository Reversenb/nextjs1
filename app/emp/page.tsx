


export default async function Page() {
    const results = await fetch('http://localhost:3000/api/emp')
    console.log(results)
    if (!results.ok) {
        throw new Error("Check your api")
    }
    const emps = await results.json()
    console.log(emps)

    return (
        <div>
            {emps.map((emp: any,index:number) =>(
                <div key={index}>
                    {emp.name} ||
                    {emp.age} ||
                    {emp.salaly} ||
                </div>
            )
            )}
        </div>
    );
}