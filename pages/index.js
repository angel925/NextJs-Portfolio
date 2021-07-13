import Link from "next/link"
import Layout from "../components/Layout"
import { experiences, skills, projects } from "../profile"

const Index = () => (
    <Layout>
        {/* Header Card */}

        <header className="row">
            <div className="col-md-12">
                <div className="card card-body bg-secondary text-light">
                    <div className="row">
                        <div className="col-md-4">
                            <img src="/ryan-ray-profile2.jpeg" className="img-fluid" alt="" />
                        </div>
                        <div className="col-md-8">
                            <h1>Johan Smith ramirez</h1>
                            <h3>FulStack Developer</h3>
                            <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Eveniet sunt velit placeat perferendis nisi odio, cum nam
                                consequatur accusantium quidem asperiores necessitatibus,
                                molestiae blanditiis animi doloribus veniam veritatis.
                            </p>
                            <a href="/hireme">Hire Me</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        {/* Second Seccion for page cards */}

        <div className="row py-2">
            <div className="col-md-4">
                <div className="card bg-light">
                    <div className="card-body">
                        <h1>Skills</h1>

                        {skills.map(({ skill, percentage }, i) => (
                            <div className="py-3" key={i}>
                                <h5>{skill}</h5>

                                <div className="progress">
                                    <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{ width: `${percentage}%` }}>
                                    </div>
                                </div>
                            </div>
                        ))}


                    </div>
                </div>
            </div>
            <div className="col-md-8">
                <div className="card bg-light">
                    <div className="card-body">
                        <h1>Experiences</h1>

                        <ul>
                            {
                                experiences.map(({ title, description, from, to }, i) => (

                                    <div key={i}>
                                        <li key={i}>
                                            <h5>{title}</h5>
                                        </li>
                                        <h4>{`${from} - ${to}`}</h4>
                                        <p>{description}</p>
                                    </div>
                                ))}
                        </ul>
                        <a href="/experiences" className="btn btn-outline-success">More About My Works!</a>
                    </div>
                </div>
            </div>
        </div>

        {/* Tercera Seccion Portfolio */}

        <div className="roe">
            <div className="col-md-12">
                <div className="card card-body bg-dark">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="text-center text-light">Portfolio</h1>
                        </div>
                        {
                            projects.map(({ name, description, image }, i) => (
                                <div className="col-md-4 p-2" key={i}>
                                    <div className="card h-100">
                                        <div className="overflow">
                                            <img src={`/${image}`} alt="" className='card-img-top' />

                                        </div>
                                        <div className="card-body justify-content-between">
                                            <h3 className='text-dark'>{name}</h3>
                                            <p>{description}</p>
                                            <a href="#!">Mas Info!</a>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="text-center mt-3">
                        <Link href="/portfolio">
                            <a className="btn btn-outline-info"> More Projects</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)


export default Index