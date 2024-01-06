import { User } from "@/payload-types";
import { ExpressContext } from "@/server";
import { TRPCError, initTRPC } from "@trpc/server";
import { PayloadRequest } from "payload/types";

const t = initTRPC.context<ExpressContext>().create();

const middleware = t.middleware
// authorized to make payment
const isAuthorized = middleware(async ({ctx, next}) => {
    const req = ctx.req as PayloadRequest

    const {user} = req as {user: User | null}

    if(!user || !user.id) {
        throw new TRPCError({code: "UNAUTHORIZED"})
    }
    return next({
        ctx: {
            user,
        },
    })
})

export const router = t.router

// public endpoint
export const publicProcedure = t.procedure
export const privateProcedure = t.procedure.use(isAuthorized)