import Link from "next/link"
import Image from "next/image";

function page() {
    return (
        <div>
            <h1 className="text-4xl text-center">This is Page 2</h1>
            <Image src="/lamine.jpg" alt="Cr7" width={400} height={400} />
            <h2>66162110113-9</h2>
            <div><Link href="/page1">back to page 1</Link></div>
            <div><Link href="/page3">go to page 3</Link></div>
        </div>
    );
    
}

export default page;