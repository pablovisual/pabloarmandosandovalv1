import StarIcon from "@material-ui/icons/Star";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export const contactList = [
  {
    sources: {
      "Email":["mailto:pabloarmandosandoval@gmail.com", <MailOutlineIcon />, "#4CAF50"],
      "LinkedIn":["https://www.linkedin.com/in/pablo-sandoval-645336172/", <FontAwesomeIcon icon={faLinkedin} />, "#2867B2"],
      "GitHub":["https://github.com/pablovisual", <FontAwesomeIcon icon={faGithub} />, "#171515"],
    },
  },
];