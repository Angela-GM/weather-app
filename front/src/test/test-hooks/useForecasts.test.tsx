import { renderHook } from '@testing-library/react-hooks';
import { QueryClient, QueryClientProvider } from 'react-query';
import { describe, expect, test } from "vitest";
import { useForecasts } from '../../hooks/useForecasts';

const queryClient = new QueryClient();

const wrapper = ({ children }: { children: React.ReactElement }) => (
    <QueryClientProvider client={queryClient}>
    {children}
    </QueryClientProvider>
   );
   
   describe('useForecasts', () => {
    test('should fetch forecasts', async () => {
    const { result, waitFor } = renderHook(() => useForecasts(), { wrapper });
   
    await waitFor(() => result.current.forecastsAllQuery.isSuccess);
    await waitFor(() => result.current.forecastsTodayQuery.isSuccess);
   
    expect(result.current.forecastsAllQuery.data).toBeDefined();
    expect(result.current.forecastsAllQuery.isSuccess).toBe(true);
    expect(result.current.forecastsTodayQuery.data).toBeDefined();
    expect(result.current.forecastsTodayQuery.isSuccess).toBe(true);
    });
   });