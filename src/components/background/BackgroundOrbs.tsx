export function BackgroundOrbs() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute rounded-full blur-[120px] opacity-[0.14] w-[55vmax] h-[55vmax] bg-[radial-gradient(circle,#6366f1,transparent_70%)] -top-[22%] -left-[12%] animate-[orbFloat_18s_ease-in-out_infinite_alternate]" />
      <div className="absolute rounded-full blur-[120px] opacity-[0.12] w-[45vmax] h-[45vmax] bg-[radial-gradient(circle,#0ea5e9,transparent_70%)] -bottom-[18%] -right-[10%] animate-[orbFloat_18s_ease-in-out_infinite_alternate] [animation-delay:-8s]" />
      <div className="absolute rounded-full blur-[120px] opacity-[0.07] w-[30vmax] h-[30vmax] bg-[radial-gradient(circle,#a78bfa,transparent_70%)] top-[40%] right-[20%] animate-[orbFloat_18s_ease-in-out_infinite_alternate] [animation-delay:-4s]" />
    </div>
  );
}
