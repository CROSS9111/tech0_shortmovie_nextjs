import { verifyPassword } from './password';
import { User } from 'next-auth';

// This is a mock database. In a real application, you would use a actual database.
const mockDb = {
  users: [
    { id: '1', email: 'user@example.com', password: 'storedHashedPassword' },
  ],
};

export async function getUserFromDb(email: string, password: string): Promise<User | null> {
  // In a real application, you would query your database here
  const user = mockDb.users.find(u => u.email === email);

  if (!user) {
    return null;
  }

  // Verify the password
  const isValid = verifyPassword(user.password, password);

  if (!isValid) {
    return null;
  }

  // Return user without the password, conforming to the User type
  return {
    id: user.id,
    email: user.email,
    name: user.email.split('@')[0], // Optional: create a name from the email
  };
}