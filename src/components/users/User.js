import { useEffect } from "react";
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import  Repos  from "../repos/Repos";

export default function User ({ user, loading, getUser, getUserRepos, repos, match }){

    useEffect (() => {
        getUser(match.params.login);
        getUserRepos(match.params.login);
        // eslint-disable-next-line
    }, []);
    
    const {
            name,
            avatar_url,
            location,
            bio,
            blog,
            login,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            company,
            hireable
        } = user;


        if (loading) return <Spinner />

        return (
            <>
                <Link to="/" className="btn btn-kight">
                    Back to search
                </Link>
                Hireable: { " " }
                {hireable ? <i className="fas fa-check text-sucess" /> : <i className="fas fa-times-circle text-danger" /> }

                <div className="card grid-2">
                    <div classname="all-center">
                        <img src={avatar_url} className="round-img" alt=" " style={{ width: "150px"}} />
                        <h1>{ name }</h1>
                        <p>Location: { !location ? <span> unknown </span>  : location }</p>
                    </div>
                    <div>
                        {bio ? (
                            <>
                                <h3>BIO</h3>
                                { bio }
                            </>
                        ) : (<>
                                <h3>BIO</h3>
                                <p>No bio available</p>
                            </>)
                    }
                    <a href={ html_url} className="btn btn-dark my-1">
                        Visit Github Profile
                    </a>
                    <ul>
                        <li>
                            {login ? (
                                <>
                                    <strong> Username:</strong> { login }
                                </>
                            ) : (
                                <>
                                <strong> Username:</strong> 
                                <span>
                                      {"  no username found"}
                                </span>
                                </>
                                )
                            }
                        </li>
                        <li>
                            {blog ? (
                                <>
                                    <strong> Website:</strong> { blog }
                                </>
                            ) : (
                                <>
                                <strong> Website:</strong> 
                                <span>
                                    {"  no website found"}
                                </span>
                                </>
                            )
                        }
                        </li>

                        <li>
                            {company ? (
                                <>
                                    <strong> Company:</strong> { company }
                                </>
                            ) : (
                                <>
                                <strong> Company:</strong> 
                                <span>
                                    {"  no company found"}
                                </span>
                                </>
                            )
                        }
                        </li>
                    </ul>

                    </div>
                </div>
                <div className="card text-center">
                    <div className="badge badge-primary">
                        Followers: { followers }
                    </div>
                    <div className="badge badge-success">
                        Following: { following }
                    </div>
                    <div className="badge badge-light">
                        Public Repos: { public_repos }
                    </div>
                    <div className="badge badge-dark">
                        Followers: { public_gists }
                    </div>
                </div>
                <Repos repos={ repos } />
            </>
        )
    

};

User.propTypes = {
    loading: PropTypes.bool,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired,
    getUserRepos: PropTypes.func.isRequired
}