import RepoItem from "./RepoItem.js"
import PropTypes from "prop-types";

const Repos = ({ repos }) => {
    return repos ? repos.map(repo => <RepoItem repo={ repo } key={ repo.id } />) : <p>loading</p>
}


Repos.propTypes = {
    repos: PropTypes.array.isRequired
}

export default Repos;