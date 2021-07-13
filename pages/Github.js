import Layout from "../components/Layout";
import Error from './_error';


const Github = ({ user, statusCode  }) => {

  if(statusCode){
    return <Error statusCode={statusCode}/>;
  }

  const { name, company, avatar_url, bio, blog, html_url, location } = user;
  return (
    <Layout footer = {false} dark = { true}>
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="card card-body text-center">
            <h1>{name}</h1>
            <img src={avatar_url} alt="" />
            <p>{bio}</p>
            <p><span class="badge rounded-pill bg-info">{company}</span></p>
            <a href={blog} target="_blank" class="btn btn-success my-2">My blog</a>
            <a href={ html_url} target="_blank" className="btn btn-outline-info">Go to My Github</a>
          </div>
        </div>
      </div>
    </Layout>
  )
}


export async function getServerSideProps() {

  const res = await fetch('https://api.github.com/users/angel925');

  const data = await res.json();

  console.log(res.status)

  const statuCode = res.status > 200 ? res.status : false;




  return {
    props: {
      user: data,
      statuCode
    }
  }
}

export default Github;