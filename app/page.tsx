import Link from "next/link";
import Image from "next/image";
import next from "next";

function page() {
  return (
    
    <div>
      
      <h1 className="text-3xl text-blue-500 text-center">Page1</h1>
      <p className="text-xl text-blue-400" >66162110113-9</p>
        <Link href = "/page2/page2.tsx" target="_blank">Click Here to page 2</Link>
       <div><Link href = "/page3" target="_blank">Click Here to page 3</Link></div> 
        <div className="grid sm:justify-center lg:justify-start" >
          <Image  src = "/cr7.jpg" alt="Cr7" width="400" height="400"  />
          <Image  src = "https://rmuti.ac.th/one/wp-content/uploads/2023/05/COVER-0111-12-1536x383-1.webp" alt="rmuti" width="400" height="400"  />
        </div>

    </div>
    
  );
}

export default page;