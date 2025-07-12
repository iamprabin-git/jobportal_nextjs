import { FaLinkedinIn, FaTwitter, FaGithub, FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import male from '@/assets/male.jpg';
import female from '@/assets/female.jpg';

const teamMembers = [
  {
    name: 'Gita Das',
    role: 'CEO',
    image: female,
    address: 'kathmandu, Nepal',
    contact: {
      email: 'gita@gmail.com',
      phone: '+977-9800000000'
    },
    social: [
      { 
        icon: <FaLinkedinIn aria-hidden="true" />, 
        url: 'https://www.linkedin.com/in/gitadas', 
        label: 'LinkedIn' 
      },
      { 
        icon: <FaTwitter aria-hidden="true" />, 
        url: 'https://twitter.com/gitadas', 
        label: 'Twitter' 
      },
      { 
        icon: <FaFacebookF aria-hidden="true" />, 
        url: 'https://facebook.com/gitadas', 
        label: 'Facebook' 
      },
      { 
        icon: <FaWhatsapp aria-hidden="true" />, 
        url: 'https://wa.me/9779800000000', 
        label: 'WhatsApp' 
      }
    ]
  },
  {
    name: 'Hari Das',
    role: 'CTO',
    image: male,
    address: 'kathmandu, Nepal',
    contact: {
      email: 'hari@gmail.com',
      phone: '+977-9800000000'
    },
    social: [
      { 
        icon: <FaLinkedinIn aria-hidden="true" />, 
        url: 'https://www.linkedin.com/in/haridas', 
        label: 'LinkedIn' 
      },
      { 
        icon: <FaGithub aria-hidden="true" />, 
        url: 'https://github.com/haridas', 
        label: 'GitHub' 
      },
      { 
        icon: <FaFacebookF aria-hidden="true" />, 
        url: 'https://facebook.com/haridas', 
        label: 'Facebook' 
      },
      { 
        icon: <FaWhatsapp aria-hidden="true" />, 
        url: 'https://wa.me/9779800000000', 
        label: 'WhatsApp' 
      }
    ]
  },
  {
    name: 'Sita Devi',
    role: 'Head of Talent',
    image: female,
    address: 'kathmandu, Nepal',
    contact: {
      email: 'sita@gmail.com',
      phone: '+977-9801234569'
    },
    social: [
      { 
        icon: <FaLinkedinIn aria-hidden="true" />, 
        url: 'https://www.linkedin.com/in/sitadevi', 
        label: 'LinkedIn' 
      },
      { 
        icon: <FaInstagram aria-hidden="true" />, 
        url: 'https://instagram.com/sitadevi', 
        label: 'Instagram' 
      },
      { 
        icon: <FaFacebookF aria-hidden="true" />, 
        url: 'https://facebook.com/sitadevi', 
        label: 'Facebook' 
      },
      { 
        icon: <FaWhatsapp aria-hidden="true" />, 
        url: 'https://wa.me/9779801234569', 
        label: 'WhatsApp' 
      }
    ]
  },
  {
    name: 'Ram Kumar',
    role: 'Director of Partnerships',
    image: male,
    address: 'kathmandu, Nepal',
    contact: {
      email: 'ram@gmail.com',
      phone: '+977-9800000000'
    },
    social: [
      { 
        icon: <FaLinkedinIn aria-hidden="true" />, 
        url: 'https://www.linkedin.com/in/ramkumar', 
        label: 'LinkedIn' 
      },
      { 
        icon: <FaTwitter aria-hidden="true" />, 
        url: 'https://twitter.com/ramkumar', 
        label: 'Twitter' 
      },
      { 
        icon: <FaFacebookF aria-hidden="true" />, 
        url: 'https://facebook.com/ramkumar', 
        label: 'Facebook' 
      },
      { 
        icon: <FaWhatsapp aria-hidden="true" />, 
        url: 'https://wa.me/9779800000000', 
        label: 'WhatsApp' 
      }
    ]
  }
];

export default teamMembers;