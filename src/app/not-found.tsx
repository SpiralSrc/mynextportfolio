import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full h-full bg-section-gradient3">
      <div className="max-w-7xl m-auto h-full flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-start">
          <h2 className="font-bold text-xl">Page Not Found</h2>
          <p>Could not find requested page.</p>
          <Link
            href="/"
            className="mt-5 hover:text-blue-600 hover:underline underline-offset-4"
          >
            Back to homepage...
          </Link>
        </div>
      </div>
    </div>
  );
}
