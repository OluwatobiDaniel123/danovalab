import { Seo } from "../components/Seo";
import { ButtonLink } from "../components/Button";

export function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      <Seo title="Page Not Found" description="The page you're looking for doesn't exist." />
      <div className="absolute inset-0 bg-grid opacity-30 mask-fade-b" aria-hidden />
      <div className="absolute -top-40 left-1/2 h-96 w-[60rem] -translate-x-1/2 rounded-full bg-brand-100 blur-3xl" aria-hidden />
      <div className="relative">
        <p className="font-display text-8xl font-bold text-ink-200">404</p>
        <h1 className="mt-4 text-display-md font-bold text-ink-900">Page not found.</h1>
        <p className="mt-4 max-w-md text-muted-600">
          The page you're looking for may have been moved or no longer exists.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <ButtonLink to="/" iconRight="arrow">Back home</ButtonLink>
          <ButtonLink to="/contact" variant="outline">Contact us</ButtonLink>
        </div>
      </div>
    </div>
  );
}
