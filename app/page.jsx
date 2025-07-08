import App from "./HomePage"

export const metadata = {
    title:"new Home"
}

const page = () => {
 // throw new Error("This is a test error for the new error boundary feature in Next.js 14.0.0");
  return (
    <App />
  )
}

export default page
