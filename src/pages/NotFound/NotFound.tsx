export default function NotFound() {
  return (
    <div
      id="error-page"
      className="h-screen w-full flex justify-center items-center flex-col gap-2"
    >
      <h1 className="font-bold text-3xl">Oops!</h1>
      <p>Sorry, page not found.</p>
    </div>
  );
}
