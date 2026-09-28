# UX journeys (/drive)

Run `pnpm dev` on a port in the project's CORS list (3333, 5173, 5174); on any
other port the Studio shell loads but `users/me` is blocked by CORS.

## studio boots

- go to /
- expect the "Choose login provider" screen (or the Structure tool when signed in)
- expect no console errors

## schema

- run `pnpm exec sanity schema validate`
- expect 0 errors, 0 warnings
