'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useRouter } from 'next/navigation'
import { logout } from "@/app/auth/action";

export default function UserSettingsPage() {
  const router = useRouter()

  const handleLogout = async () => {
    try {
      // Handle the logout logic
      await logout();
      // Redirect back to the auth page after logout
      router.push('/auth');
    } catch (error) {
      console.error('Logout failed:', error);
      // Optionally, display an error message to the user
      alert('An error occurred while logging out. Please try again.');
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-[600px]">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">User Settings</CardTitle>
          <CardDescription>Manage your account settings here</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">Welcome to your settings page!</p>
          <Button onClick={handleLogout}>Logout</Button>
        </CardContent>
      </Card>
    </div>
  )
}