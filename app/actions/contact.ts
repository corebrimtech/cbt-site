"use server"

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const message = formData.get("message") as string

  // Validate inputs
  if (!name || !email || !message) {
    return { success: false, error: "All fields are required" }
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, error: "Invalid email address" }
  }

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    })

    const data = await response.json()

    if (data.success) {
      return { success: true, message: data.message }
    } else {
      return { success: false, error: data.error }
    }
  } catch (error) {
    console.error("Contact form error:", error)
    return {
      success: false,
      error: "An error occurred. Please email us directly at momodukamarakolleh0@gmail.com",
    }
  }
}
