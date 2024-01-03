"use client";

import { trpc } from "@/trpc/client";
import { Loader2, XCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

interface VerifyEmailProps {
  token: string;
}

const VerifyEmail = ({ token }: VerifyEmailProps) => {
  const { data, isLoading, isError } = trpc.auth.verifyEmail.useQuery({
    token,
  });

  if (isError) {
    return (
      <div className="flex flex-col items-center gap-2">
        <XCircle className="h-10 w-10 text-red-600" />
        <h3 className="font-semibold text-3xl">There was a problem</h3>
        <p className="text-muted-foreground text-lg">
          This token is not valid or might be expired.
        </p>
      </div>
    );
  }

  if (data?.success) {
    return (
      <div className="flex h-full flex-col items-center justify-center">
        <div className="relative mb-4 h-80 w-80 text-muted-foreground">
          <Image src="/verified.svg" alt="email was sent" fill />
        </div>

        <h3 className="font-semibold text-2xl">You&apos;re all set!</h3>
        <p className="text-muted-foreground text-center mt-1">
          Thank you for verifying your email.
        </p>
        <Link
          className={buttonVariants({
            className: "mt-4",
          })}
          href={"/sign-in"}
        >
          Sign in
        </Link>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="animate-spin h-10 w-10 text-zinc-400" />
        <h3 className="font-semibold text-3xl">Verifying...</h3>
        <p className="text-muted-foreground text-lg">
          This won&apos;t take long.
        </p>
      </div>
    );
  }
};

export default VerifyEmail;
