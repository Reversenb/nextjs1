

export default async function Page({params}:{params : {slug : string}}) {
   
    const slug = (await params).slug;
    console.log('slug = ',slug);
    return (
        <div>
            {slug}
        </div>
    );
}