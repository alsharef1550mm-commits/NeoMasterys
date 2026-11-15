# NeoMasterys

NeoMasterys is a static-exported Next.js site served by Nginx on the Oracle host.

## Build

```sh
npm ci
npm run lint
npm run build
```

The production build is written to `out/`. The current pages are statically rendered, so deployment does not need a separate Next.js process.

## Oracle deployment

- Public site: `https://neomasterys.com/`
- MyCamply: `https://neomasterys.com/mycamply/`
- NeoMasterys static files: `/opt/neomasterys/site`
- MyCamply has its own API service on port `3102` and its own PostgreSQL database and role.
- EnglishFLO continues to use its existing service and database.

The DNS `A` record for `@` must point to the Oracle host. The `www` record should point to `neomasterys.com`. After DNS points to Oracle, issue the TLS certificate for both names and enable HTTPS in Nginx.
