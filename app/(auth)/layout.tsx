export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md page-fade-in">
        <div className="text-center mb-8">
          <div className="text-6xl mb-2">🎌</div>
          <h1 className="text-2xl font-extrabold bg-gradient-to-r from-pink to-lav bg-clip-text text-transparent">
            Bonjour avec Phoebe
          </h1>
          <p className="text-sm opacity-70 mt-1">
            Belajar Bahasa Prancis bareng Phoebe
          </p>
        </div>
        <div className="glass-card p-8">{children}</div>
      </div>
    </div>
  );
}
