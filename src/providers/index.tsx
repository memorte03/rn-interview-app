import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

type Props = {
  children: React.ReactNode;
};
export const queryClient = new QueryClient({});

export default function Providers({children}: Props) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
