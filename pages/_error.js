import Layout from "../components/Layout";

const _error = ({ statusCode }) => {
    return (
        <Layout>
            {
                statusCode ? 
                (
                    <p className="text-center"> No se pudo cargar la pagina {statusCode}</p>
                ) :
                (
                    <p className="text-center"> Error </p>
                )
            }
        </Layout>
    )
}

export default _error;