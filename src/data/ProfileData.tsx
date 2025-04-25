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
  { key: "name", value: "김학준", type: "copy" },
  { key: "phone", value: "010-9169-6952", type: "copy" },
  { key: "email", value: "hakjoon55@gmail.com", type: "copy" },
  { key: "blog", value: "velog.io/@regulus", type: "url" },
  { key: "github", value: "github.com/Regulus55", type: "url" },
];


