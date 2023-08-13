import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "~/utils/api";
// import "~/styles/globals.css";
import { MantineProvider } from "@mantine/core";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  // pageProps: { session, ...pageProps },
  pageProps: { ...pageProps },
}) => {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        components: {
          Button: {
            defaultProps: {
              size: "xs",
              color: "blue",
            },
          },

          Switch: {
            defaultProps: {
              size: "xs",
              onLabel: "ON",
              offLabel: "OFF",
            },
          },
        },
      }}
    >
      {/* <SessionProvider session={session}> */}
      <Component {...pageProps} />
      {/* </SessionProvider> */}
    </MantineProvider>
  );
};

export default api.withTRPC(MyApp);
