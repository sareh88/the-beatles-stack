import {
  useCatch,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { LinksFunction, MetaFunction } from "remix";

import tailwindStylesheetUrl from "./styles/tailwind.css";
// import { getUser } from "./session.server";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: tailwindStylesheetUrl }];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Remix Notes",
  viewport: "width=device-width,initial-scale=1",
});

// type LoaderData = {
//   user: Awaited<ReturnType<typeof getUser>>;
// };

// export const loader: LoaderFunction = async ({ request }) => {
//   return json<LoaderData>({
//     user: await getUser(request),
//   });
// };

export default function App() {
  return (
    <html lang="en" className="h-full">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
export function CatchBoundary() {
  const caught = useCatch();
  return (
    <html className="h-full">
      <head>
        <title>404 Not Found</title>
        <Links />
      </head>
      <body className="h-full">
        <div className="flex min-h-full flex-col bg-white pt-16 pb-12">
          <main className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8">
            <div className="py-16">
              <div className="text-center">
                <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
                  {caught.status} error
                </p>
                <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                  {caught.statusText}
                </h1>
                <p className="mt-2 text-base text-gray-500">
                  Sorry, we couldn't find the page you're looking for.
                </p>
                <div className="mt-6">
                  <a
                    href="/"
                    className="text-base font-medium text-indigo-600 hover:text-indigo-500 hover:underline"
                  >
                    Go back home
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
