import { GSContext } from "@godspeedsystems/core";

export default async function (ctx: GSContext, args: any) {
  try {
    const response = await ctx.datasources.api.execute(ctx, {
      meta: {
        method: 'get',
        url: `/anything?id=${args.query.id}`,
      },
    });
    return response;
  } catch (error: any) {
    console.error('Error fetching data:', error.message);
    return { success: false, message: error.message };
  }
};