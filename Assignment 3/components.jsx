import { useState } from "react";

// 1. TextUpdater Component
function TextUpdater() {
  const [text, setText] = useState("");
  return (
    <div className="p-4">
      <input
        type="text"
        className="border p-2 rounded"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p className="mt-2">You typed: {text}</p>
    </div>
  );
}

// 2. Form Component
function TextForm() {
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
  };
  return (
    <form onSubmit={handleSubmit} className="p-4">
      <input
        type="text"
        className="border p-2 rounded mr-2"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Submit
      </button>
    </form>
  );
}

// 3. UserCard Component
function UserCard({ name, email }) {
  return (
    <div className="border p-4 rounded-lg shadow-md w-64">
      <h2 className="text-lg font-bold">{name}</h2>
      <p className="text-gray-600">{email}</p>
    </div>
  );
}

// 4. Button Component
function CustomButton() {
  return (
    <button
      className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
      onClick={() => console.log("Button clicked!")}
    >
      Click Me
    </button>
  );
}

// 5. LoginForm Component
function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nPassword: ${password}`);
  };
  
  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-2">
      <input
        type="email"
        className="border p-2 rounded w-full"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        className="border p-2 rounded w-full"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
        Login
      </button>
    </form>
  );
}

export default function App() {
  return (
    <div className="p-8 space-y-4">
      <TextUpdater />
      <TextForm />
      <UserCard name="John Doe" email="john@example.com" />
      <CustomButton />
      <LoginForm />
    </div>
  );
}