import { Suspense, type ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";

import ThemeRegistry from "./style/ThemeRegistry";
import { Toaster } from "sonner";
import Loader from "./components/Loader";
import ConfigureAwsClientSide from "./cognitoConfig";

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <ThemeRegistry options={{ key: "joy" }}>
        <html lang="en">
          <body>
            <Toaster closeButton richColors />
            <div id="root">
              <Suspense fallback={<Loader />}>
              <ConfigureAwsClientSide />
                <main>{children}</main>
              </Suspense>
            </div>
          </body>
        </html>
      </ThemeRegistry>
    </StoreProvider>
  );
}
