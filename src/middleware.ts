import { withAuth } from "next-auth/middleware"

export default withAuth(
  // `withAuth` augments `Request` with the user's token.
  function middleware(req) {
    // console.log("request", req)
    // console.log(req.nextauth.token)
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        // console.log("middleware token",token?.role)
        return token?.role === "admin"
      },
    },
  }
)

export const config = { matcher: ["/dashboard"] }