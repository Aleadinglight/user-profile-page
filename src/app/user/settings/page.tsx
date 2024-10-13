'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useRouter } from 'next/navigation'

export default function UserSettingsPage() {
    const router = useRouter()

    const handleLogout = () => {
        // Here you would typically handle the logout logic
        console.log('Logging out...')
        router.push('/auth') // Redirect back to the auth page after logout
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