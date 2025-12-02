"use server"

export async function subscribeToNewsletter(formData: FormData) {
  const email = formData.get("email") as string

  if (!email) {
    return { success: false, error: "Email is required" }
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, error: "Invalid email address" }
  }

  try {
    const response = await fetch("https://formsubmit.co/ajax/momodukamarakolleh0@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email,
        _subject: "New Newsletter Subscription - Core Brim Tech",
        message: `New subscriber: ${email}`,
        _template: "table",
      }),
    })

    if (response.ok) {
      return { success: true, message: "Successfully subscribed! Check your inbox for updates." }
    } else {
      return { success: false, error: "Failed to subscribe. Please try again." }
    }
  } catch (error) {
    console.error("Newsletter subscription error:", error)
    return { success: false, error: "An error occurred. Please try again later." }
  }
}
