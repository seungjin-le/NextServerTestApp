import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import PageTransition from "@/container/PageTransition";
import "@/styles/tailwind.css";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  return (
    <PageTransition>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </PageTransition>
  );
}
