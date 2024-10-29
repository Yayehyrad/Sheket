/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       
        colors: {
          primary: '#FF6B6B', // A vibrant red for primary actions
          secondary: '#4ECDC4', // A teal for secondary actions
          accent: '#FFE66D', // A soft yellow for highlights and accents
          background: '#F7F9FC', // A light background color
          text: '#333333', // Dark text for readability
          muted: '#B0B0B0', // Muted text for less important information
          success: '#28A745', // Green for success messages
      
        }
     
    },
  },
  plugins: [],
}