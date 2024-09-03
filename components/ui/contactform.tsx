"use client"

import React from "react"

const ContactForm: React.FC = () => {
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: "0770cfb1-3bb1-4de5-8627-577d8118a13c",
                    name: formData.get("name"),
                    email: formData.get("email"),
                    message: formData.get("message"),
                }),
            })

            const result = await response.json()

            if (result.success) {
                console.log(result)
            } else {
                console.error("Form submission failed")
            }
        } catch (error) {
            console.error("Error submitting form:", error)
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="mt-8 w-full space-y-6 px-4 sm:px-6 lg:px-2">
            <div className="mx-auto">
                <div className="mb-4">
                    <label htmlFor="name" className="sr-only">
                        Full Name
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        className="text-primary-100 relative block w-full rounded-[5px] px-3 py-3 text-sm placeholder-gray-500 outline-none focus:z-10 lg:text-lg"
                        placeholder="Full Name"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="sr-only">
                        Email address
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="text-primary-100 relative block w-full rounded-[5px] px-3 py-3 text-sm placeholder-gray-500 outline-none focus:z-10 lg:text-lg"
                        placeholder="Email address"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="sr-only">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        className="text-primary-100 relative block w-full rounded-[5px] px-3 py-3 text-sm placeholder-gray-500 outline-none focus:z-10 lg:text-lg"
                        placeholder="Your Message"></textarea>
                </div>
            </div>
            <div>
                <button
                    type="submit"
                    className="text-primary-100 group relative flex w-full max-w-[10em] justify-center rounded-[3px] bg-red-600 px-4 py-3 text-sm font-medium lg:text-lg">
                    Send Message
                </button>
            </div>
        </form>
    )
}

export default ContactForm
