import Link from "next/link";
const menus = [
    {name: "Home", path: "/http://localhost:3000/"},
    {name: "About us", path: "#"},
    {name: "Page1", path: "/page1"},
    {name: "Page2", path: "/page2"},
    {name: "Page3", path: "/page3"}
]
    
        

export default function Navbar() {
    return (
        <div className="w-full sticky top-0 flex justify-between bg-gray-300" >
            <div>Logo</div>
            <div className="flex justify-between">
                <ul className="flex gap-x-6 hover:bg-gray-400">
                <li><Link href="http://localhost:3000/" >Home</Link></li>
                <li><Link href="#" >About us</Link></li>
                    <li><Link href="/page1" >Page1</Link></li>
                    <li><Link href="/page2" >Page2</Link></li>
                    <li><Link href="/page3" >Page3</Link></li>
                    <li><Link href="/fruit" >Fruit</Link></li>
                </ul>
            </div>

        </div>
    )
}