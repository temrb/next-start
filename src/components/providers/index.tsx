import React, { ReactNode } from 'react';
import { ThemeProvider } from './theme-provider';
import { Toaster } from '@/components/ui/sonner';

const Providers = async ({ children }: { children: ReactNode }) => {
	return (
		<ThemeProvider
			attribute='class'
			defaultTheme='light'
			enableSystem
			disableTransitionOnChange
		>
			{children}
			<Toaster />
		</ThemeProvider>
	);
};

export default Providers;
