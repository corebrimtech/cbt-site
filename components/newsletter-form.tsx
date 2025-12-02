"use client"

import type React from "react"

import { useState, useTransition } from "react"
import { subscribeToNewsletter } from "@/app/actions/newsletter"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"

export function NewsletterForm() {
  const [isPending, startTransition] = useTransition()
  const { toast } = useToast()
  const [email, setEmail] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    startTransition(async () => {
      const result = await subscribeToNewsletter(data)

      if (result.success) {
        toast({
          title: "Success!",
          description: result.message,
        })
        setEmail("")
        form.reset()
      } else {
        toast({
          title: "Error",
          description: result.error,
          variant: "destructive",
        })
      }
    })
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
      <Input
        type="email"
        name="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        disabled={isPending}
        className="flex-1 bg-white text-foreground"
      />
      <Button type="submit" disabled={isPending} className="bg-white text-blue-600 hover:bg-gray-100 whitespace-nowrap">
        {isPending ? "Subscribing..." : "Subscribe"}
      </Button>
    </form>
  )
}
