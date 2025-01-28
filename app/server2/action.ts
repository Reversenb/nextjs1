"use server"
export async function createEmail(formData: FormData) {
    'use server'
    const email = formData.get('email')
    console.log(email)
    console.log("Email sent to the server")
}