-- Database schema for Nowgong Polytechnic Digital Platform

-- Users table
CREATE TABLE users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text UNIQUE NOT NULL,
  role text NOT NULL CHECK (role IN ('student', 'admin', 'faculty')),
  created_at timestamp with time zone DEFAULT now()
);

-- Students table
CREATE TABLE students (
  id uuid PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
  roll_number text UNIQUE NOT NULL,
  department text NOT NULL,
  semester int NOT NULL,
  cgpa float
);

-- Announcements table
CREATE TABLE announcements (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  category text NOT NULL,
  created_at timestamp with time zone DEFAULT now()
);

-- Departments table
CREATE TABLE departments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text
);

-- Faculty table
CREATE TABLE faculty (
  id uuid PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
  name text NOT NULL,
  department_id uuid REFERENCES departments(id),
  designation text NOT NULL
);

-- Documents table
CREATE TABLE documents (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  file_url text NOT NULL,
  type text NOT NULL,
  uploaded_by uuid REFERENCES users(id)
);

-- Payments table
CREATE TABLE payments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id uuid REFERENCES students(id),
  amount float NOT NULL,
  status text NOT NULL CHECK (status IN ('paid', 'pending')),
  created_at timestamp with time zone DEFAULT now()
);

-- Enable Row Level Security (optional, for security)
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE students ENABLE ROW LEVEL SECURITY;
ALTER TABLE announcements ENABLE ROW LEVEL SECURITY;
ALTER TABLE departments ENABLE ROW LEVEL SECURITY;
ALTER TABLE faculty ENABLE ROW LEVEL SECURITY;
ALTER TABLE documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE payments ENABLE ROW LEVEL SECURITY;