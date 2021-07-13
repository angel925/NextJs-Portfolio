import Layout from "../components/Layout";
import Link from 'next/link'

const cunstom404 = () => (
    <Layout>
        <div className="text-center">
            <h1>404</h1>
            <p>This page Not Exists Return to 
                <Link href="/">
                    <a> Home </a>
                </Link>
            </p>
        </div>
    </Layout>
)

export default cunstom404;