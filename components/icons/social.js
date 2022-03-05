import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faSpotify } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { IconLink } from '../core/typography'

export function LinkedInIconLink () {
    return (
        <IconLink>
            <a href="https://linkedin.com/in/joshuathompsonlindley">
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
        </IconLink>
    )
}

export function GithubIconLink () {
    return (
        <IconLink>
            <a href="https://github.com/joshuathompsonlindley">
                <FontAwesomeIcon icon={faGithub} />
            </a>
        </IconLink>
    )
}

export function SpotifyIconLink () {
    return (
        <IconLink>
            <a href="https://open.spotify.com/user/nxxq0c7necw4ujd0sxt1hla5c?si=48d84c06417f4a9d">
                <FontAwesomeIcon icon={faSpotify} />
            </a>
        </IconLink>
    )
}

export function MailIconLink () {
    return (
        <IconLink>
            <a href="mailto://joshua@overflow.digital">
                <FontAwesomeIcon icon={faEnvelope} />
            </a>
        </IconLink>
    )
}

