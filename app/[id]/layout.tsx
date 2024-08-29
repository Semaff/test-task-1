import React, { PropsWithChildren } from "react";

import RedirectHomeButton from "@/components/buttons/RedirectHomeButton";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <main className="w-full max-w-5xl mx-auto px-3 flex flex-col items-center sm:items-start">
      <RedirectHomeButton />
      {children}
    </main>
  );
}
