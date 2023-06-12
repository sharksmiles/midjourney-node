import "dotenv/config";
import { Midjourney } from "midjourney";
/**
 *
 * a simple example of using the imagine api with ws and proxy
 * ```
 * npx tsx example/imagine-ws-proxy.ts
 * ```
 */
export default async function main(prompt:string) {
  const client = new Midjourney({
    ServerId: <string>process.env.SERVER_ID,
    ChannelId: <string>process.env.CHANNEL_ID,
    SalaiToken: <string>process.env.SALAI_TOKEN,
    ProxyUrl: <string>process.env.PROXY_URL,
    HuggingFaceToken: <string>process.env.HUGGINGFACE_TOKEN,
    Debug: true,
    Ws: true,
  });
  await client.init();
  const msg = await client.Imagine(
    prompt,
    (uri: string, progress: string) => {
      console.log("loading", uri, "progress", progress);
    }
  );
  console.log({ msg });
  return {msg}
}
// main()
//   .then(() => {
//     console.log("finished");
//     process.exit(0);
//   })
//   .catch((err) => {
//     console.log("finished");
//     console.error(err);
//     process.exit(1);
//   });
