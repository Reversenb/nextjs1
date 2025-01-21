

export default async function Page({params}:{params : {slug : string}}) {
   
    const slug = (await params).id;
    console.log('slug = ',slug);
    return (
        <div>
            {slug}
        </div>
    );
}