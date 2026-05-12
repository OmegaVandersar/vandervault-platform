export default function RegisterForm() {
  return (
    <div className="w-full max-w-md bg-zinc-950 border border-white/10 rounded-3xl p-8">

      <h2 className="text-3xl font-bold text-white mb-2">
        Create Account
      </h2>

      <p className="text-zinc-500 mb-8">
        Begin onboarding into the VanderVault platform.
      </p>

      <form className="space-y-5">

        <div>
          <label className="text-sm text-zinc-400">
            Full Name
          </label>

          <input
            type="text"
            placeholder="John Carter"
            className="w-full mt-2 p-4 rounded-2xl bg-black border border-white/10 outline-none focus:border-amber-500"
          />
        </div>

        <div>
          <label className="text-sm text-zinc-400">
            Email Address
          </label>

          <input
            type="email"
            placeholder="name@example.com"
            className="w-full mt-2 p-4 rounded-2xl bg-black border border-white/10 outline-none focus:border-amber-500"
          />
        </div>

        <div>
          <label className="text-sm text-zinc-400">
            Password
          </label>

          <input
            type="password"
            placeholder="••••••••"
            className="w-full mt-2 p-4 rounded-2xl bg-black border border-white/10 outline-none focus:border-amber-500"
          />
        </div>

        <button
          className="w-full py-4 rounded-2xl bg-amber-500 text-black font-bold"
        >
          Create Account
        </button>

      </form>
    </div>
  );
}
