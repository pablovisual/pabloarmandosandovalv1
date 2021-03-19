import StarIcon from "@material-ui/icons/Star";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export const contactList = [
  {
    sources: {
      "Email":["mailto:pabloarmandosandoval@gmail.com", <MailOutlineIcon />],
      "LinkedIn":["https://www.linkedin.com/in/pablo-sandoval-645336172/", <FontAwesomeIcon icon={faLinkedin} />],
      "GitHub":["https://github.com/pablovisual", <FontAwesomeIcon icon={faGithub} />],
    },
  },
];