import Link from "next/link"

export default function page() {
    return (
        <div>
            <h1>this is Dashboard</h1>
            <Link href="/dashboard/setting">goto setting</Link>
        </div>
    );
}
    
