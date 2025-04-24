import { IconType } from "react-icons";
import {
  FaIdCardAlt,
  FaGithub,
  FaPen,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

export const ProfileIcon: Record<string, IconType> = {
  name: FaIdCardAlt,
  github: FaGithub,
  blog: FaPen,
  phone: FaPhone,
  email: FaEnvelope,
};

export const ProfileData = [
  { key: "name", value: "김학준", link: false },
  { key: "phone", value: "010-9169-6952", link: false },
  { key: "github", value: "github.com/Regulus55", link: true, type: "url" },
  { key: "blog", value: "velog.io/@regulus/posts", link: true, type: "url" },
  { key: "email", value: "hakjoon55@gmail.com", link: true, type: "copy" }, // type: "mailto" -> "copy"
];

