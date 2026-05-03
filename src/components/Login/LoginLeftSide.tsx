const LoginLeftSide = () => {
  return (
    <div className="hidden h-screen md:flex flex-col items-center justify-center bg-indigo-950 text-white border-r border-slate-50 overflow-hidden relative">
      <div className="absolute -top-20 -left-10  size-52 rounded-full bg-indigo-500/20 blur-2xl" />
      <div className="mx-auto w-full max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Employee <br />
          Management System
        </h1>
        <p className="text-lg text-slate-400 max-w-md leading-relaxed mb-8">
          Streamline your workforce operations, track attendance, manage payroll, and empower your
          team securely.
        </p>
      </div>
    </div>
  );
};

export default LoginLeftSide;
