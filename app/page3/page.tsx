import Link from "next/link"
import Image from "next/image";
function page() {

    return (
        <div>
            <h1 className="text-4xl text-center">This is Page 3</h1>
            <Image src="/anty.jpg" alt="Cr7" width={400} height={400} />
            <div><Link href="/page2" >back to page 2</Link></div>
            <div><Link href="/page1" >back to page 1</Link></div>
        </div>
    );
}

export default page;