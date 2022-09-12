/* eslint-disable */
import { BiShoppingBag, BiPencil } from "react-icons/bi";
import { BsCodeSlash, BsClipboardData } from "react-icons/bs";
import { AiOutlineMail, AiFillAudio } from "react-icons/ai";
import {
  FaInternetExplorer,
  FaChalkboardTeacher,
  FaCameraRetro,
  FaPinterest,
  FaVideo,
  FaTabletAlt,
  FaRegNewspaper,
} from "react-icons/fa";

export const servicesData = [
  {
    id: 1,
    title: "E-Commerce",
    icon: <BiShoppingBag />,
  },
  {
    id: 2,
    title: "Web Apps",
    icon: <BiPencil />,
  },
  {
    id: 11,
    title: "Mobile Apps",
    icon: <FaTabletAlt />,
  },
  {
    id: 3,
    title: "API integration",
    icon: <AiOutlineMail />,
  },
  // {
  //     id: 4,
  //     title: 'Internet Research',
  //     icon: <FaInternetExplorer />
  // },
  // {
  //     id: 5,
  //     title: 'Tutoring',
  //     icon: <FaChalkboardTeacher />
  // },

  {
    id: 6,
    title: "Product development",
    icon: <BsCodeSlash />,
  },
  {
    id: 7,
    title: "Web Design",
    icon: <FaCameraRetro />,
  },
  // {
  //     id: 8,
  //     title: 'Pinterest Virtual Assistant',
  //     icon: <FaPinterest />
  // },
  // {
  //   id: 9,
  //   title: "Video Editing",
  //   icon: <FaVideo />,
  // },
  {
    id: 10,
    title: "Database",
    icon: <BsClipboardData />,
  },
  // {
  //     id: 12,
  //     title: 'Audio Transcription',
  //     icon: <AiFillAudio />
  // },
  {
    id: 13,
    title: "Blog Integration",
    icon: <FaRegNewspaper />,
  },
];
