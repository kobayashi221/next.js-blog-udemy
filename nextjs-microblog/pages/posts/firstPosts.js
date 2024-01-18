import Layout from "@/components/Layout"
import Head from "next/head"
import Link from "next/link"


export default function FirstPosts() {
    return (
        <Layout>
        <div>
            <Head>
                <title>最初の投稿</title>
            </Head>
            <h1>最初の投稿</h1>
            <Link href="/">ホームへ戻る</Link>
        </div>
        </Layout>
    )
}