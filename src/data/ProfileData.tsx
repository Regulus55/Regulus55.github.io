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

export const ProfileData = {
  name: "김학준",
  github: "github.com/Regulus55",
  blog: "ddd",
  phone: "010-9169-6952",
  email: "hakjoon55@gmail.com",
};
