import '../src/app/globals.css'
import type { GetServerSidePropsContext, InferGetServerSidePropsType } from "next"
import { getProviders, signIn, getCsrfToken } from "next-auth/react"
import { getServerSession } from "next-auth/next"
import { options } from "../src/app/api/auth/[...nextauth]/options"
import SignInComponent from "@/app/components/SignInComponent"

export default function SignInPage({
    csrfToken,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return <SignInComponent csrfToken={csrfToken} />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const session = await getServerSession(context.req, context.res, options)

    // If the user is already logged in, redirect.
    if (session) {
        return { redirect: { destination: "/" } }
    }

    const providers = await getProviders()
    const csrfToken = await getCsrfToken(context)

    return {
        props: {
            providers: providers ?? [],
            csrfToken,
        },
    }
}
