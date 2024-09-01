export default function Layout({ children }) {
  return (
    <div className="flex flex-col bg-red-500">
      <div>children Layout</div>

      {children}
    </div>
  );
}
