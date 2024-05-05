'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Dashboard = () => {
  const router = useRouter();

  // Check if user is authenticated
  useEffect(() => {
    // If not authenticated, redirect to login
    // Example: Check authentication state from context/store
    const isAuthenticated = true; // Example: Replace with actual check
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, []);

  return (
    <div>
      <h1>Welcome to Dashboard</h1>
      {/* Dashboard content */}
    </div>
  );
};

export default Dashboard;
