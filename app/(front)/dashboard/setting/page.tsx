import Link from "next/link"

export default function page() {
    return (
        <div>
            <h1 className="text-4xl">This is setting page</h1>
            <Link href="/dashboard" >Back to dashboard</Link>
        </div>
    );
}