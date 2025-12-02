import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Validate inputs
    if (!name || !email || !message) {
      return NextResponse.json({ success: false, error: "All fields are required" }, { status: 400 })
    }

    // Using Web3Forms public endpoint
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: "851d415f-0124-4378-8c6c-d1df60bce7f8",
        name,
        email,
        message,
        subject: `New Contact Form from ${name} - Core Brim Tech`,
        from_name: "Core Brim Tech Website",
        to_email: "momodukamarakolleh0@gmail.com",
      }),
    })

    const data = await response.json()

    if (data.success) {
      return NextResponse.json({
        success: true,
        message: "Message sent successfully! We'll get back to you soon.",
      })
    } else {
      return NextResponse.json(
        {
          success: false,
          error: "Failed to send message. Please try again.",
        },
        { status: 500 },
      )
    }
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      {
        success: false,
        error: "An error occurred. Please email us directly at momodukamarakolleh0@gmail.com",
      },
      { status: 500 },
    )
  }
}
