import LoginForm from "@/features/auth/LoginForm";
import RegisterForm from "@/features/auth/RegisterForm";

export default function AuthPage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-20">
      
      <div className="grid lg:grid-cols-2 gap-10 w-full max-w-6xl">
        <LoginForm />
        <RegisterForm />
      </div>

    </main>
  );
}
