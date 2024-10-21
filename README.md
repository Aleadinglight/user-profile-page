# Next.js User Authentication and Profile Management

This study project demonstrates user authentication and profile management using Next.js, React, and Supabase. It serves as a practical exploration of modern web development concepts.

## Features

- User authentication (login, registration, logout, profile CRUD operation)
- Protected routes
- User profile management
- Responsive design

## Key Concepts

1. **Next.js Framework**: Server-side rendering, API routes, server actions
2. **Authentication Flow**: Implementation of secure login and registration processes
3. **Backend as a Service**: Integration with Supabase for authentication and data storage
4. **Route projection**: Implementing middleware to secure specific routes and redirect unauthenticated users
5. **Modern UI Development**: Component-based architecture, responsive design using shadcn/ui
6. **Form Handling**: Controlled components, submission, and validation
7. **Error Handling**: Displaying user feedback and handling authentication errors

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up a Supabase project and add credentials to `.env.local`
4. Run the development server: `npm run dev`
5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Environment Variables

Required environment variables:
- `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase project's anonymous key

## Further Exploration
- Implementing social authentication
- Adding real-time features using Supabase subscriptions
- Enhancing form validation
- Implementing unit and integration tests
- Optimizing performance using Next.js features like ISR


## FAQ
# Next.js User Authentication and Profile Management

[... previous content remains the same ...]

## FAQ

### Q: Why am I getting a "406 Not Acceptable" error when trying to fetch user profiles?

A: This error typically occurs when Row Level Security (RLS) is enabled on your Supabase profiles table, but no policies have been added. To resolve this:

1. Go to your Supabase project dashboard.
2. Navigate to the "Authentication" section in the sidebar.
3. Click on "Policies".
4. Find your "profiles" table in the list.
5. Add the following policies:

```sql
-- Policy to allow users to select their own profile
CREATE POLICY "Users can view own profile" ON profiles
  FOR SELECT
  USING (auth.uid() = id);

-- Policy to allow users to insert their own profile
CREATE POLICY "Users can insert own profile" ON profiles
  FOR INSERT
  WITH CHECK (auth.uid() = id);

-- Policy to allow users to update their own profile
CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE
  USING (auth.uid() = id);
```

After adding these policies, authenticated users should be able to fetch and update their own profiles.