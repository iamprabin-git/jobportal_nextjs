// @/data/socialMedia.js
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa"; // Changed to FaInstagram
import { FaLinkedin } from "react-icons/fa6"; // Changed to FaLinkedin
import { IoLogoYoutube } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

const SOCIAL_MEDIA = [
  { name: "Facebook", icon: <FaFacebookF />, url: "#" },
  { name: "Twitter", icon: <FaXTwitter />, url: "#" },
  { name: "Instagram", icon: <FaInstagram />, url: "#" },
  { name: "LinkedIn", icon: <FaLinkedin />, url: "#" },
  { name: "YouTube", icon: <IoLogoYoutube />, url: "#" },
  { name: "GitHub", icon: <FaGithub />, url: "#" },
];

export default SOCIAL_MEDIA;