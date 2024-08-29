import { ReactElement } from "react";

import { render } from "@testing-library/react";

import RootLayout from "@/app/layout";
import StoreProvider from "@/providers/StoreProvider";

import {
  AppRouterContext,
  type AppRouterInstance,
} from "next/dist/shared/lib/app-router-context.shared-runtime";

const renderWithProviders = (children: ReactElement) => {
  return render(
    <StoreProvider>
      <AppRouterContext.Provider value={{} as AppRouterInstance}>
        <RootLayout>{children}</RootLayout>
      </AppRouterContext.Provider>
    </StoreProvider>
  );
};

export default renderWithProviders;
