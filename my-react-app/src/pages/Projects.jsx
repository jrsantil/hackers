import { useEffect, useState } from 'react'
import GithubCard from '../components/GithubCard'
import './Projects.css'

function Projects() {
    const [reposArray, setReposArray] = useState([]);
    const [avatarURL, setAvatarURL] = useState();
    async function getUser() {
        await fetch("https://api.github.com/users/jrsantil")
            .then((res) => res.json())
            .then((result) => {
                console.log(result)
                setAvatarURL(result.avatar_url)
            }, (error) => {
                console.log(error)
            }
            )

    }

    async function getRepos() {
        await fetch("https://api.github.com/users/jrsantil/repos")
            .then((res) => res.json())
            .then((result) => {
                console.log(result)
                setReposArray(result)
            }, (error) => {
                console.log(error)
            }
            )
    }
    // runs on initial page render
    useEffect(() => {
        getUser()
        getRepos()
    }, [])
    return (
        <>
        <div className='gitHubCards'>
            {reposArray.map((repo, index) => (
                <GithubCard image_url={avatarURL} key={index} repo_title={repo.name} repo_url={repo.html_url}/>
            ))}

        </div>
        </>
    )
}

export default Projects;