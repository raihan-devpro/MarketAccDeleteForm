import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path';
import tailwindcss from '@tailwindcss/vite';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    chunkSizeWarningLimit: 1000, // Set limit to 1000 kB
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React and routing
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],

          // AWS related
          'aws': ['aws-amplify'],

          // All Radix UI components
          'radix-ui': [
            '@radix-ui/react-accordion',
            '@radix-ui/react-alert-dialog',
            '@radix-ui/react-aspect-ratio',
            '@radix-ui/react-avatar',
            '@radix-ui/react-checkbox',
            '@radix-ui/react-collapsible',
            '@radix-ui/react-context-menu',
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-hover-card',
            '@radix-ui/react-label',
            '@radix-ui/react-menubar',
            '@radix-ui/react-navigation-menu',
            '@radix-ui/react-popover',
            '@radix-ui/react-progress',
            '@radix-ui/react-radio-group',
            '@radix-ui/react-scroll-area',
            '@radix-ui/react-select',
            '@radix-ui/react-separator',
            '@radix-ui/react-slider',
            '@radix-ui/react-slot',
            '@radix-ui/react-switch',
            '@radix-ui/react-tabs',
            '@radix-ui/react-toast',
            '@radix-ui/react-toggle',
            '@radix-ui/react-toggle-group',
            '@radix-ui/react-tooltip'
          ],

          // Form related
          'form-handling': [
            'react-hook-form',
            '@hookform/resolvers',
            'zod'
          ],

          // Stripe related
          'payment': [
            '@stripe/react-stripe-js',
            '@stripe/stripe-js'
          ],

          // UI utilities and styling
          'ui-utils': [
            'class-variance-authority',
            'clsx',
            'date-fns',
            'tailwind-merge',
            'lucide-react'
          ],

          // State management
          'state': [
            'zustand',
            'jotai',
            'immer'
          ],

          // Carousel and complex UI components
          'complex-ui': [
            'embla-carousel',
            'embla-carousel-react',
            '@tanstack/react-table',
            'react-day-picker',
            'react-phone-number-input',

            'react-dropzone',
            'react-resizable-panels',
            'recharts'
          ]
        }
      }
    }
  }
})
