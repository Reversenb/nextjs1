import Link from "next/link";
import Image from "next/image";
import next from "next";

function page() {
  return (
    
    <div>
      
      <h1 className="text-3xl text-blue-500 text-center">Hello World</h1>
      <p className="text-xl text-blue-400" >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit dignissimos eligendi molestiae, accusantium 
        aperiam, porro iure autem cumque possimus ipsam facere voluptatum nulla aliquid doloremque voluptate libero id dolorem commodi?</p>
        <Link href = "https://www.youtube.com/watch?v=D2eqZ-xOp9A" target="_blank">Click Here</Link>
        <div className="grid sm:justify-center lg:justify-start" >
          <Image  src = "/cr7.jpg" alt="Cr7" width="400" height="400"  />
          <Image  src = "https://rmuti.ac.th/one/wp-content/uploads/2023/05/COVER-0111-12-1536x383-1.webp" alt="rmuti" width="400" height="400"  />
        </div>

    </div>
    
  );
}

export default page;