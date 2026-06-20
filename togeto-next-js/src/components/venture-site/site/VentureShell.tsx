import type { ReactNode } from "react";
import TopBarArea from "@/components/top-bar/top-bar-area";
import { Header } from "./Header";
import { Footer } from "./Footer";

type VentureShellProps = {
  children: ReactNode;
};

export function VentureShell({ children }: VentureShellProps) {
  return (
    <>
      <div className="venture-top-strip">
        <TopBarArea />
      </div>
      <div className="venture-site">
        <Header variant="solid" />
        {children}
        <Footer />
      </div>
    </>
  );
}
