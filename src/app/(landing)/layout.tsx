"use client";

import { Provider } from "react-redux";

import { MainHeader } from "@/components/organisms/main-header";
import { store } from "@/stores/store";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Provider store={store}>
        <MainHeader />
        {children}
      </Provider>
    </>
  );
}
