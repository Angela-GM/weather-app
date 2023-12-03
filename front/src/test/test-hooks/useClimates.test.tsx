import { renderHook } from '@testing-library/react-hooks';
import { QueryClient, QueryClientProvider } from 'react-query';
import { describe, expect, test } from "vitest";
import { useClimates } from "../../hooks/useClimates";

const queryClient = new QueryClient();

const wrapper = ({ children }: { children: React.ReactElement }) => (
 <QueryClientProvider client={queryClient}>
 {children}
 </QueryClientProvider>
);

describe('useClimates', () => {
 test('should fetch climates', async () => {
 const { result, waitFor } = renderHook(() => useClimates(), { wrapper });

 await waitFor(() => result.current.isSuccess);

 expect(result.current.data).toBeDefined();
 expect(result.current.isSuccess).toBe(true);
 });
});
