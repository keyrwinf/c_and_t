import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "@/utils/react-query-client";
import { ThemeProvider } from "@/contexts/theme-context";
import Layout from "@/components/organisms/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
