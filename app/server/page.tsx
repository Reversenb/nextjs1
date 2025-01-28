export default function page() {
    async function create(formData: FormData) {
        'use server';
        const email = formData.get('email');
        console.log(email);
        console.log("Email sent to the server");
    }

    return (
        <div>
            <form action={create}>
                <input type="email" name="email"/>
                <button>Submit</button>
            </form>
        </div>
    )
}
