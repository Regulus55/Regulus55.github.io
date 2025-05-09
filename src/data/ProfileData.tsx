import { IconType } from "react-icons";
import {
  FaIdCardAlt,
  FaGithub,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { SiVelog } from "react-icons/si";


export const ProfileIcon: Record<string, IconType> = {
  name: FaIdCardAlt,
  github: FaGithub,
  blog: SiVelog,
  phone: FaPhone,
  email: FaEnvelope,
};

export const ProfileData = [
  { key: "name", title: "클립보드에 복사", value: "김학준", type: "copy" },
  { key: "phone", title: "클립보드에 복사", value: "010-9169-6952", type: "copy" },
  { key: "email", title: "클립보드에 복사", value: "hakjoon55@gmail.com", type: "copy" },
  { key: "blog", title: "블로그로 이동", value: "velog.io/@regulus", type: "url" },
  { key: "github", title: "깃허브로 이동", value: "github.com/Regulus55", type: "url" },
];


