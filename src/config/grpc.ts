export default {
  url:
    `${process.env["URL_GRPC"]}:${process.env["PORT_GRPC"]}` ??
    "localhost:50051",
  port: process.env["PORT_GRPC"] ?? 50051,
  urlUtilMs: process.env["URL_MS_UTIL_GRPC"] ?? "localhost:50054",
  urlComposerMs: process.env["URL_MS_COMPOSER_GRPC"] ?? "localhost:50055",
  urlConnextMs: process.env["URL_MS_CONNEXT_GRPC"] ?? "localhost:50053"
};
